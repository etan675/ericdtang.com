'use client'

import { usePathname } from 'next/navigation';
import React from 'react';
import NavbarLink from './NavbarLink';
import Link from 'next/link';
import GithubIcon from '../svg-components/GithubIcon';
import classNames from 'classnames';
import LinkIcon from '../LinkIcon';
import ThemeToggleButton from '../ThemeToggleButton';

type Props = Readonly<{
    className?: string,
}>;

const TopNavbar = ({ className = '' }: Props) => {
    const pathname = usePathname();
    const rootRoute = pathname.split('/')[1];

    return (
        <header className={classNames(
            'flex flex-col px-12 py-6 text-xl font-semibold w-screen z-50 fixed top-0 left-0',
            'border-b dark:bg-black bg-gray-300 dark:border-gray-600 border-gray-300',
            'bg-opacity-20 dark:bg-opacity-20 backdrop-blur-md dark:backdrop-blur-md',
            className
        )}>
            <div className='flex justify-between'>
                <Link href='/' className='hover:underline hover:decoration-solid cursor-pointer'>
                    Eric Tang&nbsp;
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
                    <div className='flex gap-4 items-center ml-2'>
                        <ThemeToggleButton className='w-[1.2em] h-[1.2em]' />
                        <LinkIcon
                            href='https://github.com/etan675'
                            target='_blank'
                        >
                            <GithubIcon className='w-[1.2em] h-[1.2em] fill-[#939393]' />
                        </LinkIcon>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default TopNavbar;