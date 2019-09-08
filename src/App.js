import React, { useState, useRef, useEffect } from "react";
import { TweenLite, Power3 } from "gsap";

import leftArrow from "./assets/arrow-left.svg";
import rightArrow from "./assets/arrow-right.svg";

import "reset-css";
import "./App.scss";

const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${require("./assets/image3.jpg")}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require("./assets/image.jpg")}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment."
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${require("./assets/image2.jpg")}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
  }
];

function App() {
  let imageList = useRef(null);
  let testimonialList = useRef(null);
  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false
  });

  useEffect(() => {
    TweenLite.to(testimonialList.children[0], 0, {
      opacity: 1
    });
  }, []);

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });

      //Slide 1 Image
      TweenLite.to(imageList.children[0], 1, {
        x: -imageWidth,
        ease: Power3.easeOut
      });
      //Slide 2 Image
      TweenLite.to(imageList.children[1], 1, {
        x: -imageWidth,
        ease: Power3.easeOut
      });
      TweenLite.from(imageList.children[1], 1, {
        scale: 1.2,
        ease: Power3.easeOut
      });
      TweenLite.to(imageList.children[2], 1, {
        x: -imageWidth,
        ease: Power3.easeOut
      });
      TweenLite.to(imageList.children[2], 0, { x: 0 });
      // Content transition
      //Slide 2 Content
      TweenLite.to(testimonialList.children[0], 1, {
        opacity: 0
      });
      TweenLite.to(testimonialList.children[1], 1, {
        opacity: 1,
        delay: 1
      });
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      TweenLite.to(imageList.children[0], 1, {
        x: imageWidth,
        ease: Power3.easeOut
      });
      TweenLite.to(imageList.children[1], 1, {
        x: -imageWidth * 2,
        ease: Power3.easeOut
      });
      TweenLite.to(imageList.children[2], 1, {
        x: -imageWidth * 2,
        ease: Power3.easeOut
      });

      //content transition

      TweenLite.to(testimonialList.children[1], 1, {
        opacity: 0
      });
      TweenLite.to(testimonialList.children[2], 1, {
        opacity: 1,
        delay: 1
      });
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive1: true, isActive3: false });
      TweenLite.to(imageList.children[2], 1, {
        x: -imageWidth * 3,
        ease: Power3.easeOut
      });
      TweenLite.to(imageList.children[0], 1, { x: 0, ease: Power3.easeOut });
      TweenLite.to(imageList.children[1], 0, { x: 0 });

      //content transition

      TweenLite.to(testimonialList.children[2], 1, {
        opacity: 0
      });
      TweenLite.to(testimonialList.children[0], 1, {
        opacity: 1,
        delay: 1
      });
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      TweenLite.to(imageList.children[2], 0, { x: -imageWidth * 3 });
      TweenLite.to(imageList.children[2], 1, {
        x: -imageWidth * 2,
        ease: Power3.easeOut
      });
      TweenLite.to(imageList.children[0], 1, {
        x: imageWidth,
        ease: Power3.easeOut
      });
      TweenLite.to(imageList.children[0].nextSibling, 1, {
        x: 296,
        ease: Power3.easeOut
      });

      //content transtion
      TweenLite.to(testimonialList.children[0], 1, {
        opacity: 0
      });
      TweenLite.to(testimonialList.children[2], 1, {
        opacity: 1,
        delay: 1
      });
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      TweenLite.to(imageList.children[0], 0, { x: -imageWidth });
      TweenLite.to(imageList.children[0], 1, { x: 0, ease: Power3.easeOut });
      TweenLite.to(imageList.children[0].nextSibling, 1, {
        x: 0,
        ease: Power3.easeOut
      });
      TweenLite.to(imageList.children[1].nextSibling, 1, {
        x: imageWidth * 2,
        ease: Power3.easeOut
      });

      //content transtion
      TweenLite.to(testimonialList.children[1], 1, {
        opacity: 0
      });
      TweenLite.to(testimonialList.children[0], 1, {
        opacity: 1,
        delay: 1
      });
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      TweenLite.to(imageList.children[2], 1, {
        x: -imageWidth,
        ease: Power3.easeOut
      });
      TweenLite.to(imageList.children[1], 0, { x: -imageWidth * 2 });
      TweenLite.to(imageList.children[1], 1, {
        x: -imageWidth,
        ease: Power3.easeOut
      });

      //content transtion
      TweenLite.to(testimonialList.children[2], 1, {
        opacity: 0
      });
      TweenLite.to(testimonialList.children[1], 1, {
        opacity: 1,
        delay: 1
      });
    }
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div onClick={prevSlide} className="arrows left">
          <span>
            <img src={leftArrow} alt="left arrow" />
          </span>
        </div>
        <div className="inner">
          <div className="t-image">
            <ul ref={el => (imageList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <img src={testimonials[1].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <img src={testimonials[2].image} alt={testimonials[0].name} />
              </li>
            </ul>
          </div>
          <div className="t-content">
            <ul ref={el => (testimonialList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <div className="content-inner">
                  <p className="quote">{testimonials[0].quote}</p>
                  <h3 className="name">{testimonials[0].name}</h3>
                  <h4 className="title">{testimonials[0].title}</h4>
                </div>
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <div className="content-inner">
                  <p className="quote">{testimonials[1].quote}</p>
                  <h3 className="name">{testimonials[1].name}</h3>
                  <h4 className="title">{testimonials[1].title}</h4>
                </div>
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <div className="content-inner">
                  <p className="quote">{testimonials[2].quote}</p>
                  <h3 className="name">{testimonials[2].name}</h3>
                  <h4 className="title">{testimonials[2].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="arrows right" onClick={nextSlide}>
          <img src={rightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
}

export default App;
