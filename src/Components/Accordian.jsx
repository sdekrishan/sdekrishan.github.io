import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const Faqs = [
  {
    id: 1,
    question: "Why should I hire you?",
    answer:
      "You should hire me because I bring a mix of strong technical and soft skills. I stay up to date with modern tech stacks and not only build applications but also know how to deploy and maintain them. I’m highly adaptable and a quick learner, which is essential in today’s fast-changing, AI-driven landscape. Beyond technology, I believe soft skills like communication, collaboration, and ownership are just as important — and I’ve developed the ability to use them effectively in team environments to drive results. Wanna chat about that, let's connect then.",
  },
  {
    id: 2,
    question: "What makes you different from other candidates?",
    answer:
      "What makes me different is that I focus on being a strong engineer, not just a coder. Many people can write code, but I bring the ability to communicate effectively across teams — whether it’s business analysts, project owners, managers, or junior developers. This allows me to align technical solutions with business needs. I prioritize building quality, reliable products within deadlines rather than rushing, which ensures long-term value for both the team and the business. I have some examples but hey if I tell you everything here then what we should talk about in interview.",
  },
  {
    id: 3,
    question: "What are your career goals??",
    answer:
      "My career goal is simple: to keep learning and growing as an engineer. I strongly believe that success naturally follows continuous learning. In the short term, I want to deepen my expertise in DevOps, since it’s such a vast field, and also explore how AI can enhance productivity in engineering. In the long term, I see myself taking on more ownership — leading projects, mentoring others, and building solutions that create real impact.",
  },
  {
    id: 4,
    question: "What motivates you to do your best work?",
    answer:
      " What motivates me most is the eagerness to see the real impact of my work — knowing that something I built is being used and making a difference. I’m also highly motivated when working with smart and passionate teammates, because it pushes me to raise my own bar and keep improving. And yes, fair rewards and recognition also play a role, because they reflect the value of the work I deliver.",
  },
  {
    id: 5,
    question: "Salary Expectations?",
    answer:
      "If you’ve scrolled this far, I’m pretty sure you want to chat — so why wait? Let’s connect! (But if this was the first question you opened… well, I caught you 😄)",
  },
];

export default function Accordian() {
  return (
    <motion.div
      whileInView={{ y: [40, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      style={{ padding: "0.8rem", zIndex: 1 }}
    >
      <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
        {Faqs.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text color="white" fontSize="md">
                {item.question}
              </Text>
              <ChevronDownIcon color="white" fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="white">
                {item.answer || "No description available."}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}
