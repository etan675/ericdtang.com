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
                <p>Here are a collection of the projects I&apos;ve built over the years. I like to keep things minimal, focusing on clean code, developer experience, and the general learning aspect of my projects.</p>
                <ProjectGrid>
                    <ProjectItem
                        title='AdminFlow'
                        subTitle='2025'
                        link='https://github.com/etan675/company-employee-dashboard'
                        description="A simple dashboard for managing company and employee data. In this project I explored the Outside-In TDD approach using Laravel."
                        tools={['Laravel', 'Vue.js', 'Inertia.js', 'PHP', 'TypeScript', 'Tailwind CSS']}
                    />
                    <ProjectItem
                        title='rct-kit'
                        subTitle='2025'
                        link='https://github.com/etan675/rct-kit'
                        description="A deep dive into React's complex internal mechanisms by building them from scratch, like component state, rendering cycles, and the reconciliation algorithm."
                        tools={['TypeScript', 'Vite']}
                    />
                    <ProjectItem
                        title='Personal Website'
                        subTitle='2025'
                        link='https://github.com/etan675/ericdtang.com'
                        description='The source of this website. A space for some digital self-expression.'
                        tools={['Next.js', 'React', 'TypeScript', 'Tailwind CSS']}
                    />
                    <ProjectItem
                        title='Tracker.GG'
                        subTitle='2024'
                        link='https://github.com/etan675/tracker-gg'
                        appLink='https://trackergg.vercel.app/'
                        description='Game-stats analysis website for League of Legends, inspired by OP.GG.'
                        tools={['Next.js', 'React', 'TypeScript', 'Riot Games API', 'Tailwind CSS']}
                    />
                    <ProjectItem
                        title='TaskZen'
                        subTitle='2024'
                        link='https://github.com/etan675/task-zen'
                        appLink='https://task-zen-o9q1.onrender.com/'
                        description='A full stack task tracking app, built as a learning project to revise web fundamentals without using frameworks.'
                        tools={['JavaScript/TypeScript', 'HTML', 'SCSS', 'Node.js', 'Express.js', 'PostgreSQL']}
                    />
                    <ProjectItem
                        title='Chess'
                        subTitle='2024'
                        link='https://github.com/etan675/chess'
                        appLink='https://etan675.github.io/chess/'
                        description='Web-based chess game, a fun challenge implementing a chess engine and game from scratch.'
                        tools={['React', 'JavaScript', 'Tailwind CSS']}
                    />
                    <ProjectItem
                        title='Kindle Manga Guide'
                        subTitle='2024'
                        link='https://github.com/etan675/manga-folder-helper'
                        description='Full steps for downloading online manga onto a kindle e-reader. Includes a small CLI tool that automates the process.'
                        tools={['Python']}
                    />
                    <ProjectItem
                        title='Kafka Microservices POC'
                        subTitle='2023'
                        link='https://github.com/etan675/Kafka-Event-Streaming-POC'
                        description="A proof of concept project I built as part of an initiative at my workplace to explore migrating parts of our backend to microservices architecture."
                        tools={['Apache Kafka', 'Golang', 'Docker']}
                    />
                    <ProjectItem
                        title='ETL and Data Warehousing POC'
                        subTitle='2023'
                        link='https://github.com/etan675/Singer-Automated-ETL'
                        description="A proof of concept for ETL pipelines. Uses an open-source ETL tool called Singer.io to ingest and transform data from SQL databases into Parquet format."
                        tools={['Singer.io', 'Python', 'MySQL', 'Docker', 'Bash']}
                    />
                </ProjectGrid>
            </PageSection>
        </PageContentContainer>
    )
};

export default ProjectsPage;