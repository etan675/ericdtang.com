import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import RightUpArrow from './svg-components/RightUpArrow';

type Props = Readonly<{
    href: string,
    children: React.ReactNode
    className?: string,
    external?: boolean
}>;

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

const LinkButton = ({
    href,
    children,
    className = '',
    external = false,
    ...restProps
}: AnchorProps & Props) => {
    return (
        <Link
            href={href}
            className={classNames(
                'w-fit text-base font-medium text-[var(--foreground)] bg-[#2E2E2E]',
                'py-2 px-4 rounded-lg border border-stone-600',
                'hover:text-[var(--secondary)] hover:border-[var(--secondary)] transition-all',
                'relative before:absolute before:inset-[-2px] before:border-2 before:rounded-lg',
                'before:border-transparent before:transition-all hover:before:border-[var(--secondary)]',
                className
            )}
            {...restProps}
        >
            {children}
            {external && (
                <RightUpArrow className='inline ml-1 w-[1em] h-[1em] stroke-current' />
            )}
        </Link>
    )
};

export default LinkButton;