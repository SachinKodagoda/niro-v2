import styles from '../styles/modules/StoryAdder.module.sass'

const StoryAdder = () => (
    <div className={styles.story_adder__card}>
        <span className={styles.story_adder__title}><i className="fa fa-coffee"></i>&nbsp;&nbsp;How do you feel today?</span>
        <span className={styles.story_adder__btn}>Add a Story</span>
    </div>
)

export default StoryAdder;