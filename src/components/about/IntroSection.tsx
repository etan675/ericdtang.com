'use client'

import classNames from 'classnames';
import React, { RefObject, useRef, useState } from 'react';

type Props = Readonly<{
    className?: string,
}>;

const IntroSection = ({ className = '' }: Props) => {
    const timeoutRef: RefObject<NodeJS.Timeout|null> = useRef(null);
    const [highlighted, setHighlighted] = useState(false);

    const highLightText = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setHighlighted(true);

        timeoutRef.current = setTimeout(() => {
            setHighlighted(false);
        }, 2000);
    }

    return (
        <div className={classNames(
            'flex flex-col gap-6',
            className
        )}>
            <p>
                I&apos;m Eric, a software engineer. I want to build the kind of products that 
                makes both users and engineers happy, as good software should feel great to use
                and even better to work on.
            </p>
            <div>
                <p>When it comes to my work, I try to always keep 3 things in mind: </p>
                <p>
                    <span className={classNames(
                        'italic transition-all',
                        { 'bg-[var(--secondary-contrast)] text-[var(--foreground)]': highlighted }
                    )}>
                        purposeful learning
                    </span>,&nbsp;
                    <span className={classNames(
                        'italic transition-all',
                        { 'bg-[var(--secondary-contrast)] text-[var(--foreground)]': highlighted }
                    )}>
                        knowledge application
                    </span>, and&nbsp;
                    <span className={classNames(
                        'italic transition-all',
                        { 'bg-[var(--secondary-contrast)] text-[var(--foreground)]': highlighted }
                    )}>
                        knowledge sharing
                    </span>.
                </p>
            </div>
            <p>
                For developers, constant innovation by the bright minds of our industry creates an
                endless stream of new information, and since we must continuously learn to stay effective,
                it is easy to get lost. I find that having a few&nbsp;
                <span
                    className='cursor-pointer text-[var(--secondary)] hover:underline'
                    onClick={highLightText}
                >
                    core values
                </span>
                &nbsp;to look back on helps keep me grounded in my own journey through tech.
            </p>
        </div>
    )
};

export default IntroSection;