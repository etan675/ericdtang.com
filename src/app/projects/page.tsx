import React from 'react';
import PageContentContainer from '@/components/layouts/PageContentContainer';
import PageSection from '@/components/layouts/PageSection';
import PageHeading from '@/components/layouts/PageHeading';

const ProjectsPage = () => {
    return (
        <main className="flex-grow flex justify-center">
            <PageContentContainer>
                <PageSection>
                    <PageHeading>
                        Projects page
                    </PageHeading>
                </PageSection>
            </PageContentContainer>
        </main>
    )
};

export default ProjectsPage;