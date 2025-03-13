import classNames from 'classnames';
import React from 'react';
import LinkText from '../LinkText';
import ActionButton from './ActionButton';
import ToolLabel from '../ToolLabel';

type Props = Readonly<{
    title: string,
    subTitle: string,
    link: string,
    description: string,
    tools: string[],
    className?: string,
    appLink?: string
}>;

const ProjectItem = ({
    title,
    subTitle,
    className = '',
    link,
    description,
    tools,
    appLink = '',
}: Props) => {
    return (
        <div className={classNames(
            'bg-zinc-900 max-w-96 p-4 flex flex-col gap-4 rounded-lg',
            className
        )}>
            <div>
                <div className='flex justify-between'>
                    <LinkText
                        className='text-[var(--foreground)] text-xl font-bold'
                        href={link}
                        target='_blank'
                        external
                    >
                        {title}
                    </LinkText>
                    {appLink && (
                        <ActionButton href={appLink}>Live App</ActionButton>
                    )}
                </div>
                <p className='text-[var(--text-tertiary)]'>
                    {subTitle}
                </p>
            </div>
            <p>{description}</p>
            <div className='flex gap-2 flex-wrap mt-2'>
                {tools.map((name, index) => (
                    <ToolLabel 
                        key={`${name}-${index}`}
                        label={name}
                        className='text-[0.875rem]'
                    />
                ))}
            </div>
        </div>
    )
};

export default ProjectItem;