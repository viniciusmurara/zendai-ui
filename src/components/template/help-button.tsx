"use client";

import { CircleHelp, X } from "lucide-react";
import { useState } from "react";

export default function HelpButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button
                onClick={openModal}
                className="p-2 bg-primary cursor-pointer text-beige hover:bg-primary-light transition-colors rounded-full shadow-lg hover:shadow-xl"
                title="Ajuda"
            >
                <CircleHelp size={26} />
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                        onClick={closeModal}
                    />
                    
                    <div className="relative bg-beige rounded-xl shadow-lg max-w-xl w-full mx-4 p-6">
                        <button
                            onClick={closeModal}
                            className="absolute cursor-pointer top-4 right-4 text-primary hover:text-primary-light transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="pr-8">
                            <h2 className="text-3xl font-bold text-primary mb-6">
                                What is ZendAI?
                            </h2>
                            <p className="text-primary text-lg">
                                ZendAI is your smart daily planner that revolutionizes how you organize your day. Just type everything you need to do today, in any order, like a brainstorm session. Our intelligent AI will transform your scattered ideas into a perfectly organized schedule, with optimal times, smart priorities, and helpful reminders. Later, inside the interactive board, you&apos;ll be able to fine-tune details such as preferred hours, task repetitions, personal notes, and even set custom notifications. Experience the future of productivity with ZendAI&apos;s intuitive interface and powerful automation features.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}