import PageContentContainer from '@/components/layouts/PageContentContainer';
import PageHeading from '@/components/layouts/PageHeading';
import PageSection from '@/components/layouts/PageSection';
import WorkGrid from '@/components/work/WorkGrid';
import WorkItem from '@/components/work/WorkItem';
import ItemTitleLink from '@/components/work/ItemTitleLink';
import React from 'react';
import ItemTitleSub from '@/components/work/ItemTitleSub';
import WorkToolIcon from '@/components/work/WorkToolIcon';
import WorkTools from '@/components/work/WorkTools';
import WorkDateLabel from '@/components/work/WorkDateLabel';
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
                    <WorkDateLabel start='May 25' end='Sep 25' />
                    <WorkItem>
                        <div>
                            <ItemTitleLink
                                href='https://www.mathsonline.com.au/'
                                title='MathsOnline'
                            />
                            <ItemTitleSub>Software Engineer</ItemTitleSub>
                        </div>
                        <p>Worked on an online educational platform. Developed in-house solutions to support technical infrastructure, including a custom SDK for integrating internal apps with a popular CRM system.</p>
                        <p>Primarily focusing on backend development, applied architectural design patterns to refactor and decouple backend layers for a robust and future-proof system.</p>
                        <WorkTools>
                            <WorkToolIcon label='JavaScript' />
                            <WorkToolIcon label='JQuery' />
                            <WorkToolIcon label='HTML & CSS' />
                            <WorkToolIcon label='PHP' />
                            <WorkToolIcon label='Laravel' />
                            <WorkToolIcon label='CodeIgniter' />
                            <WorkToolIcon label='MySQL' />
                            <WorkToolIcon label='REST APIs' />
                            <WorkToolIcon label='PHPUnit' />
                        </WorkTools>
                    </WorkItem>
                    <WorkDateLabel start='Jan 22' end='Apr 24' />
                    <WorkItem>
                        <div>
                            <ItemTitleLink
                                href='https://www.writerstoolbox.com/'
                                title="Writer's Toolbox"
                            />
                            <ItemTitleSub>Software Engineer</ItemTitleSub>
                            <ItemTitleSub>Junior Software Engineer</ItemTitleSub>
                            <ItemTitleSub>Graduate Software Engineer</ItemTitleSub>
                        </div>
                        <p>Build, design, test, and ship high-quality features for a web-based LMS (Learning Management System) used by schools and educational institutions.</p>
                        <p>Worked across the full technology stack, focusing on building optimised React components and hooks that powered the application&apos;s frontend, while also implementing core domain logic and designing efficient GraphQL APIs on the backend.</p>
                        <WorkTools>
                            <WorkToolIcon label='JavaScript' />
                            <WorkToolIcon label='TypeScript' />
                            <WorkToolIcon label='React' />
                            <WorkToolIcon label='Emotion CSS' />
                            <WorkToolIcon label='Node.js' />
                            <WorkToolIcon label='PHP' />
                            <WorkToolIcon label='SilverStripe CMS' />
                            <WorkToolIcon label='Apollo GraphQL Client' />
                            <WorkToolIcon label='MySQL' />
                            <WorkToolIcon label='PHPUnit' />
                        </WorkTools>
                    </WorkItem>
                </WorkGrid>
            </PageSection>
            <PageSection>
                <PageHeading>Resume</PageHeading>
                <div className='flex flex-col items-start'>
                    <LinkText
                        href='/assets/eric-resume-01-2025.pdf'
                        target='_blank'
                    >
                        View in browser
                    </LinkText>
                    <LinkText
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