import classNames from 'classnames';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode
    className?: string,
}>;

const PageSection = ({ children, className = '' }: Props) => {
    return (
        <section className={classNames(
            'flex flex-col gap-6 max-w-2xl',
            className
        )}>
            {children}
        </section>
    )
};

export default PageSection;