import React from 'react';
import classNames from 'classnames';
import Tool from './Tool';

type Props = Readonly<{
    className?: string
}>;

const MyTools = ({ className = '' }: Props) => {
    return (
        <div className={classNames(
            'grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] auto-rows-fr gap-4 text-xl',
            className
        )}>
            <div className='relative'>
                <Tool
                    type='JS'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </div>
            <div className='relative'>
                <Tool
                    type='TS'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full' 
                />
            </div>
            <div className='relative'>
                <Tool
                    type='REACT'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full' 
                />
            </div>
            <div className='relative'>
                <Tool
                    type='CSS'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full' 
                />
            </div>
            <div className='relative'>
                <Tool
                    type='TW'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full' 
                />
            </div>
            <div className='relative'>
                <Tool
                    type='NODE'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full' 
                />
            </div>
            <div className='relative'>
                <Tool
                    type='NEXT_JS'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full' 
                />
            </div>
            <div className='relative'>
                <Tool
                    type='PHP'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full' 
                />
            </div>
            <div className='relative'>
                <Tool
                    type='LARAVEL'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full' 
                />
            </div>
            <div className='relative'>
                <Tool
                    type='REST'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full' 
                />
            </div>
            <div className='relative'>
                <Tool
                    type='GQL'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full' 
                />
            </div>
            <div className='relative'>
                <Tool
                    type='MY_SQL'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full' 
                />
            </div>
        </div>
    )
};

export default MyTools;