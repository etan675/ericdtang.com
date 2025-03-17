import IntroSection from '@/components/about-page/IntroSection';
import ListHeading from '@/components/about-page/ListHeading';
import MyTools from '@/components/about-page/MyTools';
import PageContentContainer from '@/components/layouts/PageContentContainer';
import PageHeading from '@/components/layouts/PageHeading';
import PageSection from '@/components/layouts/PageSection';
import LinkButton from '@/components/LinkButton';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Eric Tang - About'
}

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
                    and Psychology at University of Auckland. During my second year, 
                    I took a class called &#8203;
                    <span className='italic'>Object-Oriented Software Development</span>
                    , where the lecturer used real-life analogies to explain coding concepts 
                    like objects, interfaces, and design patterns&mdash;which immediately clicked with me. 
                    I began to understand what software was really about and thought 
                    “Oh, maybe I can do this in the future”.
                </p>
                <LinkButton href='/about#story'>Read my full story</LinkButton>
            </PageSection>
            <PageSection id='tools' className='w-full'>
                <PageHeading>My technical toolbox</PageHeading>
                <p>Some of the technologies that I&apos;m most familiar with are:</p>
                <MyTools/>
            </PageSection>
            <PageSection>
                <PageHeading>What I&apos;m doing now</PageHeading>
                <p className='italic'>March 5, 2025</p>
                <ul className='list-disc pl-[1em]'>
                    <li>Looking for new career opportunities</li>
                    <li>Working on this website</li>
                    <li>Playing golf</li>
                    <li>Playing tennis</li>
                </ul>
            </PageSection>
            <PageSection>
                <PageHeading>Engineering philosophy</PageHeading>
                <div>    
                    <ListHeading>Theory and practice</ListHeading>
                    <ul className='list-disc pl-[1em]'>
                        <li>Theory without application is useless, and application without theory leads to technical debt and poor sustainability.</li>
                        <li>It is important to understand both the why and the how.</li>
                    </ul>
                </div>
                <div>    
                    <ListHeading>Prioritise the fundamentals</ListHeading>
                    <ul className='list-disc pl-[1em]'>
                        <li>Complex issues can often be traced back to neglecting core software engineering principles.</li>
                        <li>Software engineering is often about trade-offs between resources and quality, the goal of best practices is not perfection but to make things as predictable as possible.</li>
                    </ul>
                </div>
                <div>    
                    <ListHeading>Master your tools</ListHeading>
                    <ul className='list-disc pl-[1em]'>
                        <li>Learn your tools thoroughly and stick with them, be effective at solving the problems they are designed to solve.</li>
                        <li>Overly relying on abstractions without understanding what&apos;s underneath can be deadly.</li>
                    </ul>
                </div>
                <div>    
                    <ListHeading>See the bigger picture</ListHeading>
                    <ul className='list-disc pl-[1em]'>
                        <li>Specifics of technology can change rapidly, but fundamental ideas and patterns are more stable.</li>
                        <li>Code is just details of the overall system, the relationships between details matter just as much as the details themselves.</li>
                    </ul>
                </div>
                <div>    
                    <ListHeading>Share knowledge</ListHeading>
                    <ul className='list-disc pl-[1em]'>
                        <li>Teaching is the best way to learn.</li>
                        <li>Writing and leading discussions can have significant impact beyond individual contributions.</li>
                    </ul>
                </div>
            </PageSection>
            <PageSection id='story'>
                <PageHeading>My story</PageHeading>
                <p>
                    I was born and raise in Auckland, New Zealand. After finishing high school in 2017, I took a gap year to
                    work part-time, save money, and explore new hobbies while figuring out my next steps. Toward the 
                    end of 2018, I took off on a working holiday in Japan to experience snow at the world-famous
                    Niseko ski resort. There I rediscovered my childhood passion for snowboarding, and spent
                    an unforgettable few months hitting the mountains and meeting cool people from around the world.
                </p>
                <p>
                    I returned to NZ with a new plan: becoming a snowboard instructor and travelling the world. 
                    So, while waiting for the next winter season, I decided to focus on my education and enrolled at 
                    University of Auckland, studying Computer Science and Psychology.
                </p>
                <p>
                    An eventful two semesters went by, and it was time to pack up for the next trip. However, COVID hit, and it seemed like my travel plans would have to be put on hold, so my focus
                    shifted entirely to my studies. Fast-forward 2 years, I graduated and joined Writer&apos;s Toolbox
                    in early 2022 as a grad software engineer, where I learned the ins and outs of web development 
                    from a group of talented and personable engineers.
                </p>
                <p>
                    I enjoyed my job, the unique blend of creativity and logic that went into our work was very fascinating to me.
                    But over time, I found myself getting too comfortable with my routine and life in NZ. Wanting a new challenge,
                    I started exploring opportunities overseas and eventually landed in Sydney, where I currently live.
                    During this time I also picked up golf, which, along with my software career, are my main pursuits currently.
                </p>
            </PageSection>
            <PageSection>
                <PageHeading>Golf</PageHeading>
                <ul className='list-disc pl-[1em]'>
                    <li><span className='font-bold'>Current handicap:</span> 11</li>
                    <li><span className='font-bold'>Best score:</span> 77 (+6)</li>
                    <li>
                        <p className='font-bold'>Equipment: </p>
                        <ul className='list-disc pl-[1em]'>
                            <li><span className='font-bold'>Driver, 3 wood, 3 hybrid: </span>Ping G430 Max</li>
                            <li><span className='font-bold'>Irons: </span>TaylorMade P790 (4 - PW)</li>
                            <li><span className='font-bold'>Wedges: </span>TaylorMade MG4 (50°, 54°, 58°)</li>
                            <li><span className='font-bold'>Putter: </span>Scotty Cameron Phantom X 5.5</li>
                        </ul>
                    </li>
                </ul>
            </PageSection>
        </PageContentContainer>
    )  
};

export default AboutPage;