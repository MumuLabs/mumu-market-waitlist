"use client";

import React from "react";
import { Modal, ModalBody, ModalContent } from "@/components/ui/animated-modal";
import { ContactUsForm } from "./contact-us-form";

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactUsModal({ isOpen, onClose }: ContactUsModalProps) {
  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalBody className="bg-white dark:bg-[#0b1427]">
        <ModalContent>
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-left">
            We would love to hear from you! Please fill out the form below
            and we’ll get back to you as soon as possible.
          </p>
          <ContactUsForm onSuccess={onClose} />
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}