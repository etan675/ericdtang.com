'use client'

import classNames from 'classnames';
import React from 'react';
import FooterGrid from './FooterGrid';
import FooterTitle from './FooterTitle';
import FooterColDiv from './FooterColDiv';
import FooterLink from './FooterLink';
import { usePathname } from 'next/navigation';

type Props = Readonly<{
    className?: string,
}>;

const PageFooter = ({ className = '' }: Props) => {
    const pathname = usePathname();
    const rootRoute = pathname.split('/')[1];

    const nextPage = getNextPage(rootRoute);

    return (
        <footer
            className={classNames(
                'pb-8 flex flex-col items-center text-sm text-[var(--text-secondary)]',
                className
            )}
        >
            <FooterGrid>
                <div className='flex flex-col'>
                    <FooterTitle>Contact Info:</FooterTitle>
                    <div className='flex flex-wrap gap-[0.5em]'>
                        <FooterLink
                            href='mailto:erictang1201@gmail.com'
                            target='_blank'
                        >
                            Email
                        </FooterLink>
                        |
                        <FooterLink
                            href='https://linkedin.com/in/eric-tang99'
                            target='_blank'>
                            LinkedIn
                        </FooterLink>
                        |
                        <FooterLink
                            href='https://github.com/etan675'
                            target='_blank'
                        >
                            GitHub
                        </FooterLink>
                    </div>
                </div>
                <FooterColDiv />
                <div className='flex flex-col'>
                    <FooterTitle>Read Next:</FooterTitle>
                    {nextPage && (
                        <FooterLink href={`/${nextPage.path}`}>{nextPage.label} &rarr;</FooterLink>
                    )}
                    <FooterLink href='/blog'>Blog &rarr;</FooterLink>
                </div>
                <FooterColDiv />
                <div className='flex flex-col'>
                    <FooterTitle>Tech Stack & Design:</FooterTitle>
                    <ul className='list-disc pl-[1em]'>
                        <li>
                            Built with Next.js, React, and Tailwind - &#8203;
                            <FooterLink
                                href='https://github.com/etan675/my-website'
                                target='_blank'
                            >
                                Source
                            </FooterLink>
                        </li>
                        <li>
                            <span>Design inspired by </span>
                            <FooterLink
                                href='https://www.taniarascia.com/'
                                target='_blank'
                            >
                                Tania Rascia&apos;s
                            </FooterLink> personal website
                        </li>
                    </ul>
                </div>
            </FooterGrid>
            <p className='pt-4 self-start'>&#x1F58B; By Eric Tang</p>
        </footer>
    )
};

type NextPage = {
    label: string,
    path: string
}

const getNextPage = (curr: string): NextPage | null => {
    switch (curr) {
        case (''):
            return { label: 'About me', path: 'about' }
        case ('about'):
            return { label: 'My work experience', path: 'work' }
        case ('work'):
            return { label: 'My side projects', path: 'projects' }
        case ('projects'):
            return null
        case ('blog'):
            return { label: 'Back to home', path: '' }
        default:
            return null
    }
}

export default PageFooter;