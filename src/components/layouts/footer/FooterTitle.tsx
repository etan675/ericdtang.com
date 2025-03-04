import React from 'react';

type Props = Readonly<{
    children: React.ReactNode,
    className?: string,
}>;

const FooterTitle = ({ children }: Props) => {
    return (
        <h6 className='font-medium text-base mb-2'>
            {children}
        </h6>
    )
};

export default FooterTitle;