import React from 'react';
import LinkButton from '../LinkButton';
import classNames from 'classnames';

type Props = Readonly<{
    children: React.ReactNode,
    href: string,
    className?: string,
}>;

const ActionButton = ({ children, className = '', href }: Props) => {
    return (
        <LinkButton
            className={classNames(
                'py-[0.3em] px-[0.5em]',
                className
            )}
            href={href}
            target='_blank'
            external
        >
            {children}
        </LinkButton>
    )
};

export default ActionButton;