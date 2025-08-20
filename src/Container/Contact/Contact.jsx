import { motion } from 'framer-motion';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { SiGmail } from 'react-icons/si';
import {
  BsGithub,
  BsLinkedin,
  BsFillPhoneFill,
  BsTwitter,
  BsTwitterX
} from 'react-icons/bs';
import './Contact.scss';
import { AppWrap } from '../../Wrapper';
import Coin from '../../Components/Coin';

const contactMethods = [
  {
    icon: <BsFillPhoneFill size="full" color="black" />,
    text: '+91 7988398651',
    link: 'tel:+917988398651',
    id: 1,
    name: 'Phone',
  },
  {},
  {
    icon: <SiGmail size="full" color="green" />,
    text: 'sdekrishan@gmail.com',
    link: 'mailto:sdekrishan@gmail.com',
    id: 2,
    name: 'sdekrishan@gmail.com',
  },
  {},

  {
    icon: <BsGithub size="full" color="purple" />,
    text: 'SdeKrishan',
    link: 'https://github.com/sdekrishan',
    id: 3,
    name: 'Github',
  },
  {},
  {
    icon: <BsLinkedin size="full" color="darkBlue" />,
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sdekrishan/',
    id: 4,
    name: 'LinkedIn',
  },
  {},

  {
    icon: <BsTwitterX size="full" color="black" />,
    text: 'Your Location',
    link: 'https://x.com/sdekrishan',
    id: 5,
    name: 'Twitter',
  },
  {},
];

const contactMethodsMob = [
  {
    icon: <BsFillPhoneFill size="full" color="black" />,
    text: '+91 1234567890',
    link: 'tel:+911234567890',
    id: 1,
    name: 'Phone',
  },
  {},
  {},
  {
    icon: <SiGmail size="full" color="green" />,
    text: '',
    link: 'mailto:',
    id: 2,
    name: 'Gmail',
  },
  {
    icon: <BsGithub size="full" color="purple" />,
    text: '',
    link: '',
    id: 3,
    name: 'Github',
  },
  {},
  {},
  {
    icon: <BsLinkedin size="full" color="darkBlue" />,
    text: '',
    link: '',
    id: 4,
    name: 'LinkedIn',
  },
  {
    icon: <BsTwitterX size="full" color="black" />,
    text: 'Your Location',
    link: '',
    id: 5,
    name: 'Twitter',
  },
  {},
];

const Footer = () => {
  return (
    <motion.div
      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__footer"
      id="contacts"
    >
      <h2 className='heading'>Let's Connect</h2>
      <Flex
        mt="2rem"
        pl="0"
        id="contact"
        pb="1rem"
        flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
        w="90%"
      >
        <Grid
          height="fit-content"
          w="100%"
          templateColumns="repeat(5, 1fr)"
          gap={'30px'}
          marginInline={{ base: 'auto' }}
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'grid' }}
        >
          {contactMethods.map((method, index) => {
            if (method.id) {
              return (
                <GridItem
                  key={index + method.text}
                  height={'200px'}
                  width={'max-content'}
                  display={`flex`}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={5}
                  onClick={()=> {window.open(method.link)}}
                >
                  <motion.div
                    whileInView={{
                      scale: [0, 1],
                      y: [50, 0],
                      rotateY: [0, 360],
                    }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="app__footer_icon"
                  >
                    {method.icon}
                  </motion.div>
                  <Box>
                    <Coin />
                  </Box>
                </GridItem>
              );
            } else {
              return <GridItem key={index} />;
            }
          })}
        </Grid>

        <Grid
          templateColumns={'repeat(2, 1fr)'}
          height="fit-content"
          gap={10}
          w="fit-content"
          marginInline={'auto'}
          display={{ base: 'grid', sm: 'grid', md: 'grid', lg: 'none', }}
        >
          {contactMethodsMob.map((method, index) => {
            if (method.id) {
              return (
                <GridItem
                  key={index + method.text}
                  height={{ base: '100px', lg: '200px' }}
                  width={{ base: 'fit-content', lg: 'max-content' }}
                  display={`flex`}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={{ base: 0, lg: 5 }}
                >
                  <motion.div
                    whileInView={{
                      scale: [0, 1],
                      y: [50, 0],
                      rotateY: [0, 360],
                    }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="app__footer_icon"
                  >
                    {method.icon}
                  </motion.div>
                  <Box>
                    <Coin />
                  </Box>
                </GridItem>
              );
            } else {
              return <GridItem key={index} />;
            }
          })}
        </Grid>
      </Flex>
    </motion.div>
  );
};

export default AppWrap(Footer, 'app__footer', 'contacts');
