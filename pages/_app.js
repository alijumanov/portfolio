import '../styles/Team.scss';
import '../styles/Modal.scss';
import '../styles/About.scss';
import '../styles/Header.scss';
import '../styles/Navbar.scss';
import '../styles/Skills.scss';
import '../styles/Loader.scss';
import '../styles/globals.scss';
import '../styles/Contacts.scss';
import '../styles/Projects.scss';
import Layout from '../components/Layout';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(MyApp);
