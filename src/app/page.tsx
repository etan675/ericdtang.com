import React from 'react';
import LinkButton from "@/components/LinkButton";
import PageContentContainer from '@/components/layouts/PageContentContainer';
import PageSection from '@/components/layouts/PageSection';
import PageHeading from '@/components/layouts/PageHeading';
import LinkText from '@/components/LinkText';

const Home = () => {
  return (
    <PageContentContainer>
      <PageSection>
        <PageHeading>Hello.</PageHeading>
        <div>
          <span>
            My name is Eric, I&apos;m a full stack engineer in the web space.
            For the past 3 years, I&apos;ve been developing web apps using JavaScript,
            PHP, and &#8203;
          </span>
          <LinkText href='/about#about-tools'>related technologies</LinkText>
          . My goal in tech is to build quality software that both empowers people and can stand the test of time.
        </div>
        <p>
          Outside of work, I have a passion for golf and fitness.
          When I&apos;m not at my computer, you&apos;ll usually find me at the gym
          or working on my short game. &#x26F3;
        </p>
        <p>
          This website is an overview of who I am. Here I will share my story, talk about things
          I&apos;m interested in, and showcase some of my &#8203;
          <LinkText href='/projects'>projects</LinkText>
          . Welcome!
        </p>
        <LinkButton className='mt-2' href="/about">More about me</LinkButton>
      </PageSection>
    </PageContentContainer>
  );
}

export default Home;
