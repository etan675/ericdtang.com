import React from 'react';
import PageContentContainer from '@/components/layouts/PageContentContainer';
import PageSection from '@/components/layouts/PageSection';
import PageHeading from '@/components/layouts/PageHeading';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Eric Tang - Projects'
}

const ProjectsPage = () => {
    return (
        <PageContentContainer>
            <PageSection>
                <PageHeading>Projects</PageHeading>
                <p>Here are some of the projects I&apos;ve made over the years, most are for fun aside from this website. I like to keep things simple and minimalistic, focusing on clean code and usability. At the end of the day, function is style, and style is function.</p>
                <div>
                    {/* projects grid */}
                </div>
            </PageSection>
        </PageContentContainer>
    )
};

export default ProjectsPage;