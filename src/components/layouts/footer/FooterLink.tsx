import LinkText from '@/components/LinkText';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode,
    href: string
    target?: string
}>;

const FooterLink = ({ children, href, target = '' }: Props) => {
    return (
        <LinkText 
            href={href}
            className='text-white'
            target={target}
        >
            {children}
        </LinkText>
    )
};

export default FooterLink;