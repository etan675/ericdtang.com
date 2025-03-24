import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

type Props = Readonly<{
    href: string,
    children: React.ReactNode,
    className?: string,
    hoverColour?: string,
}>;

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

const LinkIcon = ({
    href,
    children,
    className = '',
    hoverColour = '',
    ...restProps
}: AnchorProps & Props) => {
    const hoverClass = `hover:before:border-[${hoverColour ? hoverColour : 'var(--secondary)'}]`;

    return (
        <Link
            href={href}
            className={classNames(
                'w-fit rounded-full border border-transparent relative transition-all ',
                'before:absolute before:inset-[-1px] before:border-2 before:border-transparent',
                'before:rounded-full before:transition-all',
                hoverClass,
                className
            )}
            {...restProps}
        >
            {children}
        </Link>
    )
};

export default LinkIcon;