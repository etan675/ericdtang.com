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
                    <p>
                        <span>I&apos;m&nbsp;</span>
                        <span className="font-medium text-[var(--foreground)]">Eric</span>
                        <span>, a software engineer and web developer. Welcome to my digital space&nbsp;</span>
                        <span className='text-[1.2em]'>&#x1F3A7;.</span>
                    </p>
                </SidebarSection>
                <Divider />
                <SidebarSection title='Get in touch'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <p>If you find something interesting and would like to reach out or learn more,&nbsp;</p>
                            <p className="font-medium text-[var(--foreground)]">here&apos;s where to find me.</p>
                        </div>
                        <div className='grid grid-cols-[min-content_1fr] grid-rows-3 gap-1 text-[var(--secondary)]'>
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