"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
    const [expandedMonths, setExpandedMonths] = useState<string[]>([]);

    const monthsData = {
        "September": ["Sep 15", "Sep 22", "Sep 28"],
        "August": ["Aug 5", "Aug 12", "Aug 19", "Aug 25"],
        "July": ["Jul 3", "Jul 10", "Jul 18", "Jul 24", "Jul 30"],
        "June": ["Jun 8", "Jun 14", "Jun 21"]
    };

    const toggleMonth = (month: string) => {
        setExpandedMonths(prev => 
            prev.includes(month) 
                ? prev.filter(m => m !== month)
                : [...prev, month]
        );
    };
    return (
        <aside className="sidebar-scroll fixed left-0 top-0 h-full w-[18%] bg-primary overflow-y-scroll z-20">
            <div className="p-8 flex flex-col gap-12">
                <div className="flex justify-center">
                    <Link href="/chat" className="block">
                        <Image
                            src="/zendai-logo.svg"
                            alt="Zendai Logo"
                            width={44}
                            height={44}
                            className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                        />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-3 px-4 py-3 text-beige hover:bg-primary-dark rounded-xl transition-colors text-xl"
                            >
                                <Search size={20} /> Search
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-3 px-4 py-3 text-beige hover:bg-primary-dark rounded-xl transition-colors text-xl"
                            >
                                <CirclePlus size={20} /> Add Task
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul className="space-y-1">
                        {Object.entries(monthsData).map(([month, dates]) => (
                            <li key={month}>
                                <button
                                    onClick={() => toggleMonth(month)}
                                    className="w-full flex items-center justify-between cursor-pointer px-4 py-3 text-beige hover:bg-primary-dark rounded-xl transition-colors text-xl"
                                >
                                    <span>{month}</span>
                                    {expandedMonths.includes(month) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {expandedMonths.includes(month) && (
                                    <ul className="ml-4 mt-2 space-y-1">
                                        {dates.map((date) => (
                                            <li key={date}>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-beige text-lg hover:bg-primary-dark rounded-lg transition-colors opacity-80 hover:opacity-100"
                                                >
                                                    {date}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}