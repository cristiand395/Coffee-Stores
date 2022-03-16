import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Banner } from '../components/Banner/Banner'

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('button clicked')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Store</title>
        <meta name="description" content="Nextjs project example" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main className={styles.main}>
        <Banner 
          buttonText="View Stores nerby"
          handleOnClick={handleOnBannerBtnClick}/>
        <div className={styles.heroImage}>
          <Image 
            alt='hero image'
            src='/static/hero-image.png'
            width={700}
            height={400}/>
        </div>
      </main>
    </div>
  )
}
