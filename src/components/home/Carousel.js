import { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    stopTimer();
    const timerId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);
    setTimer(timerId);
  };

  const stopTimer = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.titles}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.title} ${index === currentIndex ? styles.activeTitle : ''}`}
            onClick={() => handleItemClick(index)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className={styles.content}>{items[currentIndex].content}</div>
    </div>
  );
};

export default Carousel;