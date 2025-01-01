import React from "react";
import {
	CloseButton,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalTrigger,
} from "../../ui/animated-modal";
import { modalStyles } from "./styles";
import { WaitlistForm } from "@/components/sections/waitlist/_components/form";
import { twMerge } from "tailwind-merge";

export function WaitlistModal() {
	return (
		<Modal>
			<ModalTrigger
				text="Join Mumu 🐫"
				className="px-8 py-4 rounded-full bg-gradient-to-b from-[#d4a595] to-[#d4a595]/80 via-[#d4a595]/80 text-white font-medium  hover:scale-105 transition-transform duration-300"
			/>
			<ModalBody className="w-full">
				<ModalContent className="max-w-full">
					<h4
						className={twMerge(
							`${modalStyles.heading} text-2xl text-white/70 font-bold text-center mb-8`,
						)}
					>
						Join Mumu
					</h4>
					<p className="text-white/70 text-left mb-8">
						Join our waitlist to be notified when we launch Mumu and get access
						to Mumu's exclusive early access program for early adopters. We hope
						you'll join us and help us build the future of Mumu!
					</p>
					<WaitlistForm />
				</ModalContent>
				<ModalFooter className="mt-6 flex justify-end">
					<CloseButton
						className={twMerge(
							`${modalStyles.closeButton} rounded-md bg-transparent p-2 text-black hover:bg-[#d4a595]/80`,
						)}
					/>
				</ModalFooter>
			</ModalBody>
		</Modal>
	);
}

export default WaitlistModal;
