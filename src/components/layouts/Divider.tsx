import classNames from 'classnames';
import React from 'react';

type Props = Readonly<{
    className?: string
}>;

const Divider = ({ className = '' }: Props) => {
    return (
        <div className={classNames(
            'border-b border-gray-600 w-full my-4',
            className
        )}></div>
    )
};

export default Divider;