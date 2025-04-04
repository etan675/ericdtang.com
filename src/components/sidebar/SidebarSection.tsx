import classNames from 'classnames';
import React from 'react';

type Props = Readonly<{
    className?: string,
    title?: string,
    children: React.ReactNode
}>;

const SidebarSection = ({ className = '', title = '', children }: Props) => {
    return (
        <div className={classNames(
            'flex flex-col gap-4',
            className
        )}>
            {title && (
                <h2 className="text-xl font-semibold text-[var(--foreground)]">
                    {title}
                </h2>
            )}
            <div className="text-[var(--text-secondary)]">
                {children}
            </div>
        </div>
    )
};

export default SidebarSection;