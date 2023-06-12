import styles from './Home.module.css'

import mainAppImage from './assets/main-app.png'
import watchRootImage from './assets/watch-root.png'
import eventTypesImage from './assets/event-types.png'
import exportImage from './assets/export.png'


const Home = () => {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.textContainer}>
                    <h1>FileWatcher</h1>
                    <h2>Observe the Mac filesystem and monitor for over 30 types of events</h2>
                    <a className={`${styles.button} ${styles.downloadButton}`} href="https://www.github.com/lalunamel/FileWatcher" target="_blank" rel="noreferrer noopener">Download</a>
                </div>
                <div>
                    <img src={mainAppImage} alt="A screenshot of the FileWatcher application" />
                </div>
            </div>
            <div className={styles.description}>
                <div>FileWatcher is a tool made for developers that observes the Mac filesystem. It records events like open, close, write, and rename then displays them in an easy to use table. You can filter by event properties within the app, or even export the results for further processing.</div>

                <iframe width="100%" height="452" src="https://www.youtube.com/embed/EPhMWXzoBWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={styles.video}></iframe>
            </div>
            <div className={styles.feature}>
                <img src={watchRootImage} alt="FileWatcher watching root" />
                <div className={styles.textContainer}>
                    <h1>Observe any directory</h1>
                    <h2>Easily watch any directory recursively - even root!</h2>
                </div>
            </div>
            <div className={styles.feature}>
                <div className={styles.textContainer}>
                    <h1>Watch for every type of event</h1>
                    <h2>Over 30 event types are supported: open, close, write, link, mount, stat, and many more.</h2></div>
                <img src={eventTypesImage} alt="Event types" />
            </div>
            <div className={styles.feature}>
                <img src={exportImage} alt="Event types" />
                <div className={styles.textContainer}>
                    <h1>Export your results</h1>
                    <h2>FileWatcher does one thing really well - if you want to process your results, you can export them to csv, json, or plaintext.</h2>
                </div>
            </div>
        </div>
    )
}

export default Home