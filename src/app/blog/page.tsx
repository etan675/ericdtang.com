import PageContentContainer from '@/components/layouts/PageContentContainer';
import PageHeading from '@/components/layouts/PageHeading';
import PageSection from '@/components/layouts/PageSection';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Eric Tang - Blog'
}

const BlogPage = () => {
    return (
        <PageContentContainer>
            <PageSection>
                <PageHeading>
                    Blog page
                </PageHeading>
            </PageSection>
        </PageContentContainer>
    )
};

export default BlogPage;