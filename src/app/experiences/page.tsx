import H1 from "@/components/typography/h1";
import { H2 } from "@/components/typography/h2";
import { H4 } from "@/components/typography/h4";
import { Muted } from "@/components/typography/muted";
import { P } from "@/components/typography/p";
import { UL } from "@/components/typography/ul";
import Link from "next/link";

function ExperiencesPage() {
  return (
    <div>
      <H2>About Me</H2>
      <UL>
        <li>
          🌐 8 years of specialized experience in Next.js, React, and
          TypeScript.
        </li>
        <li>
          🎯 Led teams of up to 10 engineers, achieving a 98% on-time project
          completion rate.
        </li>
        <li>
          📈 Proven ability to increase user engagement by 30% across web
          applications.
        </li>
        <li>
          📚 Committed to continuous learning and efficiency in both
          professional and personal spheres.
        </li>
      </UL>

      <H2>Skills</H2>
      <Muted>sorted by category</Muted>
      <UL>
        <li>Typescript, Javascript</li>
        <li>Next JS, React JS</li>
        <li>Node JS</li>
        <li>Cypress, Jest</li>
        <li>Prisma ORM, GraphQL, MongoDB, PostgreSQL</li>
        <li>Amazon S3, EC2 and ECR</li>
        <li>Git, Github Actions, Github Runners</li>
        <li>Google Chrome Extensions</li>
        <li>Familiar with Deno, Bun</li>
      </UL>

      <H1>Experiences</H1>
      <H2>Full Stack Developer | NUWA | Remote</H2>
      <H4>Since Jun, 2023</H4>
      <P>
        Developed full stack responsive websites. focusing on AI and teaching
        era
      </P>
      <UL>
        <li>
          Decreased database query responses by implementing cache from 1.15s to
          9ms
        </li>
        <li>
          Implemented over 100 components using latest UI libraries like Shadcn
          & Tailwind
        </li>
      </UL>
      <H2>
        Frontend Web Developer & Team Lead | Solution Apps DG GmbH | Remote
      </H2>
      <H4>2 yrs</H4>
      <P>
        Developed a multi lingual marketplace admin panel covering +100 features
        like managing Orders, Products, Suppliers, Stocks… Participated in a
        team of 3 until the project was over.
      </P>
      <UL>
        <li>
          Configured an automation using Docker and Kubernetes, reducing
          deployment time from 4 days to 2 hours and saving 30+ hours of
          development time consumption per month.
        </li>
        <li>
          Refactored marketplace legacy codes reducing 2x smaller project size.
        </li>
        <li>
          Developed over 50 reusable-components. Prioritizing tasks for 3 other
          team members.
        </li>
        <li>
          Managed team by improving coding practices, assigning tasks,
          performing code review, and making sure unified code structure is
          being used across projects.
        </li>
      </UL>

      <H2>Front-end Developer | Mahaksoft | Full-time</H2>
      <H4>1 yr 4 mos</H4>
      <P>
        Design static pages using semantic HTML, CSS and Bootstrap. Build
        projects using PHP and NodeJS. and Build restful APIs and SOAP.
      </P>
      <UL>
        <li>Optimized main website load time from 13s to 3s.</li>
        <li>
          Redesigned 60 pages resulting in increased google lighthouse by 25%.
        </li>
        <li>
          Designed landing pages via vanilla JS resulting in significant
          reduction of page load from 10s to 1s.
        </li>
      </UL>

      <H2>NodeJS Developer | Mellat Bank (Polwinno) | contract work</H2>
      <H4>3 mos</H4>
      <P>
        An open source charity project that has the following features: list of
        Donors, Donations, list of Needy. Calculate Monthly donations.
      </P>
      <UL>
        <li>
          Wrote a mini ORM to interact with MSSQL queries in NodeJS. Resulting
          in lowering project size dependency and increasing runtime speed, and
          reducing build time deployment more than 5seconds.
        </li>
        <li>
          Won first team position on Sabkad 4 coding contest by using highly
          optimized algorithms.
        </li>
        <li>Managed Github repo and tasks on daily basis.</li>
      </UL>

      <H2>Freelance</H2>
      <H4>Since 2017 - 5 yrs 9 mos</H4>
      <P>Here are some highlights of what I did:</P>
      <UL>
        <li>
          <span className='font-bold'>Medical</span> - Made a wireless EMS hip
          trainer device in a team of 4.
        </li>
        <li>
          <span className='font-bold'>Productivity</span> - Designing Todo cross
          platform app for better productivity.
        </li>
        <li>
          <span className='font-bold'>Branding and Digital Marketing</span> -
          Building digital personas using Wordpress engaging over 3k monthly
          users.
        </li>
      </UL>

      <H2>Web Admin & Server Manager | Aryana Servers | Full-time</H2>
      <H4>3 yrs</H4>
      <UL>
        <li>Configure dedicated servers, and VPS, Monitoring systems.</li>
        <li>Working with linux distros, like Kali, Ubuntu, Centos.</li>
      </UL>

      <H2>Awards</H2>
      <H4>First team in ICT Coding contest 2022</H4>
      <H4>First team in Sabkad 4 Coding contest 2021</H4>

      <H2>Contributions</H2>
      <P>
        I’ve been contributing to open sources on major projects like
        <Link href='https://github.com/MichalLytek/typegraphql-prisma'>
          Typegraphql-prisma
        </Link>
        <Link href='https://deno.com/'>Deno.</Link> And been working on my{" "}
        <Link href='https://stackoverflow.com/users/9745726/re9inee'>
          Stack overflow profile
        </Link>{" "}
        gaining over 21 Badges. And asked questions with more than 8k views.
      </P>

      <H2>Languages</H2>
      <H4>🇩🇪 Deutsch (Germany) - A2</H4>
      <H4>🇺🇸 English - IELTS 7.5 </H4>
      <H4>🇮🇷 Persian (Farsi) - Native </H4>

      <H2>Education</H2>
      <UL>
        <li>
          Computer Science 2016 - 2020 -{" "}
          <span className='font-bold'>Bachelor</span>
        </li>
        <li>
          Artificial Intelligence & Robotics - Since 2022 -{" "}
          <span className='font-bold'>Masters</span>
        </li>
      </UL>
    </div>
  );
}

export default ExperiencesPage;
