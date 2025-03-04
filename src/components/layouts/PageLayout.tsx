import React from 'react';
import Divider from './Divider';
import PageFooter from './footer/PageFooter';

type Props = Readonly<{
    children: React.ReactNode
}>;

const PageLayout = ({ children }: Props) => {
    return (
        <main className="flex-grow min-w-[600px] flex flex-col gap-4 items-center overflow-auto">
            {children}
            <Divider />
            <PageFooter className='flex-shrink-0 w-[75%]' />
        </main>
    )
};

export default PageLayout;