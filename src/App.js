import React, { useState, useRef, useEffect, } from 'react';
import { TweenLite, Power3 } from 'gsap'


import 'reset-css';
import './App.scss';



const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${require('./assets/image3.jpg')}`,
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require('./assets/image.jpg')}`,
    quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${require('./assets/image2.jpg')}`,
    quote: "obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
  }
];




function App() {
  let item = useRef(null);

  useEffect(() => {

  })

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false
  })

  const nextSlide = () => {
    if (item.children[0].classList.contains('active')) {
      setState({ isActive1: false, isActive2: true })
      TweenLite.to(item.children[0], 1, { x: -296, ease: Power3.easeOut })
      TweenLite.to(item.children[0].nextSibling, 1, { x: -296, ease: Power3.easeOut })
      TweenLite.to(item.children[1].nextSibling, 1, { x: -296, ease: Power3.easeOut })
      TweenLite.to(item.children[2], 0, { x: 0 })
    } else if (item.children[1].classList.contains('active')) {
      setState({ isActive2: false, isActive3: true })
      TweenLite.to(item.children[0], 1, { x: 296, ease: Power3.easeOut })
      TweenLite.to(item.children[0].nextSibling, 1, { x: -592, ease: Power3.easeOut })
      TweenLite.to(item.children[1].nextSibling, 1, { x: -592, ease: Power3.easeOut })
    }
    else if (item.children[2].classList.contains('active')) {
      setState({ isActive1: true, isActive3: false })
      TweenLite.to(item.children[2], 1, { x: -888, ease: Power3.easeOut })
      TweenLite.to(item.children[0], 1, { x: 0, ease: Power3.easeOut })
      TweenLite.to(item.children[1], 0, { x: 0 })
    }
  }

  const prevSlide = () => {
    if (item.children[0].classList.contains('active')) {
      setState({ isActive1: false, isActive3: true })
      TweenLite.to(item.children[2], 0, { x: -888, })
      TweenLite.to(item.children[2], 1, { x: -592, ease: Power3.easeOut })
      TweenLite.to(item.children[0], 1, { x: 296, ease: Power3.easeOut })
      TweenLite.to(item.children[0].nextSibling, 1, { x: 296, ease: Power3.easeOut })
    } else if (item.children[1].classList.contains('active')) {
      setState({ isActive2: false, isActive1: true })
      TweenLite.to(item.children[0], 0, { x: -296 })
      TweenLite.to(item.children[0], 1, { x: 0, ease: Power3.easeOut })
      TweenLite.to(item.children[0].nextSibling, 1, { x: 0, ease: Power3.easeOut })
      TweenLite.to(item.children[1].nextSibling, 1, { x: 592, ease: Power3.easeOut })
    }
    else if (item.children[2].classList.contains('active')) {
      setState({ isActive2: true, isActive3: false })
      TweenLite.to(item.children[2], 1, { x: -296, ease: Power3.easeOut })
      TweenLite.to(item.children[1], 0, { x: -592 })
      TweenLite.to(item.children[1], 1, { x: -296, ease: Power3.easeOut })

    }

  }




  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div onClick={prevSlide} className="arrows">
          <span>Previous arrow</span>
        </div>
        <div className="inner">
          <div className="t-image">
            <ul ref={el => item = el}>
              <li className={state.isActive1 ? 'active' : ''}><img src={testimonials[0].image} alt={testimonials[0].name} /></li>
              <li className={state.isActive2 ? 'active' : ''}><img src={testimonials[1].image} alt={testimonials[0].name} /></li>
              <li className={state.isActive3 ? 'active' : ''}><img src={testimonials[2].image} alt={testimonials[0].name} /></li>
            </ul>
          </div>
          <div className="t-content">
            <ul>
              <li className="active">
                <p className="quote">{testimonials[0].quote}</p>
                <h3 className="name">{testimonials[0].name}</h3>
                <h4 className="title">{testimonials[0].title}</h4>
              </li>
              <li >
                <p className="quote">{testimonials[1].quote}</p>
                <h3 className="name">{testimonials[1].name}</h3>
                <h4 className="title">{testimonials[1].title}</h4>
              </li>
              <li>
                <p className="quote">{testimonials[2].quote}</p>
                <h3 className="name">{testimonials[2].name}</h3>
                <h4 className="title">{testimonials[2].title}</h4>
              </li>
            </ul>
          </div>
        </div>
        <div className="arrows" onClick={nextSlide}>
          <span>Next arrow</span>
        </div>
      </div>
    </div >
  );
}

export default App;
