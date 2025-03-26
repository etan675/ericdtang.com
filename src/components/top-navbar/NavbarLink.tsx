import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

type Props = Readonly<{
    href: string,
    children: React.ReactNode
    className?: string,
    isActive?: boolean
    onClick?: () => void
}>;

const NavbarLink = ({
    href,
    children,
    className = '',
    isActive = false,
    onClick = () => {},
}: Props) => {
    return (
        <Link
            href={href}
            className={classNames(
                'hover:text-[var(--secondary)] transition-all',
                { 'text-[var(--secondary)]': isActive },
                className
            )}
            onClick={onClick}
        >
            {children}
        </Link>
    )
};

export default NavbarLink;