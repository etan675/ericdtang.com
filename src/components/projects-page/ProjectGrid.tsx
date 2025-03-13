import classNames from 'classnames';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode,
    className?: string,
}>;

const ProjectGrid = ({ children, className = '' }: Props) => {
    return (
        <div className={classNames(
            'grid grid-cols-[repeat(auto-fit,_380px)] auto-rows-fr gap-6',
            className
        )}>
            {children}
        </div>
    )
};

export default ProjectGrid;