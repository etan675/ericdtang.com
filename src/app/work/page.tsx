import PageContentContainer from '@/components/layouts/PageContentContainer';
import PageHeading from '@/components/layouts/PageHeading';
import PageSection from '@/components/layouts/PageSection';
import WorkGrid from '@/components/work-page/WorkGrid';
import WorkItem from '@/components/work-page/WorkItem';
import React from 'react';
import ItemTitleSub from '@/components/work-page/ItemTitleSub';
import WorkTools from '@/components/work-page/WorkTools';
import ToolLabel from '@/components/ToolLabel';
import WorkDateLabel from '@/components/work-page/WorkDateLabel';
import LinkText from '@/components/LinkText';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Eric Tang - Work'
}

const WorkPage = () => {
    return (
        <PageContentContainer>
            <PageSection>
                <PageHeading>Work Experience</PageHeading>
                <WorkGrid>
                    <WorkDateLabel start='May 24' end='Sep 24' />
                    <WorkItem>
                        <div>
                            <LinkText 
                                className='text-[var(--foreground)] text-xl font-semibold'
                                href='https://www.mathsonline.com.au/'
                                target='_blank'
                                external
                            >
                                MathsOnline
                            </LinkText>
                            <ItemTitleSub>Software Engineer</ItemTitleSub>
                        </div>
                        <p>Worked on an online educational platform. Developed in-house solutions to support technical infrastructure, including a custom SDK for integrating a popular CRM with internal apps.</p>
                        <p>Primarily focused on backend development, implementing logic for new features and maintaining existing code across core services, APIs, and databases.</p>
                        <WorkTools>
                            <ToolLabel label='JavaScript' />
                            <ToolLabel label='JQuery' />
                            <ToolLabel label='HTML & CSS' />
                            <ToolLabel label='PHP' />
                            <ToolLabel label='Laravel' />
                            <ToolLabel label='CodeIgniter' />
                            <ToolLabel label='MySQL' />
                            <ToolLabel label='REST APIs' />
                            <ToolLabel label='PHPUnit' />
                        </WorkTools>
                    </WorkItem>
                    <WorkDateLabel start='Jan 22' end='Apr 24' />
                    <WorkItem>
                        <div>
                            <LinkText 
                                className='text-[var(--foreground)] text-xl font-semibold'
                                href='https://www.writerstoolbox.com/'
                                target='_blank'
                                external
                            >
                                Writer&apos;s Toolbox
                            </LinkText>
                            <ItemTitleSub>Software Engineer</ItemTitleSub>
                            <ItemTitleSub>Junior Software Engineer</ItemTitleSub>
                            <ItemTitleSub>Graduate Software Engineer</ItemTitleSub>
                        </div>
                        <p>Build, design, test, and ship high-quality features for a web-based LMS (Learning Management System) used by schools and educational institutions.</p>
                        <p>Worked across the full technology stack, focusing on building optimised React components and hooks that powered the application&apos;s frontend, while also implementing core domain logic and designing efficient GraphQL APIs on the backend.</p>
                        <WorkTools>
                            <ToolLabel label='JavaScript' />
                            <ToolLabel label='TypeScript' />
                            <ToolLabel label='React' />
                            <ToolLabel label='Emotion CSS' />
                            <ToolLabel label='Node.js' />
                            <ToolLabel label='PHP' />
                            <ToolLabel label='SilverStripe CMS' />
                            <ToolLabel label='Apollo GraphQL Client' />
                            <ToolLabel label='MySQL' />
                            <ToolLabel label='PHPUnit' />
                        </WorkTools>
                    </WorkItem>
                </WorkGrid>
            </PageSection>
            <PageSection>
                <PageHeading>Resume</PageHeading>
                <div className='flex flex-col items-start'>
                    <LinkText
                        className='text-[var(--secondary)] '
                        href='/assets/eric-resume-01-2025.pdf'
                        target='_blank'
                    >
                        View in browser
                    </LinkText>
                    <LinkText
                        className='text-[var(--secondary)] '
                        href='/assets/eric-resume-01-2025.pdf'
                        target='_blank'
                        download
                    >
                        Download
                    </LinkText>
                </div>
            </PageSection>
        </PageContentContainer>
    )
};

export default WorkPage;