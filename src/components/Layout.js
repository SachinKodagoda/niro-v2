import Head from 'next/head';
import Navbar from './Navbar';
import styles from '../styles/modules/Layout.module.sass';

// All the header files are given from here
const Layout = (props) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>{process.env.appName}</title>
                <meta name="viewport" content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=no, shrink-to-fit=no" />
                <meta name="author" content="Sachin Kodagoda" />
                <meta name="keywords" content="Noon" />
                <meta name="description" content="This is a interview test site" />
                <meta name="theme-color" content="#000" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Galada&display=swap" rel="stylesheet"/>
            </Head>
            <div className={styles.container}>
                <Navbar />
                {props.children}
            </div>

        </>
    );
};

export default Layout;