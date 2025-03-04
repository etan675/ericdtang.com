import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode,
    href: string,
    className?: string,
    target?: string
}>;

const LinkText = ({ href, children, className = '', target = '' }: Props) => {
    return (
        <Link
            href={href}
            className={classNames(
                'text-[var(--secondary)] hover:underline',
                className
            )}
            target={target}
        >
            {children}
        </Link>
    )
};

export default LinkText;