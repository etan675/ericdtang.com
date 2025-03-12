import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

type Props = Readonly<{
    href: string,
    children: React.ReactNode,
    className?: string,
}>;

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

const LinkText = (props: AnchorProps & Props) => {
    return (
        <Link
            className={classNames(
                'text-[var(--secondary)] hover:underline',
                props.className
            )}
            {...props}
        >
            {props.children}
        </Link>
    )
};

export default LinkText;