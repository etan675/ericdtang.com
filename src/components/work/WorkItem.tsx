import React from 'react';

type Props = Readonly<{
    children: React.ReactNode,
    className?: string,
}>;

const WorkItem = ({ children }: Props) => {
    return (
        <div className='flex flex-col gap-4'>
            {children}
        </div>
    )
};

export default WorkItem;