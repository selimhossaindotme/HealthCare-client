"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet,  SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";


const PublicNavbar = () => {

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Consultation", href: "/consultation" },
        { name: "Health plans", href: "/health-plans" },
        { name: "Diagnostics", href: "/diagnostics" },
        { name: "NGOs", href: "/ngos" },
    ]

    const healthText = "Health";
    const careText = "-Care";

    return (
        <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-around bg-white px-4 shadow-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                {/* Logo */}
                <div>
                    <Link
                        href="/"
                        className="flex items-center justify-center text-xl font-bold"
                    >
                        {/* Health */}
                        <span className="text-primary">
                            {healthText.split("").map((letter, index) => (
                                <motion.span
                                    key={`${letter}-${index}`}
                                    initial={{ opacity: 1, y: 0 }}
                                    animate={{
                                        opacity: [1, 0, 0, 1],
                                        y: [0, -8, 8, 0],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        repeatDelay: 1,
                                        delay: index * 0.15,
                                        ease: "easeInOut",
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </span>

                        {/* -Care */}
                        <span className="text-secondary">
                            {careText.split("").map((letter, index) => (
                                <motion.span
                                    key={`${letter}-${index}`}
                                    initial={{ opacity: 1, y: 0 }}
                                    animate={{
                                        opacity: [1, 0, 0, 1],
                                        y: [0, -8, 8, 0],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        repeatDelay: 1,
                                        delay: (index + healthText.length) * 0.15,
                                        ease: "easeInOut",
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </span>
                    </Link>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="text-lg font-medium text-gray-700 hover:text-secondary">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="hidden md:block">
                    <Link href="/login">
                        <Button variant="secondary">Login</Button>
                    </Link>
                </div>
            </div>

            {/* mobile menu button */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger render={<Button variant="outline">
                        <Menu className="h-5 w-5" />
                    </Button>} />
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Navigation Menu</SheetTitle>
                            <nav className="flex flex-col space-y-4 mt-8">
                                    {navItems.map((item) => (
                                        <Link
                                         key={item.name} 
                                         href={item.href}
                                          className="text-lg font-medium text-gray-700 hover:text-secondary">
                                            {item.name}
                                        </Link>
                                    ))}

                                    <div className="border-t pt-4">
                                        <Link href="/login">
                                            <Button variant="secondary">Login</Button>
                                        </Link>
                                    </div>
                               
                            </nav>

                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

        </header>
    );
};

export default PublicNavbar;