"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
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

export function Modal({ children }: { children: ReactNode }) {
	return <ModalProvider>{children}</ModalProvider>;
}

export const ModalTrigger = ({
	text,
	className,
}: {
	text: string;
	className?: string;
}) => {
	const { setOpen } = useModal();
	return (
		<button type="button" className={className} onClick={() => setOpen(true)}>
			{text}
		</button>
	);
};

export const ModalBody = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	const { open } = useModal();

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [open]);

	// @ts-ignore
	const modalRef: any = useRef(null);

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

export const ModalFooter = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex justify-end p-4 bg-slate-400/10", className)}>
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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-white h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M18 6l-12 12" />
				<path d="M6 6l12 12" />
			</svg>
		</button>
	);
};

// TODO: Refactor this.
export const CloseButton = ({ className }: { className?: string }) => {
	const { setOpen } = useModal();

	return (
		<button
			className={cn(
				"px-2 py-1 dark:text-white border border-white rounded-md text-sm w-28",
				className,
			)}
			onClick={() => setOpen(false)}
		>
			Cancel
		</button>
	);
};

export const useOutsideClick = (
	ref: React.RefObject<HTMLDivElement>,
	callback: Function,
) => {
	useEffect(() => {
		const listener = (event: any) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			callback(event);
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, callback]);
};
