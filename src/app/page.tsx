import React from 'react';
import LinkButton from "@/components/LinkButton";
import PageContentContainer from '@/components/layouts/PageContentContainer';
import PageSection from '@/components/layouts/PageSection';
import PageHeading from '@/components/layouts/PageHeading';

const Home = () => {
  return (
    <main className="flex-grow flex justify-center">
      <PageContentContainer>
        <PageSection>
          <PageHeading>Hello.</PageHeading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet.
          </p>
          <LinkButton href="/about">Learn More</LinkButton>
        </PageSection>
      </PageContentContainer>
    </main>
  );
}

export default Home;
