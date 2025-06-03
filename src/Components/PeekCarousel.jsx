import React, { useState, useRef, useEffect } from 'react';
import '../assets/Css/PeekCarosel.css';

const AccordionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const panesRef = useRef([]);
  const totalVisible = 4;
  const expandedWidth = 70;
  const [compressedWidth, setCompressedWidth] = useState(0);

  // Replace this with your actual image URLs
  const imageUrls = [
    './images/FirstSliderImage.png',
    './images/FirstSliderImage.png',
    './images/FirstSliderImage.png',
    './images/FirstSliderImage.png',
    './images/FirstSliderImage.png',
    './images/FirstSliderImage.png',
    './images/FirstSliderImage.png',
    './images/FirstSliderImage.png',
    './images/FirstSliderImage.png',
    './images/FirstSliderImage.png',
    './images/FirstSliderImage.png',
 
  ];

  useEffect(() => {
    setCompressedWidth((100 - expandedWidth) / (totalVisible - 1));
  }, [expandedWidth]);

  const scrollToActive = () => {
    const track = trackRef.current;
    const containerWidth = track.parentElement.offsetWidth;

    let offsetLeft = 0;
    for (let i = 0; i < activeIndex; i++) {
      offsetLeft += panesRef.current[i].offsetWidth;
    }

    let shift = activeIndex === 0 ? 0 : offsetLeft - panesRef.current[activeIndex - 1].offsetWidth;
    const maxScroll = track.scrollWidth - containerWidth;
    shift = Math.max(0, Math.min(shift, maxScroll));

    track.style.transition = 'transform 0.3s ease';
    track.style.transform = `translateX(-${shift}px)`;
  };

  const setActive = (index) => {
    setActiveIndex(index);
    scrollToActive();
  };

  const prevPane = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const nextPane = () => {
    setActiveIndex((prev) => Math.min(imageUrls.length - 1, prev + 1));
  };

  return (
    <div className="accordion-container">
      <div className="accordion-track" ref={trackRef}>
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className={`pane ${activeIndex === index ? 'active' : ''}`}
            style={{
              flex: activeIndex === index ? `0 0 ${expandedWidth}%` : `0 0 ${compressedWidth}%`,
            }}
            ref={(el) => (panesRef.current[index] = el)}
            onClick={() => setActive(index)}
          >
            <img src={url} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="accordion-controls">
        <button onClick={prevPane}>Prev</button>
        <button onClick={nextPane}>Next</button>
      </div>
    </div>
  );
};

export default AccordionCarousel;
