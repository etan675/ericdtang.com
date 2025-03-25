import React from 'react';
import Content from '../layouts/Content';
import SidebarSection from './SidebarSection';
import Divider from '../layouts/Divider';
import EmailIcon from '../svg-components/EmailIcon';
import GithubIcon from '../svg-components/GithubIcon';
import LinkedInIcon from '../svg-components/LinkedInIcon';
import classNames from 'classnames';
import LinkText from '../LinkText';

type Props = Readonly<{
    className?: string,
}>;

const Sidebar = ({ className = '' }: Props) => {
    return (
        <div className={classNames(
            'min-w-[300px] flex flex-col items-end bg-[var(--sidebar-bg)] overflow-auto',
            className
        )}>
            <Content className='w-72 flex flex-col gap-4 px-8'>
                <SidebarSection title='Intro'>
                    <p>
                        <span>I&apos;m&nbsp;</span>
                        <span className="font-medium text-[var(--foreground)]">Eric</span>
                        <span>, a web developer and software engineer. Welcome to my digital space.&nbsp;</span>
                        <span className='text-[1.2em]'>&#x1F3A7;</span>
                    </p>
                </SidebarSection>
                <Divider/>
                <SidebarSection title='Get in touch'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <p>If you find something interesting and would like to reach out or learn more,&nbsp;</p>
                            <p className="font-medium mt-1 text-[var(--foreground)]">here&apos;s where to find me:</p>
                        </div>
                        <div className='grid grid-cols-[min-content_1fr] grid-rows-3 gap-1'>
                            <EmailIcon className='w-[1.5em] h-[1.5em] items-center justify-self-center' />
                            <LinkText
                                className='text-[var(--secondary)]'
                                href='mailto:erictang1201@gmail.com'
                                target='_blank'
                            >
                                erictang1201@gmail.com
                            </LinkText>
                            <LinkedInIcon className='w-[1.5em] h-[1.5em] items-center justify-self-center' />
                            <LinkText
                                className='text-[var(--secondary)] '
                                href='https://linkedin.com/in/eric-tang99'
                                target='_blank'
                            >
                                eric-tang99
                            </LinkText>
                            <GithubIcon className='w-[1.2em] h-[1.2em] items-center justify-self-center' fill='#d1d1d1' />
                            <LinkText
                                className='text-[var(--secondary)] '
                                href='https://github.com/etan675'
                                target='_blank'
                            >
                                etan675
                            </LinkText>
                        </div>
                    </div>
                </SidebarSection>
                <Divider/>
                <SidebarSection>
                    <p className='text-[var(--text-tertiary)]'>
                        <q className='italic'>Simplicity is the ultimate sophistication.</q>&nbsp;
                        <span> - </span> 
                        <span className='text-sm'>Leonardo da Vinci</span> 
                    </p>
                </SidebarSection>
            </Content>
        </div>
    )
};

export default Sidebar;