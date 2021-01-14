import styles from '../styles/modules/Home.module.sass';
import Layout from '../components/Layout';
import Body from '../components/Body';
import fetch from 'isomorphic-unfetch';

Home.getInitialProps = async({req, query}) => {
  const base_url = process.env.hosting ? process.env.host_url : process.env.dev_url;
  const res = await fetch(`${base_url}/api/stories`);
  const json = await res.json();
  return json;
}

export default function Home(value) {
  if (!value) {
    return 'Loading...';
  }
  return (
    <>

        <Layout>
            <div>
                <Body list={value}/>
            </div>
        </Layout>
    </>
  )
}
