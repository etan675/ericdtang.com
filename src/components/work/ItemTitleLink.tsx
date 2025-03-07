import Link from 'next/link';
import React from 'react';
import RightUpArrow from '../svg-components/RightUpArrow';

type Props = Readonly<{
    href: string,
    title: string,
}>;

const ItemTitleLink = ({ href, title }: Props) => {
    return (
        <Link
            href={href}
            target='_blank'
            className='text-[var(--foreground)] text-xl font-semibold group'
        >
            <span className='group-hover:underline'>{title}</span>
            <RightUpArrow className='inline ml-1 w-[1em] h-[1em] stroke-current group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-all' />
        </Link>
    )
};

export default ItemTitleLink;