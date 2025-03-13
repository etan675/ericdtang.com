import classNames from 'classnames';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode,
    className?: string,
}>;

const WorkGrid = ({ children, className = '' }: Props) => {
    return (
        <div className={classNames(
            'grid grid-cols-[max-content_1fr] gap-x-12 gap-y-8',
            className
        )}>
            {children}
        </div>
    )
};

export default WorkGrid;