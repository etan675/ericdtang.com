import React from 'react';
import classNames from 'classnames';
import Tool from './Tool';
import TooltipButton from '../TooltipButton';
import TooltipContent from './TooltipContent';

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
                content={
                    <TooltipContent>
                        <p className='font-semibold'>Experience: 3 years</p>
                        <p>A highly flexible language that is used to build interactive UI features in the browser and scalable backend applications on the server (via Node.js).</p>
                    </TooltipContent>
                }
            >
                <Tool
                    type='JS'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={
                    <TooltipContent>
                        <p className='font-semibold'>Experience: 3 years</p>
                        <p>Introduces static typing and OOP features to JavaScript. Allows for error checking at compile-time which improves developer experience and project scalability.</p>
                    </TooltipContent>
                }
            >
                <Tool
                    type='TS'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={
                    <TooltipContent>
                        <p className='font-semibold'>Experience: 3 years</p>
                        <p>A JavaScript library for building complex and scalable web UIs. It combines logic and visuals into reusable UI components, making development smoother and more efficient.</p>
                    </TooltipContent>
                }
            >
                <Tool
                    type='REACT'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={
                    <TooltipContent>
                        <p className='font-semibold'>Experience: 3 years</p>
                        <p>Browser language for styling web pages. SCSS is an enhanced version of CSS with features that improve code organisation and maintainability.</p>
                    </TooltipContent>
                }
            >
                <Tool
                    type='CSS'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={
                    <TooltipContent>
                        <p className='font-semibold'>Experience: 1 year</p>
                        <p>A CSS framework that provides utility classes based on atomic design theory. It makes styling faster and less error-prone, and allows designs to be more iterable.</p>
                    </TooltipContent>
                }
            >
                <Tool
                    type='TW'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={
                    <TooltipContent>
                        <p className='font-semibold'>Experience: 2 years</p>
                        <p>A runtime environment for JavaScript, which allows JS code to run on the server. It uses a fast, asynchronous model of execution (event loop), making it ideal for building scalable, data-intensive apps.</p>
                    </TooltipContent>
                }
            >
                <Tool
                    type='NODE'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={
                    <TooltipContent>
                        <p className='font-semibold'>Experience: 1 year</p>
                        <p>A powerful framework built on top of React and Node.js for building fast and scalable web apps. It focuses extensively on performance optimisations and developer experience, with features like server-side rendering (improved SEO), static site generation (faster load times), declarative routing, and more.</p>
                    </TooltipContent>
                }
            >
                <Tool
                    type='NEXT_JS'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={
                    <TooltipContent>
                        <p className='font-semibold'>Experience: 3 years</p>
                        <p>A backend language designed for website building and scripting. Modern PHP offers strong typing, OOP features, and optimised performance.</p>
                    </TooltipContent>
                }
            >
                <Tool
                    type='PHP'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={
                    <TooltipContent>
                        <p className='font-semibold'>Experience: 1 year</p>
                        <p>A modern, popular PHP framework for developing web application backends. Laravel emphasises developer productivity with elegant syntax, best practices, and seamless integrations.</p>
                    </TooltipContent>
                }
            >
                <Tool
                    type='LARAVEL'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={
                    <TooltipContent>
                        <p className='font-semibold'>Experience: 3 years</p>
                        <p>REST (Representational State Transfer) is a style of API that defines a standardised and scalable way for applications to transfer data over the network, using HTTP methods.</p>
                    </TooltipContent>
                }
            >
                <Tool
                    type='REST'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={
                    <TooltipContent>
                        <p className='font-semibold'>Experience: 2 years</p>
                        <p>GraphQL is a query language that allows frontends to request the exact data they need through a graph-like data structure, making data fetching more efficient and scalable.</p>
                        <p>Apollo GraphQL is a platform that offers client and server side tooling for GraphQL APIs.</p>
                    </TooltipContent>
                }
            >
                <Tool
                    type='GQL'
                    className='hover:absolute hover:top-0 hover:left-0 hover:scale-105 w-full'
                />
            </TooltipButton>
            <TooltipButton
                className='relative'
                content={
                    <TooltipContent>
                        <p className='font-semibold'>Experience: 2 years</p>
                        <p>A relational database management system (RDBMS), or just SQL database. Widely used for its performance and speed, reliability, and integration with web technologies.</p>
                    </TooltipContent>
                }
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