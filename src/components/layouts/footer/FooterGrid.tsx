import React from 'react';

type Props = Readonly<{
    children: React.ReactNode,
    className?: string,
}>;

const FooterGrid = ({ children }: Props) => {
    return (
        <div className='w-full grid grid-cols-[minmax(100px,_max-content),_minmax(min-content,_75px),_minmax(100px,_max-content),_minmax(min-content,_75px),_minmax(200px,_max-content)]'>
            {children}
        </div>
    )
};

export default FooterGrid;