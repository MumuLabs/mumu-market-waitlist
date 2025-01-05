import React from "react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Modal, ModalBody, ModalContent } from "@/components/ui/animated-modal";
import { MumuWaitListUserForm } from "@/components/sections/hero/_components/user-form";
import { MumuWaitListBusinessForm } from "@/components/sections/hero/_components/business-form";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}


export const MumuWaitlistModal = ({
    isOpen,
    onClose
}: ModalProps) => {
    return (
        <Modal open={isOpen} onOpenChange={onClose}>
            <ModalBody className="bg-white dark:bg-[#0b1427]">
                <ModalContent>
                    <h2 className="text-2xl font-bold mb-6 text-center">Join Our Waitlist</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-left">
                        Sign up for our waitlist to get early access to our product. We'll
                        notify you when we're launching Mumu Market and how we plan to go
                        about providing early access to our first few users.
                    </p>

                    <Tabs defaultValue="user" className="w-full">
                        <TabsList className="grid grid-cols-2 mb-8">
                            <TabsTrigger value="user">Regular User</TabsTrigger>
                            <TabsTrigger value="business">Business Owner</TabsTrigger>
                        </TabsList>

                        <TabsContent value="user">
                            <MumuWaitListUserForm />
                        </TabsContent>

                        <TabsContent value="business">
                            <MumuWaitListBusinessForm />
                        </TabsContent>
                    </Tabs>
                </ModalContent>
            </ModalBody>
        </Modal>
    );
};