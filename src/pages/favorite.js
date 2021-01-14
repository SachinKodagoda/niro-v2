import Layout from '../components/Layout';
import Story from '../components/Story';
import fetch from 'isomorphic-unfetch';
import styles from '../styles/modules/Favorite.module.sass';


Favorite.getInitialProps = async({req, query}) => {
    const base_url = process.env.hosting ? process.env.host_url : process.env.dev_url;
    const res = await fetch(`${base_url}/api/stories`);
    const json = await res.json();
    return json;
}

export default function Favorite(value) {
    const stories = value.data[0].map((item)=>{
        return <Story key={item.doc_id} content={item} like={true} user_id="1" doc={item.doc_id}/>
    });
    return(
        <>
            <Layout>
                <div className={styles.favorite__container}>
                    <div className={styles.favorite__container__inner}>
                        {stories}
                    </div>
                </div>
            </Layout>
        </>
    )
};
