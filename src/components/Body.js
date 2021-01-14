import styles from '../styles/modules/Body.module.sass'
import Profile from './Profile'
import Story from './Story'
import StoryAdder from './StoryAdder'

// This is the center of the page
const Body = (props) => {

    const data = props.list.data[0];
    const stories = data.map((item)=>{
        return <Story key={item.doc_id} content={item} like={false} user_id="1" doc={item.doc_id}/>
    });

    return (
        <div className={styles.body__container}>
            <Profile />
            <div className={styles.body__central}>
                <StoryAdder />
                {stories}
            </div>
            <div className={styles.body__right}>
                <div className={styles.body__right__container}>
                    <div className={styles.body__right__suggestions}>Suggestions<i className="fa fa-thumbs-up"></i></div>
                    <div className={styles.body__right__suggestions_content}>
                        <div className={styles.body__right__img_outer}>
                            <img src="/images/profile2.png" alt="profile" className={styles.body__right__img} />
                            <span className={styles.body__right__img_name}>Nirosha Jayananda</span>
                            <div className={styles.body__right__img_plus}><i className="fa fa-plus"></i></div>
                        </div>

                    </div>
                    <div className={styles.body__right__suggestions_content}>
                        <div className={styles.body__right__img_outer}>
                            <img src="/images/profile3.jpeg" alt="profile" className={styles.body__right__img} />
                            <span className={styles.body__right__img_name}>Yohan Randhira</span>
                            <div className={styles.body__right__img_plus}><i className="fa fa-plus"></i></div>
                        </div>
                    </div>
                    <div className={styles.body__right__suggestions_content}>
                        <div className={styles.body__right__img_outer}>
                            <img src="/images/profile4.jpg" alt="profile" className={styles.body__right__img} />
                            <span className={styles.body__right__img_name}>Sisira Kodagoda</span>
                            <div className={styles.body__right__img_plus}><i className="fa fa-plus"></i></div>
                        </div>
                    </div>
                </div>
                <div className={styles.body__right__advertisements}>
                    <div className={styles.body__right__advertisements__inner}>
                        <span>For Advertisments</span>
                        <span>Call us</span>
                        <span><i className="fa fa-phone"></i>&nbsp;0765742200</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Body;