import styles from '../styles/modules/Profile.module.sass'

const Profile = () => (
    <div className={styles.profile__container}>
        <div className={styles.profile__card}>
            <div className={styles.profile__card_upper}></div>
            <img src="/images/profile.jpg" alt="profile" className={styles.profile__img} />
            <div className={styles.profile__card_bottom}>
                <div className={styles.profile__card_bottom_name}>
                    Sachin Kodagoda
                </div>
                <div>
                    Full stack developer
                </div>
            </div>
        </div>
        <div className={styles.profile__following}>
            <div className={styles.profile__following_title}>Following</div>
            <div>34</div>
        </div>
        <div className={styles.profile__followers}>
            <div className={styles.profile__followers_title}>Followers</div>
            <div>155</div>
        </div>
        <div className={styles.profile__view}>
            <span className={styles.profile__view_button}><i className="fa fa-sliders"></i>&nbsp;&nbsp;View profile</span>
        </div>
    </div>
)

export default Profile;