import React from 'react';

type Props = Readonly<{
    start: string,
    end: string
}>;

const WorkDateLabel = ({ start, end }: Props) => {
    return (
        <div className='text-[var(--text-tertiary)]'>
            <span>{start} &mdash; {end}</span>
        </div>
    )
};

export default WorkDateLabel;