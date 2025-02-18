import classNames from 'classnames';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode
    className?: string,
}>;

const PageHeading = ({ children, className = '' }: Props) => {
    return (
        <h2 className={classNames(
            'text-3xl text-[var(--foreground)] font-semibold',
            className
        )}>
            {children}
        </h2>
    )
};

export default PageHeading;