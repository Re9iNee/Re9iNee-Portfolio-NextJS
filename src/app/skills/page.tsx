import H1 from "@/components/typography/h1";
import { Muted } from "@/components/typography/muted";
import { UL } from "@/components/typography/ul";

function SkillsPage() {
  return (
    <div>
      <H1>Skills</H1>
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
    </div>
  );
}

export default SkillsPage;
