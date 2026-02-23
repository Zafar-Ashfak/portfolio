import { useState, useEffect } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [
    "Java Backend Engineer",
    "Spring Boot Developer",
    "RESTful API Developer",
    "Microservices Architecture",
    "Scalable API Designer", 
    "Frontend Engineer",
    "React.js Developer",
    "Web Designer",
    "UI/UX Focused"
  ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updateText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)  
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText == '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>Hi, I am</p>
        <h1>Md Ashfak Alam</h1>
        <h2 className='wrap'>{text}</h2>
        <span>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a> 
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for building scalable and secure Java backend systems for enterprise applications.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
