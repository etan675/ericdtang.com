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
            'w-[75%] flex flex-col gap-12 items-start',
            'text-lg text-[#C2C2C2]',
            className
        )}>
            {children}
        </Content>
    )
};

export default PageContentContainer;