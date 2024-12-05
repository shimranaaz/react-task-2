import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const teamMembers = [
  {
    name: 'Lavinia Blanchett',
    role: 'Developer',
    description: 'A developer is a skilled professional who designs, builds, tests, and maintains software applications, websites, or systems. Developers work across various technologies, including programming languages, frameworks, and tools, to create solutions that meet user needs or business requirements.',
    image: 'https://cdn.prod.website-files.com/6270d0a8b234badbf01e4541/6299b40d49b8307f7b1dc3ad_team-1.png',
  },
  {
    name: 'Analisse Shire',
    role: 'Designer',
    description: 'A designer is a creative professional who plans and creates visual, functional, and interactive experiences. Designers focus on aesthetics, usability, and problem-solving to craft solutions that meet specific goals, whether in digital, print, or physical spaces. They blend artistry and strategy to create impactful designs that resonate with users or audiences.',
    image: 'https://cdn.prod.website-files.com/6270d0a8b234badbf01e4541/6299b47c49b830bdd11dc510_team-4.png',
  },
  {
    name: 'Dr. Jessica McCartney',
    role: 'Project Manager',
    description: 'A project manager (PM) is a professional responsible for planning, executing, and overseeing projects to ensure they are completed on time, within scope, and within budget. They act as the bridge between stakeholders, teams, and resources, managing communication, risks, and deliverables throughout the project lifecycle.',
    image: 'https://cdn.prod.website-files.com/6270d0a8b234badbf01e4541/6299b440ac2da93922a0c2a8_team-2.png',
  },
];

const TeamPage = () => {
  return (
    <div className="team-page">
      <h1>Our Team Members</h1>
      <div className="team-cards-container">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
