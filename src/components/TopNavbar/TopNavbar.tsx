'use client'

import { usePathname } from 'next/navigation';
import React from 'react';
import NavbarLink from './NavbarLink';
import Link from 'next/link';
import GithubIcon from '../svg-components/GithubIcon';
import classNames from 'classnames';
import Divider from '../layouts/Divider';

type Props = Readonly<{
    className?: string,
}>;

const TopNavbar = ({ className = '' }: Props) => {
    const pathname = usePathname();
    const rootRoute = pathname.split('/')[1];
    
    return (
        <header className={classNames(
            'flex flex-col px-12 pt-6 text-xl font-semibold',
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
                    <NavbarLink 
                        href='/blog'
                        isActive={rootRoute === 'blog'}
                    >
                        Blog
                    </NavbarLink>
                    <Link href='https://github.com/etan675' target='_blank'>
                        <GithubIcon className='w-[1.2em] h-[1.2em]' fill='#939393'/>
                    </Link>
                </div>
            </div>
            <Divider/>
        </header>
    )
};

export default TopNavbar;