import React from "react";
import Link from "next/link";

interface AnimatedLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({
    href,
    children,
    className,
}) => {
    return (
        <Link
            href={href}
            className={`group relative overflow-hidden text-sm inline-block ${className}`}
        >
            <span className="block transition duration-500 ease-out group-hover:-translate-y-[120%] opacity-80">
                {children}
            </span>
            <span className="absolute left-0 top-0 block translate-y-[120%] transition duration-500 ease-out group-hover:translate-y-0">
                {children}
            </span>
        </Link>
    );
};
