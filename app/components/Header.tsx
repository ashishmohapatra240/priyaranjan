'use client';

import { useState } from 'react';

interface HeaderProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export default function Header({ isDarkMode, toggleTheme }: HeaderProps) {
    const [selectedItem, setSelectedItem] = useState<'workshop' | 'agency' | 'store'>('workshop');

    const navItems = [
        { id: 'workshop' as const, label: 'workshop' },
        { id: 'agency' as const, label: 'agency' },
        { id: 'store' as const, label: 'store' },
    ];

    return (
        <header className="flex items-center justify-between px-6 md:px-24 py-8">
            <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                <span className="font-medium text-lg">priyaranjan</span>
            </div>

            <div className="hidden md:flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-6">
                    {navItems.map((item) => (
                        <div key={item.id} className="flex flex-col items-center space-y-1">
                            <button
                                onClick={() => setSelectedItem(item.id)}
                                className="text-sm font-medium transition-colors hover:opacity-70"
                            >
                                {item.label}
                            </button>
                            <div
                                className={`w-1 h-1 rounded-full transition-opacity ${selectedItem === item.id
                                    ? isDarkMode ? 'bg-white opacity-100' : 'bg-black opacity-100'
                                    : 'opacity-0'
                                    }`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right side - Theme toggle and 4 circles */}
            <div className="flex items-center space-x-4">
                <button
                    onClick={toggleTheme}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${isDarkMode
                        ? 'bg-gray-800 text-white hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                >
                    {isDarkMode ? 'light mode' : 'dark mode'}
                </button>

                {/* 2x2 circle grid */}
                <button className="p-2">
                    <div className="grid grid-cols-2 gap-1">
                        <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                        <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                        <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                        <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                    </div>
                </button>
            </div>
        </header>
    );
} 