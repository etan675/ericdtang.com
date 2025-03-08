import React from 'react';
import classNames from 'classnames';
import Tool from './Tool';
import TooltipButton from '../TooltipButton';

type Props = Readonly<{
    className?: string
}>;

const MyTools = ({ className = '' }: Props) => {
    return (
        <div className={classNames(
            'grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] auto-rows-fr gap-4 text-xl',
            className
        )}>
            <TooltipButton
                className='relative'
                content={<span>JavaScript</span>}
            >
                <Tool
                    type='JS'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={<span>TypeScript</span>}
            >
                <Tool
                    type='TS'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={<span>React</span>}
            >
                <Tool
                    type='REACT'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={<span>CSS</span>}
            >
                <Tool
                    type='CSS'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={<span>Tailwind</span>}
            >
                <Tool
                    type='TW'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={<span>Node.js</span>}
            >
                <Tool
                    type='NODE'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={<span>Next.js</span>}
            >
                <Tool
                    type='NEXT_JS'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={<span>PHP</span>}
            >
                <Tool
                    type='PHP'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={<span>Laravel</span>}
            >
                <Tool
                    type='LARAVEL'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={<span>REST APIs</span>}
            >
                <Tool
                    type='REST'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={<span>GraphQL</span>}
            >
                <Tool
                    type='GQL'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={<span>MySQL</span>}
            >
                <Tool
                    type='MY_SQL'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
        </div>
    )
};

export default MyTools;