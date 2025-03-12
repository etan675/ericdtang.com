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
                <p></p>
            </PageSection>
        </PageContentContainer>
    )
};

export default ProjectsPage;