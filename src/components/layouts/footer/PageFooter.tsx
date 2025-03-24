'use client'

import classNames from 'classnames';
import React from 'react';
import FooterGrid from './FooterGrid';
import FooterTitle from './FooterTitle';
import FooterColDiv from './FooterColDiv';
import { usePathname } from 'next/navigation';
import LinkText from '@/components/LinkText';

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
                    <FooterTitle>Read Next:</FooterTitle>
                    {nextPage && (
                        <LinkText
                            href={nextPage.path}
                            className='text-indigo-300'
                        >
                            {nextPage.label} &rarr;
                        </LinkText>
                    )}
                </div>
                <FooterColDiv />
                <div className='flex flex-col'>
                    <FooterTitle>Contact Info:</FooterTitle>
                    <div className='flex flex-wrap gap-[0.5em]'>
                        <LinkText
                            href='mailto:erictang1201@gmail.com'
                            target='_blank'
                            className='text-slate-50'
                        >
                            Email
                        </LinkText>|
                        <LinkText
                            href='https://linkedin.com/in/eric-tang99'
                            target='_blank'
                            className='text-slate-50'
                        >
                            LinkedIn
                        </LinkText>|
                        <LinkText
                            href='https://github.com/etan675'
                            target='_blank'
                            className='text-slate-50'
                        >
                            GitHub
                        </LinkText>
                    </div>
                </div>
                <FooterColDiv />
                <div className='flex flex-col'>
                    <FooterTitle>Tech Stack & Design:</FooterTitle>
                    <ul className='list-disc pl-[1em]'>
                        <li>
                            <span>Built with Next.js, React, and Tailwind - </span>
                            <LinkText
                                className='text-slate-50'
                                href='https://github.com/etan675/ericdtang.com'
                                target='_blank'
                            >
                                Source
                            </LinkText>
                        </li>
                        <li>
                            <span>Design inspired by </span>
                            <LinkText
                                className='text-slate-50'
                                href='https://www.taniarascia.com/'
                                target='_blank'
                            >
                                Tania Rascia&apos;s
                            </LinkText> personal website
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
            return { label: 'About me', path: '/about' }
        case ('about'):
            return { label: 'Work experience', path: '/work' }
        case ('work'):
            return { label: 'Side projects', path: '/projects' }
        case ('projects'):
            return { label: 'Back to home', path: '/' }
        default:
            return null
    }
}

export default PageFooter;