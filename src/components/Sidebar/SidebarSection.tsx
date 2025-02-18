import classNames from 'classnames';
import React from 'react';

type Props = Readonly<{
    className?: string,
    title: string,
    children: React.ReactNode
}>;

const SidebarSection = ({ className = '', title, children }: Props) => {
    return (
        <div className={classNames(
            'flex flex-col gap-4',
            className
        )}>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">
                {title}
            </h2>
            <div className="text-[#C2C2C2]">
                {children}
            </div>
        </div>
    )
};

export default SidebarSection;