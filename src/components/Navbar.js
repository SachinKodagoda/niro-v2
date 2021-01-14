import Link from 'next/link';
import styles from '../styles/modules/Navbar.module.sass'
import { useRouter } from 'next/router'


// Navbar logic is written here
const Navbar = () => {
    const router = useRouter();
    const router_active_home = router.pathname === '/' ? styles.router_active : styles.router_disabled;
    const router_active_favorite = router.pathname === '/favorite' ? styles.router_active : styles.router_disabled;
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__left_spacer}>
                <Link href="/">
                    <span className={`${styles.navbar__item} ${router_active_home}`} >
                        <i className="fa fa-home"></i>
                        Home
                    </span>
                </Link>
                <Link href="/favorite">
                    <span className={`${styles.navbar__item} ${router_active_favorite}`}>
                        <i className="fa fa-heart"></i>
                        Favorite
                    </span>
                </Link>
            </div>
            <div className={styles.navbar__midlle_spacer}></div>
            <div className={styles.navbar__right_spacer}>
                <img className={styles.navbar__profile_img} src="/images/profile.jpg" alt="profile" />
                <span className={styles.navbar__email} >
                    duminda.g.k@gmail.com
            </span>
                <span className={styles.navbar__login_btn}>
                    <div className={styles.innerfix}>Logout</div>
                </span>
            </div>
        </div>
    )
};

export default Navbar;