import classNames from 'classnames';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode,
    className?: string,
}>;

const TooltipContent = ({ children, className = '' }: Props) => {
    return (
        <div className={classNames(
            'flex flex-col gap-2 max-w-64 text-sm',
            className
        )}>
            {children}
        </div>
    )
};

export default TooltipContent;