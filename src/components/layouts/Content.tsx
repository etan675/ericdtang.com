import classNames from 'classnames';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode,
    className?: string
}>;

const Content = ({ children, className = '' }: Props) => {
    return (
        <div className={classNames('h-full mt-32', className)}>
            {children}
        </div>
    )
};

export default Content;