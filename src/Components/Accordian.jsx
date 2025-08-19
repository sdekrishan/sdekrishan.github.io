import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

const Faqs = [
  {
    id: 1,
    question: 'Why should I hire you?',
    answer:
      'Because you are seeking for one. I am seeking for one. So, we both are on the same page.',
  },
  {
    id: 2,
    question: 'What makes you different from other candidates?',
    answer: '',
  },
  { id: 3, question: 'What are your career goals??', answer: '' },
  { id: 4, question: 'What motivates you to do your best work?', answer: '' },
  { id: 5, question: 'Salary Expectations?', answer: '' },
];

export default function Accordian() {
  return (
    <motion.div
      whileInView={{ y: [40, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      style={{ padding: '0.8rem', zIndex: 1 }}
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
                {item.answer || 'No description available.'}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}
