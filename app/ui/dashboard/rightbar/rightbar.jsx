import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'
import styles from './rightbar.module.css'

const Rightbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <img className={styles.bg} src="/astronaut.png" alt='' width="100%" height="100%" />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}> 🔥Available now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notification}>🚀 Coming soon</span>
                    <h3 className={styles.title}>
                        New server actions are available, partial pre-rendering is 
                        coming up!
                        </h3>
                        <span className={styles.subtitle}>Boost your productivity</span>
                        <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                        </p>
                        <button className={styles.button}>
                            <MdReadMore/>
                            Learn
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Rightbar