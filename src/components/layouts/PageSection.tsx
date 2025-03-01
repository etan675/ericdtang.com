import classNames from 'classnames';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode
    className?: string,
    id?: string,
}>;

const PageSection = ({ children, className = '', id = '' }: Props) => {
    return (
        <section id={id} className={classNames(
            'flex flex-col gap-6 max-w-3xl',
            className
        )}>
            {children}
        </section>
    )
};

export default PageSection;