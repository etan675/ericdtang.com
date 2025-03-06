import classNames from 'classnames';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode,
    className?: string,
}>;

const ListHeading = ({ children, className = '' }: Props) => {
    return (
        <h6 className={(classNames(
            'font-bold italic text-xl mb-2',
            className
        ))}>
            {children}
        </h6>
    )
};

export default ListHeading;