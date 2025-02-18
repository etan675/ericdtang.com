import PageContentContainer from '@/components/layouts/PageContentContainer';
import PageHeading from '@/components/layouts/PageHeading';
import PageSection from '@/components/layouts/PageSection';
import React from 'react';

const AboutPage = () => {
    return (
        <main className="flex-grow flex justify-center">
            <PageContentContainer>
                <PageSection>
                    <PageHeading>
                        About page
                    </PageHeading>
                </PageSection>
            </PageContentContainer>
        </main>
    )
};

export default AboutPage;