import classNames from 'classnames';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode,
    className?: string
}>;

const Content = ({ children, className = '' }: Props) => {
    return (
        <div className={classNames('pt-28', className)}>
            {children}
        </div>
    )
};

export default Content;