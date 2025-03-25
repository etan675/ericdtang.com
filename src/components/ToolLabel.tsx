import classNames from 'classnames';
import React from 'react';

type Props = Readonly<{
    className?: string,
    label: string
}>;

const ToolLabel = ({ className = '', label }: Props) => {
    return (
        <div className={classNames(
            'bg-indigo-400/10 rounded-full flex justify-center items-center py-[0.5em] px-[1em] text-base',
            className
        )}>
            <span className='text-[var(--secondary-light)] font-semibold dark:font-normal'>
                {label}
            </span>
        </div>
    )
};

export default ToolLabel;