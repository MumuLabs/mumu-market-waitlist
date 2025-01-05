"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import React, {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

interface ModalContextType {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [open, setOpen] = useState(false);

	return (
		<ModalContext.Provider value={{ open, setOpen }}>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};

export function Modal({ 
	children,
	open,
	onOpenChange,
}: { 
	children: ReactNode;
	open: boolean;
	onOpenChange?: (open: boolean) => void;
}) {
	return (
		<ModalContext.Provider value={{ open, setOpen: onOpenChange ?? (() => {}) }}>
			{children}
		</ModalContext.Provider>
	);
}

export const ModalBody = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	const { open } = useModal();
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [open]);

	const { setOpen } = useModal();
	useOutsideClick(modalRef, () => setOpen(false));

	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-40"
					>
						<div
							className="fixed inset-0 bg-[#0b1427]/40 z-40"
							style={{
								WebkitBackdropFilter: "blur(8px)",
								backdropFilter: "blur(8px)",
							}}
						/>
					</motion.div>
					<div className="fixed inset-0 z-50 flex items-center justify-center">
						<motion.div
							ref={modalRef}
							className={cn(
								"min-h-[50%] max-h-[90%] w-[90%] md:max-w-[40%] bg-[#0b1427] border border-transparent dark:border-neutral-800 md:rounded-2xl relative flex flex-col flex-1 overflow-hidden",
								className,
							)}
							initial={{
								opacity: 0,
								scale: 0.5,
								rotateX: 40,
								y: 40,
							}}
							animate={{
								opacity: 1,
								scale: 1,
								rotateX: 0,
								y: 0,
							}}
							exit={{
								opacity: 0,
								scale: 0.8,
								rotateX: 10,
							}}
						>
							<CloseIcon />
							{children}
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>
	);
};

export const ModalContent = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col flex-1 p-8 md:p-10", className)}>
			{children}
		</div>
	);
};

const CloseIcon = () => {
	const { setOpen } = useModal();
	return (
		<button
			onClick={() => setOpen(false)}
			className="absolute top-4 right-4 group"
		>
			<XIcon className="h-5 w-5 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 transition duration-200" />
		</button>
	);
};

export const useOutsideClick = (
	ref: React.RefObject<HTMLDivElement | null>,
	callback: () => void
) => {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			callback();
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, callback]);
};
