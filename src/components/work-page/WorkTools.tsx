import React from 'react';

type Props = Readonly<{
    children: React.ReactNode,
}>;

const WorkTools = ({ children }: Props) => {
    return (
        <div className='flex gap-2 flex-wrap mt-2'>
            {children}
        </div>
    )
};

export default WorkTools;