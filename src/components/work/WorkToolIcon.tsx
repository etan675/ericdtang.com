import React from 'react';

type Props = Readonly<{
    label: string
}>;

// TODO: popup description
const WorkToolIcon = ({ label }: Props) => {
    return (
        <div className='bg-indigo-400/10 rounded-full flex justify-center items-center py-1 px-4'>
            <span className='text-base text-[var(--secondary-light)]'>
                {label}
            </span>
        </div>
    )
};

export default WorkToolIcon;