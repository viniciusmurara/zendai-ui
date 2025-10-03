"use client";

import { CircleUserRound, Settings, LogOut, User, Bell, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button onClick={toggleMenu} className="flex items-center gap-2 pl-3 pr-2 py-2 bg-primary cursor-pointer rounded-full text-secondary">
                <ChevronDown className="mt-0.5" />
                <p className="font-semibold text-xl">João Silva</p>
                <CircleUserRound size={28} />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-beige border-2 border-primary rounded-xl shadow-lg z-50">
                    <div className="p-4 border-b border-primary">
                        <p className="text-primary font-semibold">João Silva</p>
                        <p className="text-primary-dark text-sm">joao.silva@email.com</p>
                    </div>
                    
                    <nav className="p-2">
                        <ul className="space-y-1">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 px-3 py-2 text-primary hover:bg-primary hover:text-beige rounded-lg transition-colors"
                                >
                                    <User size={18} />
                                    Meu Perfil
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 px-3 py-2 text-primary hover:bg-primary hover:text-beige rounded-lg transition-colors"
                                >
                                    <Bell size={18} />
                                    Notificações
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 px-3 py-2 text-primary hover:bg-primary hover:text-beige rounded-lg transition-colors"
                                >
                                    <Settings size={18} />
                                    Configurações
                                </a>
                            </li>
                            <li className="border-t border-primary pt-1 mt-1">
                                <button
                                    className="w-full flex items-center gap-3 px-3 py-2 text-primary hover:bg-red-500 hover:text-white rounded-lg transition-colors"
                                >
                                    <LogOut size={18} />
                                    Sair
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}

            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}