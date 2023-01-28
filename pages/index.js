import Head from 'next/head'
import { useState } from 'react';
import Modal from '../components/Modal';
import About from '../components/About';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Team from '../components/Team';
import Contacts from '../components/Contacts';

export function getStaticProps({ locale }) {
  return {
    props: {
      locale
    },
  };
}

export default function Home(props) {

  // modal

  const [showModal, setShowModal] = useState(false)

  function changeModal() {
    setShowModal(!showModal)
  }

  return (
    <>
      <Head>
        <title>SAFARALI</title>
        <meta name="description" content="This website belongs to Safarali Jumanov" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='Home'>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Team />
        <Contacts lang={props.locale} changeModal={changeModal} />
        {showModal &&
          <Modal lang={props.locale} changeModal={changeModal} />
        }
      </div>
    </>
  )
}
