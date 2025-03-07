import React from 'react';
import Content from './Content';
import classNames from 'classnames';

type Props = Readonly<{
    children: React.ReactNode
    className?: string,
}>;

const PageContentContainer = ({ children, className = '' }: Props) => {
    return (
        <Content className={classNames(
            'w-[75%] flex flex-col gap-12 items-start flex-grow pb-4',
            'text-lg text-[var(--text-secondary)]',
            className
        )}>
            {children}
        </Content>
    )
};

export default PageContentContainer;