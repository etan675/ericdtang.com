import IntroSection from '@/components/about/IntroSection';
import MyTools from '@/components/about/MyTools';
import PageContentContainer from '@/components/layouts/PageContentContainer';
import PageHeading from '@/components/layouts/PageHeading';
import PageSection from '@/components/layouts/PageSection';
import LinkButton from '@/components/LinkButton';
import React from 'react';

const AboutPage = () => {
    return (
        <PageContentContainer>
            <PageSection>
                <PageHeading>About me</PageHeading>
                <IntroSection/>
            </PageSection>
            <PageSection>
                <PageHeading>How I got here</PageHeading>
                <p>
                    My coding journey began in 2019 when I chose to study Computer Science 
                    and Psychology at the University of Auckland. During my second year, 
                    I took a class called &#8203;
                    <span className='italic'>Object-Oriented Software Development</span>
                    . The lecturer made it engaging by using clever real-life analogies to explain coding concepts 
                    like objects, interfaces, and design patterns&mdash;which immediately clicked with me. 
                    I began to understand what software development was really about and thought 
                    “Oh, maybe I can do this in the future”.
                </p>
                <LinkButton href='/about#about-story'>Read my full story</LinkButton>
            </PageSection>
            <PageSection id='about-tools' className='w-full'>
                <PageHeading>My technical toolbox</PageHeading>
                <p className='text-xl'>
                    Some of the technologies that I&apos;m most familiar with are:
                </p>
                <MyTools/>
            </PageSection>
            <PageSection>
                <PageHeading>What I&apos;m doing now</PageHeading>
            </PageSection>
            <PageSection>
                <PageHeading>Personal philosophy</PageHeading>
            </PageSection>
            <PageSection id='about-story'>
                <PageHeading>My full story</PageHeading>
            </PageSection>
        </PageContentContainer>
    )  
};

export default AboutPage;