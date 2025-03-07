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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <WorkTools>
                            <WorkToolIcon label='JavaScript' />
                            <WorkToolIcon label='JQuery' />
                            <WorkToolIcon label='HTML & CSS' />
                            <WorkToolIcon label='PHP' />
                            <WorkToolIcon label='Laravel' />
                            <WorkToolIcon label='CodeIgniter' />
                            <WorkToolIcon label='MySQL' />
                            <WorkToolIcon label='APIs' />
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <WorkTools>
                            <WorkToolIcon label='JavaScript' />
                            <WorkToolIcon label='React' />
                            <WorkToolIcon label='Emotion CSS' />
                            <WorkToolIcon label='TypeScript' />
                            <WorkToolIcon label='Node.js' />
                            <WorkToolIcon label='PHP' />
                            <WorkToolIcon label='SilverStripe CMS' />
                            <WorkToolIcon label='Apollo GraphQL' />
                            <WorkToolIcon label='MySQL' />
                            <WorkToolIcon label='PHPUnit' />
                        </WorkTools>
                    </WorkItem>
                </WorkGrid>
            </PageSection>
        </PageContentContainer>
    )
};

export default WorkPage;