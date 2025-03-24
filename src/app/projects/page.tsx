import React from 'react';
import PageContentContainer from '@/components/layouts/PageContentContainer';
import PageSection from '@/components/layouts/PageSection';
import PageHeading from '@/components/layouts/PageHeading';
import { Metadata } from 'next';
import ProjectGrid from '@/components/projects-page/ProjectGrid';
import ProjectItem from '@/components/projects-page/ProjectItem';

export const metadata: Metadata = {
    title: 'Eric Tang - Projects'
}

const ProjectsPage = () => {
    return (
        <PageContentContainer>
            <PageSection className='max-w-4xl'>
                <PageHeading>Projects</PageHeading>
                <p>Here are some of the projects I&apos;ve made over the years, most are for fun aside from this website. I like to keep things minimalistic, focusing on clean code and usability.</p>
                <ProjectGrid>
                    <ProjectItem
                        title='Personal Website'
                        subTitle='2025'
                        link='https://github.com/etan675/ericdtang.com'
                        description='The source of this website. A space for some digital self-expression.'
                        tools={['TypeScript', 'Next.js', 'Tailwind CSS']}
                    />
                    <ProjectItem
                        title='TaskZen'
                        subTitle='2024'
                        link='https://github.com/etan675/task-zen'
                        appLink='https://task-zen-o9q1.onrender.com/'
                        description='A full stack task tracking app, built as a learning project to revise web fundamentals.'
                        tools={['JavaScript', 'HTML', 'SCSS', 'Node.js', 'TypeScript', 'Express.js', 'PostgreSQL']}
                    />
                    <ProjectItem
                        title='Tracker.GG'
                        subTitle='2024'
                        link='https://github.com/etan675/tracker-gg'
                        appLink='https://trackergg.vercel.app/'
                        description='Game-stats analysis website for League of Legends, inspired by OP.GG.'
                        tools={['TypeScript', 'Next.js', 'Tailwind CSS', 'Riot Games API']}
                    />
                    <ProjectItem
                        title='Chess'
                        subTitle='2024'
                        link='https://github.com/etan675/chess'
                        appLink='https://etan675.github.io/chess/'
                        description='Web-based chess game, a fun little challenge implementing the game of chess from scratch.'
                        tools={['JavaScript', 'React', 'Tailwind CSS']}
                    />
                    <ProjectItem
                        title='Kindle Manga Guide'
                        subTitle='2024'
                        link='https://github.com/etan675/manga-folder-helper'
                        description='Full steps for downloading online manga onto your kindle e-reader. Includes a small CLI tool that helps make the process much easier.'
                        tools={['Python']}
                    />
                </ProjectGrid>
            </PageSection>
        </PageContentContainer>
    )
};

export default ProjectsPage;