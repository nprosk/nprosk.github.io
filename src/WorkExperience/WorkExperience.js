import { Box, position, Text } from "@chakra-ui/react";
import WorkExperienceCarousel from "./WorkExperienceCarousel";
import { complex } from "framer-motion";

export default function WorkExperience() {
  const workExperience = [
    {
      company: "Art of Problem Solving",
      position: "Teaching Assistant",
      duration: "August 2021 - Present",
      description: `Answer students’ questions and clarify confusion in a text-based class, grade writing problems. Communicate with the instructor and occasionally another assistant to stay on top of classes of 40+ students.
        Courses: Intermediate Algebra, Intermediate Programming with Python, Introduction to Geometry, Introduction to Algebra A and B, Introduction to Programming with Python, Prealgebra 1 and 2.`,
      logo: "./CompanyLogos/aops-logo.svg",
    },
    {
      company: "Northeastern University",
      position: "Esports Broadcast Member",
      duration: "February 2023 - Present",
      description: `Produce professional streams, including graphic overlays, sponsor activation, and timely production.
      \nConvey the play-by-play actions and strategic actions of each match to the audience in a way that is understandable to both
      veteran players and uninformed viewers
      \nSchedule and coordinate streams with teams, casters, interviewees, and tournament organizers.`,
      logo: "./CompanyLogos/NortheasternUniversity.png",
    },
    {
      company: "Coast Guard Exchange",
      position: "Sales Clerk",
      duration: "November 2020 - August 2021",
      description: `Assisted customers with purchases, returns, and exchanges, and helped them find products they needed.
      \nMaintained a clean and organized store, restocking products and cleaning the store as needed.
      \nOperated the cash register and handled cash and card transactions.`,
      logo: "./CompanyLogos/CGX_logo.png",
    },
    {
      company: "Evertec",
      position: "Products and Innovation Intern",
      duration: "June 2024 - July 2024",
      description: `Conducted audit and fact-finding on RiskCenter 360 cost structure.
      \nCollaborated with multiple departments across several Latin American locations.
      \nConstructed a P&L analysis for RiskCenter 360 product in Microsoft Excel and briefed management team on findings.`,
      logo: "./CompanyLogos/Evertec_logo.png",
    },
    {
      company: "Northeastern University ITS",
      position: "Quality Assurance Co-op",
      duration: "July 2024 - December 2024",
      description: `Automated functional, load, and stress testing of APIs using JMeter, executing JDBC requests and utilizing Groovy scripting.
      \nDeveloped and implemented test cases to validate acceptance criteria for Salesforce workflows and flows.
      \nValidated accurate data transfer between databases like Banner and Snowflake and applications such as Salesforce and OutSystems, ensuring data integrity and proper system integration across platforms.`,
      logo: "./CompanyLogos/NortheasternUniversity.png",
    }
  ];

  return (
    <>
      <Box w={"100%"} align="center" my={"11vh"}>
        <Box mb={4}>
          <Text fontSize={30} as={"b"}>
            Work Experience
          </Text>
        </Box>
        <WorkExperienceCarousel workExperiences={workExperience} />
      </Box>
    </>
  );
}
