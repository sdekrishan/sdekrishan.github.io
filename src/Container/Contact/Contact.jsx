import React, { useRef, useState } from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { BsFillPhoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import "./Contact.scss";
const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_7umul8l",
        "template_5txgf5n",
        form.current,
        "riJqoRxifxRvYX6Wt"
      )
      .then(
        (result) => {
          setLoading(false);
          setIsFormSubmitted(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="app__footer" id='contacts'>
      <h2 className="head-text">
        Lets <span>Connect !</span>
      </h2>
      <Flex
        mt="2rem"
        pl="0"
        id="contact"
        pb="1rem"
        className="app__footer-cards"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        w="90%"
        boxShadow="5px 10px silver"
        border="1px solid black"
        borderRadius={"10px"}
      >
        <Box
          border={"1px solid green"}
          _hover={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)" }}
          transition=".5s ease"
          padding={"1rem"}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "45%" }}
          borderRadius={".5rem"}
        >
          <Text
            fontStyle={"italic"}
            fontSize="xl"
            textDecoration="underline"
            textAlign={"center"}
          >
            Contact Details
          </Text>
          <div className="app__footer-card">
            <SiGmail color="blue" />
            <Link
              target={"_blank"}
              ml="0.5rem"
              href="mailto:sdekrishan@gmail.com"
              className="work__tag-text"
              id="contact-email"
            >
              sdekrishan@gmail.com
            </Link>
          </div>
          <div className="app__footer-card">
            <HiLocationMarker color="green" />

            <Link
              target={"_blank"}
              href="https://goo.gl/maps/MqmZXBG7qWtSvNB86"
              ml="0.5rem"
              className="work__tag-text"
            >
              Bahadurgarh, Haryana
            </Link>
          </div>
          <div className="app__footer-card">
            <BsFillPhoneFill color="red" />

            <Link
              target={"_blank"}
              href="tel:7988398651"
              ml="0.5rem"
              className="work__tag-text"
              id="contact-phone"
            >
              7988398651
            </Link>
          </div>
          <div className="app__footer-card">
            <BsGithub color="black" />

            <Link
              target={"_blank"}
              href="https://github.com/sdekrishan"
              ml="0.5rem"
              className="work__tag-text"
              id='contact-github'
            >
              sdekrishan
            </Link>
          </div>
          <div className="app__footer-card">
            <BsLinkedin color="blue" />

            <Link
              target={"_blank"}
              href="https://www.linkedin.com/in/sdekrishan?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoBhtonT8QoelwDiylVoiWg%3D%3D"
              ml="0.5rem"
              className="work__tag-text"
              id="contact-linkedin"
            >
              Krishan Kumar
            </Link>
          </div>
        </Box>
        <Box
          w={{ base: "100%", sm: "100%", md: "100%", lg: "55%" }}
          padding={"2rem"}
        >
          {!isFormSubmitted ? (
            <form ref={form} onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Name" />
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Email" />
              <label>Message</label>
              <textarea name="message" rows={"3"} placeholder="Message" />
              <input
                type="submit"
                value={loading ? "Sending..." : "Send Message"}
              />
            </form>
          ) : (
            <div>
              <Text fontSize={"2xl"} color="white" textAlign={"center"}>
                Thank you for getting in touch!😍
              </Text>
            </div>
          )}
        </Box>
      </Flex>
      <Text
        mt="4rem"
        fontSize={{ base: "lg", sm: "lg", md: "xl", lg: "2xl" }}
        textAlign="center"
        padding={'1rem'}
        fontFamily={"kalam"}
        w='full'
      >
        Made By Krishan with 😎
      </Text>
    </div>
  );
};

// export default AppWrap(
//   MotionWrap(Footer, "app__footer"),
//   "contacts",
//   "app__primarybg"
// );
export default Footer;
