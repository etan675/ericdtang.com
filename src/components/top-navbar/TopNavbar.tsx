'use client'

import { usePathname } from 'next/navigation';
import React from 'react';
import NavbarLink from './NavbarLink';
import Link from 'next/link';
import GithubIcon from '../svg-components/GithubIcon';
import classNames from 'classnames';

type Props = Readonly<{
    className?: string,
}>;

const TopNavbar = ({ className = '' }: Props) => {
    const pathname = usePathname();
    const rootRoute = pathname.split('/')[1];
    
    return (
        <header className={classNames(
            'flex flex-col px-12 py-6 text-xl font-semibold w-screen',
            'fixed top-0 left-0 bg-black bg-opacity-20 z-50 backdrop-blur-md border-b border-gray-600',
            className
        )}>
            <div className='flex justify-between'>
                <Link href='/' className='hover:underline hover:decoration-solid cursor-pointer'>
                    Eric Tang
                </Link>
                <div className='flex gap-6 items-center'>
                    <NavbarLink 
                        href='/' 
                        isActive={rootRoute === ''}
                    >
                        Home
                    </NavbarLink>
                    <NavbarLink 
                        href='/about' 
                        isActive={rootRoute === 'about'}
                    >
                        About
                    </NavbarLink>
                    <NavbarLink 
                        href='/work' 
                        isActive={rootRoute === 'work'}
                    >
                        Work
                    </NavbarLink>
                    <NavbarLink 
                        href='/projects' 
                        isActive={rootRoute === 'projects'}
                    >
                        Projects
                    </NavbarLink>
                    <Link href='https://github.com/etan675' target='_blank'>
                        <GithubIcon className='w-[1.2em] h-[1.2em]' fill='#939393'/>
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default TopNavbar;