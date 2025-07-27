import { useState, useEffect } from 'react';
import { Separator } from '@radix-ui/react-separator';
import Instagram from '@/assets/instagram.svg';
import Facebook from '@/assets/facebook.svg';
import Menu from '@/assets/hamburger.svg';
import { Link } from 'react-scroll'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet.tsx";
import { Button } from './ui/button';
import { Scissors } from 'lucide-react';
import Logo from '@/assets/logo.png';

const Header = () => {
    const [activeSection, setActiveSection] = useState('');

    const navSections = [
        { name: 'hero', displayName: "Home", scrollToOffset: 0, headerScrollDetectionOffset: 100 },
        { name: 'about', displayName: "About Us", scrollToOffset: -100, headerScrollDetectionOffset: 100 },
        { name: 'services', displayName: "Our Services", scrollToOffset: -190, headerScrollDetectionOffset: 200 },
        { name: 'contact', displayName: "Contact Us", scrollToOffset: -65, headerScrollDetectionOffset: 100 },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY

            for (const section of navSections) {
                const element = document.getElementById(section.name);
                if (element) {
                    const top = element.offsetTop - section.headerScrollDetectionOffset;
                    const bottom = top + element.offsetHeight - 100;

                    if (scrollPosition >= top && scrollPosition < bottom) {
                        setActiveSection(section.name);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // call initially to set state on load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navSections]);

    const socialButtons = <>
        <Avatar className='hover:shadow-xl hover:shadow-gray-700 hover:cursor-pointer' onClick={() => window.open("https://www.instagram.com/")}>
            <AvatarImage src={Instagram} alt="@shadcn" className='p-1' />
            <AvatarFallback>Instagrm for Pelmani Handmade Russian Dumplings</AvatarFallback>
        </Avatar>
        <Avatar className='hover:shadow-xl hover:shadow-gray-700 hover:cursor-pointer' onClick={() => window.open("https://www.facebook.com/")}>
            <AvatarImage src={Facebook} alt="@shadcn" className='p-1' />
            <AvatarFallback>Facebook for Pelmani Handmade Russian Dumplings</AvatarFallback>
        </Avatar>
    </>

    const DesktopHeader = () => {
        return (<div className='p-4 flex w-full justify-between items-center'>
            <div className='flex items-center w-1/3 '>
                <div className='flex items-center gap-3 hover:cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img
                        src={Logo}
                        alt="banner logo"
                        className="w-[17vh]"
                    />
                </div>
            </div>
            <div className="flex gap-7">
                {navSections.filter(x => x.name !== 'hero').map(section => {
                    return (
                        <Link
                            key={section.name}
                            to={section.name}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={section.scrollToOffset}
                            className={`${activeSection === section.name ? "font-bold text-gray-700" : "text-gray-400"} hover:underline hover:scale-105 transition-transform duration-300 text-xl cursor-pointer`}
                        >
                            <div className='whitespace-nowrap'>{section.displayName}</div>
                        </Link>
                    )
                })}
            </div>
            <div className='w-1/3 flex justify-end items-center gap-2 pr-5'>
                {socialButtons}
                <Button onClick={() => window.open("https://book.squareup.com/appointments/v2jf4gqxpigym7/location/LYFN8NM0H2R11/services")} className='!text-gray-100'>BOOK NOW <Scissors /></Button>
            </div>
        </div>);
    }

    const MobileHeader = () => {
        return (
            <div className='p-4 flex w-full justify-between items-center'>
                <div className='flex items-center gap-3 w-[30%]'>
                    {/* Hamburger menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Avatar className='hover:shadow hover:shadow-gray-700 hover:cursor-pointer'>
                                <AvatarImage src={Menu} alt="@shadcn" className='p-1' /><AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>The Barber</SheetTitle>
                                <SheetDescription>
                                    Navigate to different sections here!
                                </SheetDescription>
                                <div className="flex flex-col gap-5 py-3">
                                    {navSections.filter(x => x.name !== 'hero').map(section => (
                                        <SheetClose asChild key={section.name}>
                                            <Link
                                                key={section.name}
                                                to={section.name}
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                                offset={section.scrollToOffset}
                                                className={`text-lg font-semibold text-white cursor-pointer`}
                                            >
                                                {section.displayName}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </div>
                                <Button onClick={() => window.open("https://book.squareup.com/appointments/v2jf4gqxpigym7/location/LYFN8NM0H2R11/services")} className='!text-gray-100 w-[90%]'>BOOK NOW <Scissors /></Button>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className='flex gap-5'>
                    <img
                        src={Logo}
                        alt="banner logo"
                        className="border rounded-full h-[10vw]"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    />
                </div>
                <div className='w-[30%] flex justify-end items-center gap-2'>
                    {socialButtons}
                </div>
            </div>
        )
    }

    return (
        <div className="sticky top-0 bg-white border-b z-20">
            {/* MobileHeader: Hidden on medium screens and up, visible below medium */}
            <div className="md:hidden">
                <MobileHeader />
            </div>

            {/* DesktopHeader: Hidden below medium screens, visible on medium screens and up. This is because the md:flex (display: flex) overrides the hidden (display: hidden) property when at md size */}
            <div className="hidden md:flex flex-grow justify-end">
                <DesktopHeader />
            </div>
            <div className="w-full flex justify-center"><Separator /></div>
        </div>
    );
};

export default Header;