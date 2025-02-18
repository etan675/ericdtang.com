import classNames from 'classnames';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode,
    className?: string
}>;

const Content = ({ children, className = '' }: Props) => {
    return (
        <div className={classNames(
            'w-full h-full mt-24 px-12 py-6',
            className
        )}>
            {children}
        </div>
    )
};

export default Content;