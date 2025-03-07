import React from 'react';

type Props = Readonly<{
    children: React.ReactNode,
}>;

const ItemTitleSub = ({ children }: Props) => {
    return (
        <h6 className='italic text-[var(--text-tertiary)]'>
            {children}
        </h6>
    )
};

export default ItemTitleSub;