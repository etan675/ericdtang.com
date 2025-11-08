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
                    <WorkDateLabel start='Aug 25' end='Present' />
                    <WorkItem>
                        <div>
                            <LinkText
                                className='text-[var(--foreground)] text-xl font-semibold'
                                href='https://learnosity.com/'
                                target='_blank'
                                external
                            >
                                Learnosity
                            </LinkText>
                            <ItemTitleSub>Software Engineer</ItemTitleSub>
                        </div>
                        <p>Continuing the EdTech trend in my career, my role at Learnosity focuses on developing and maintaining our suite of powerful and hyper-scalable assessment delivery APIs and AI-powered learning solutions.</p>
                        <WorkTools>
                            <ToolLabel label='JavaScript (ES6)' />
                            <ToolLabel label='TypeScript' />
                            <ToolLabel label='React' />
                            <ToolLabel label='Redux' />
                            <ToolLabel label='PHP' />
                            <ToolLabel label='Symfony' />
                            <ToolLabel label='Docker' />
                            <ToolLabel label='AWS' />
                            <ToolLabel label='AI' />
                        </WorkTools>
                    </WorkItem>
                    <WorkDateLabel start='Jan 25' end='Aug 25' />
                    <WorkItem>
                        <div>
                            <p className='text-[var(--foreground)] text-xl font-semibold dark:font-normal'>
                                Self-Employed
                            </p>
                            <ItemTitleSub>Freelance Web Developer</ItemTitleSub>
                        </div>
                        <p>Building custom web solutions for clients, such as internal management tools for small businesses, Stripe integrations for SaaS payments, and translating Figma designs into responsive UIs.</p>
                        <WorkTools>
                            <ToolLabel label='Laravel' />
                            <ToolLabel label='Next.js' />
                            <ToolLabel label='Stripe Integrations' />
                            <ToolLabel label='Web design' />
                        </WorkTools>
                    </WorkItem>
                    <WorkDateLabel start='Apr 24' end='Sep 24' />
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
                        <p>Worked on MathsOnline&apos;s digital math learning platform.</p>
                        <p>Notable projects included developing an SDK for integrations with Keap&apos;s CRM, providing a way for us to easily interact with our CRM from server side, as well as building a scalable testing library that helped our engineers write maintainable unit/integration tests.</p>
                        <p>Though I was only here for a short time, I got to work with an amazing team and gained some extremely valuable experience.</p>
                        <WorkTools>
                            <ToolLabel label='JavaScript' />
                            <ToolLabel label='JQuery' />
                            <ToolLabel label='HTML & CSS' />
                            <ToolLabel label='PHP' />
                            <ToolLabel label='Laravel' />
                            <ToolLabel label='CodeIgniter' />
                            <ToolLabel label='MySQL' />
                            <ToolLabel label='API Development (REST)' />
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
                        <p>Full stack engineer developing and maintaining the Writer&apos;s Toolbox LMS.</p>
                        <p>Started as a grad, working across product design, code implementation, testing, and deployments in an agile environment.</p>
                        <p>I quickly reached a mid level position in my team, where I led R&D for major infrastructure upgrades such as migrating parts of the backend to microservices and implementing data warehousing pipelines.</p>
                        <WorkTools>
                            <ToolLabel label='JavaScript' />
                            <ToolLabel label='TypeScript' />
                            <ToolLabel label='React' />
                            <ToolLabel label='Emotion CSS' />
                            <ToolLabel label='Node.js' />
                            <ToolLabel label='PHP' />
                            <ToolLabel label='SilverStripe CMS' />
                            <ToolLabel label='GraphQL' />
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