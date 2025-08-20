import { BsLink, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.scss";
import images from "../constants/images";
import { useState } from "react";

const slides = [
  {
    id: 1,
    imgUrl: images.lestalk,
    name: "Lesalk",
    projectLink: "https://dontknow-seven.vercel.app/",
    codeLink: "https://github.com/sdekrishan/dontknow",
    title: "Les'alk",
    description:
      "Lestalk is a Social media app where user can make friends, share posts and also chat with them. User can manage their friendship also.",
    textstack: [
      "Html 5",
      "Socket.io",
      "Chakra UI",
      "React Js",
      "Redux",
      "Thunk",
      "Node Js",
      "Express.js",
      "MongoDB",
      "Sass",
    ],
    tags: ["React Js", "All"],
  },

  {
    id: 2,
    imgUrl: images.jcrew,
    name: "Jcrew",
    projectLink: "https://vintageattrie.netlify.app/",
    codeLink: "https://github.com/Raj-1313/The-Vintage-Attire",
    title: "The Vintage Attire",
    description:
      "TVA(the vintage attire) is an ecommerce app where you can shop for men, women, kids for home accessories.",
    textstack: [
      "Html 5",
      "CSS 3",
      "Chakra UI",
      "React Js",
      "Redux",
      "Thunk",
      "Node Js",
      "Express.js",
      "MongoDB",
      "Sass",
    ],
    tags: ["React Js", "All"],
  },
  {
    id: 3,
    imgUrl: images.prodozen,
    name: "ProDozen",
    projectLink: "https://allinone-azure.vercel.app/",
    codeLink: "https://github.com/sdekrishan/Allinone",
    title: "ProDozen",
    description:
      "ProDozen is a compilation of more than 13 projects (javascript and reactjs both).",
    textstack: [
      "Html 5",
      "CSS 3",
      "JavaScript",
      "React.js",
      "Chart.js",
      "Redux",
      "Chakra UI",
    ],
    tags: ["React Js", "All", "Fun App"],
  },
  {
    id: 4,
    imgUrl: images.styleLife,
    name: "StyleLife",
    projectLink: "https://stylelife.vercel.app",
    codeLink: "https://github.com/sdekrishan/Style-Life",
    title: "Style Life",
    description:
      "Style life helps you to live your life joyfully. You can eat in the best restaurants according to your location as well as you can book your appointment from doctors and massage services from spa centers.",
    textstack: [
      "Html 5",
      "CSS 3",
      "Chakra UI",
      "React Js",
      "Redux",
      "Thunk",
      "Node Js",
      "Express.js",
      "MongoDB",
    ],
    tags: ["React Js", "All"],
  },

  {
    id: 5,
    imgUrl: images.stayFit,
    name: "StayFit",
    projectLink: "https://stayfits.vercel.app/",
    codeLink: "https://github.com/rajkumar7859/stayFit.com",
    title: "Stay Fit",
    description:
      "StayFit allows users to track calories, monitor progress toward weight-management goals, and gain support from an online community.",
    textstack: [
      "Html 5",
      "CSS 3",
      "Chakra UI",
      "React Js",
      "Redux",
      "Thunk",
      "Node Js",
      "Express.js",
      "MongoDB",
    ],
    tags: ["React Js", "All"],
  },
];

export default function VerticalCarousel() {
  const [activeSlide, setActiveSlide] = useState(slides[0]);

  const handleClick = (link) => {
    window.open(link);
  };
  return (
    <div className="vertical-carousel">
      <Swiper
        direction="vertical"
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        mousewheel={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            direction: "horizontal", // 📱 mobile
            slidesPerView: 3,
          },
          767: {
            direction: "vertical", // 💻 tablet & desktop
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Mousewheel, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveSlide(slides[swiper.realIndex])}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="swiperSlide">
            <img src={slide.imgUrl} alt={slide.name} className="slide" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiperSlideContent">
          {activeSlide && (
            <div key={activeSlide.id} className="swiperSlideContentText">
              <img
                style={{
                  backgroundImage: `url(${activeSlide.imgUrl})`,
                  backgroundSize: "cover",
                  rotate: "-12deg",
                  backgroundPosition: "center",
                  opacity: 0.9,
                  zIndex: 1,
                  overflow: "visible",
                }}
                src={activeSlide.imgUrl}
                alt={activeSlide.name}
              />
              <div className="swiperSlideContentTextInner">
                <div
                  whileInView={{ x: [-100, 0], fade: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="header-text"
                >
                  <BsGithub
                    size={"20px"}
                    onClick={() => handleClick(activeSlide.codeLink)}
                  />
                  {activeSlide.title}
                  <BsLink
                    size={"20px"}
                    onClick={() => handleClick(activeSlide.projectLink)}
                  />
                </div>
                <p
                  whileInView={{ x: [-100, 0], fade: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="p-text p-description"
                >
                  {activeSlide.description}
                </p>
                <div className="techStackContainer">
                  {activeSlide.textstack &&
                    activeSlide.textstack.map((text, index) => (
                      <p
                        whileInView={{ y: [20, 0], fade: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        key={index}
                        className="techStack p-text"
                      >
                        {text}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
