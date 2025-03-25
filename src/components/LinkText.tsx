import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import RightUpArrow from './svg-components/RightUpArrow';

type Props = Readonly<{
    href: string,
    children: React.ReactNode,
    className?: string,
    external?: boolean
}>;

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

const LinkText = ({
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
                'hover:underline group font-semibold dark:font-normal',
                className
            )}
            {...restProps}
        >
            {children}
            {external && (
                <RightUpArrow className='inline ml-1 w-[1em] h-[1em] stroke-current group-hover:translate-x-1 group-hover:-translate-y-1 transition-all' />
            )}
        </Link>
    )
};

export default LinkText;