import React from 'react';
import LinkButton from "@/components/LinkButton";
import PageContentContainer from '@/components/layouts/PageContentContainer';
import PageSection from '@/components/layouts/PageSection';
import PageHeading from '@/components/layouts/PageHeading';
import Link from 'next/link';

const Home = () => {
  return (
    <main className="flex-grow flex justify-center">
      <PageContentContainer>
        <PageSection>
          <PageHeading>Hello.</PageHeading>
          <div>
            <span>
              My name is Eric, I&apos;m a full stack engineer in the web space.
              For the past 3 years, I&apos;ve been developing web apps using JavaScript, 
              PHP, and&nbsp;
            </span>
            <Link className='text-[var(--secondary)] hover:underline' href='/about'>related technologies</Link>
            . My goal in tech is to build quality software that both empowers people and can stand the test of time.
          </div>
          <p>
            Outside of work, I have a passion for golf and fitness. 
            When I&apos;m not at my computer, you&apos;ll usually find me at the gym
            or working on my short game. &#x26F3;
          </p>
          <p>
            This website is an overview of who I am. Here I will share my story, talk about things
            I&apos;m interested in, and showcase some of my&nbsp;
            <Link className='text-[var(--secondary)] hover:underline' href='/projects'>projects</Link>
            . Welcome!
          </p>
          <LinkButton className='mt-2' href="/about">More about me</LinkButton>
        </PageSection>
      </PageContentContainer>
    </main>
  );
}

export default Home;
