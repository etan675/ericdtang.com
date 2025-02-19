import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

type Props = Readonly<{
    href: string,
    children: React.ReactNode
    className?: string,
}>;

const LinkButton = ({ href, children, className = '' }: Props) => {
    return (
        <Link
            href={href}
            className={classNames(
                'w-fit text-base text-[var(--foreground)] bg-[#2E2E2E]',
                'py-2 px-4 rounded-lg border border-stone-600',
                'hover:text-[var(--secondary)] hover:border-[var(--secondary)] transition-all',
                'relative before:absolute before:inset-[-2px] before:border-2 before:rounded-lg',
                'before:border-transparent before:transition-all hover:before:border-[var(--secondary)]',
                className
            )}
        >
            {children}
        </Link>
    )
};

export default LinkButton;