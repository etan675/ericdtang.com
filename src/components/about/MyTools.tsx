import React from 'react';
import classNames from 'classnames';
import Tool from './Tool';

type Props = Readonly<{
    className?: string
}>;

const MyTools = ({ className = '' }: Props) => {
    return (
        <div className={classNames(
            'grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 text-xl',
            className
        )}>
            <Tool type='JS' />
            <Tool type='TS' />
            <Tool type='CSS' />
            <Tool type='TW' />
            <Tool type='REACT' />
            <Tool type='NODE' />
            <Tool type='NEXT_JS' />
            <Tool type='PHP' />
            <Tool type='LARAVEL' />
            <Tool type='REST' />
            <Tool type='GQL' />
            <Tool type='MY_SQL' />
        </div>
    )
};

export default MyTools;