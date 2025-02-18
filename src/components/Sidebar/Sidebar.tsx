import React from 'react';
import Content from '../layouts/Content';
import SidebarSection from './SidebarSection';
import Divider from '../layouts/Divider';
import Link from 'next/link';
import EmailIcon from '../svg-components/EmailIcon';
import GithubIcon from '../svg-components/GithubIcon';
import LinkedInIcon from '../svg-components/LinkedInIcon';

const Sidebar = () => {
    return (
        <div className='w-80 bg-[#272727]'>
            <Content className='flex flex-col gap-4 px-12'>
                <SidebarSection title='Intro'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </SidebarSection>
                <Divider />
                <SidebarSection title='Get in touch'>
                    <div className='flex flex-col gap-6'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='grid grid-cols-[min-content_1fr] grid-rows-3 gap-1 text-indigo-400'>
                            <EmailIcon className='w-[1.5em] h-[1.5em] items-center justify-self-center' />
                            <Link
                                className='hover:underline'
                                href='mailto:erictang1201@gmail.com'
                                target='_blank'
                            >
                                erictang1201@gmail.com
                            </Link>
                            <GithubIcon className='w-[1.2em] h-[1.2em] items-center justify-self-center' fill='#d1d1d1' />
                            <Link
                                className='hover:underline'
                                href='https://github.com/etan675'
                                target='_blank'
                            >
                                etan675
                            </Link>
                            <LinkedInIcon className='w-[1.5em] h-[1.5em] items-center justify-self-center' />
                            <Link
                                className='hover:underline'
                                href='https://linkedin.com/in/eric-tang99'
                                target='_blank'
                            >
                                eric-tang99
                            </Link>
                        </div>
                    </div>
                </SidebarSection>
                <Divider />
            </Content>
        </div>
    )
};

export default Sidebar;