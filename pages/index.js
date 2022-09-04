import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'






export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>CurrencyDaddyX | CDX</title>
          <meta name="description" content="Foreign, Crypto and Stock exchange | Market analysis." />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <header className={styles.headerOne}>
          <h1>Amazon and SpaceX generate 6% in profit</h1>
        </header>

        <main>
          <section className={styles.sectionOne}>
            <h2>CurrencyDaddyX</h2>
            <p>4 Quarters p.a. We earn 3.69% per quarter!</p>
          </section>

          <section className={styles.sectionOne}>

            <div style={{ marginLeft: '1rem' }}>
              <p>5 Trillion in fx </p>
              <p>200 Billion in crypto </p>
            </div>
            <Image src='/public/vercel.svg'
              alt='currency rates'
              height='100%' width='200'
              style={{ backgroundColor: 'red', border: '10px green solid' }} />

          </section>

          <section className={styles.sectionOne}>
            <Image src='/public/vercel.svg'
              alt='currency rates'
              height='100%' width='200'
              style={{ backgroundColor: 'red', border: '10px green solid' }} />

            <div style={{ marginRight: '1rem' }}>
              <p>Building wealth by the day</p>
              <p>Build wealth, like Warren Buffet.</p>

            </div>


          </section>
        </main>

      </div>
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-5 mx-3 sm:mx-10 pt-10 '>
        <div>
          <h3 className='font-semibold '>{`Don't`} Miss out!</h3>
          <h3 className='pb-5'>Free analysis, speculations and signals</h3>
          
          <input style={{padding: '10px' }} type='email' name='email' placeholder='...Enter my email' />
          <button className='' style={{padding: '10px', cursor: 'pointer', backgroundColor: 'green', borderRadius: '0.5rem' }} type='submit'>Submit</button>
          
        </div>


<div>
          <h3 className='font-bold pb-5'>JOIN our community</h3>
          <p>ON <a  className='text-blue-600' href='https://t/me.com' target='_blank' rel="noreferrer">Telegram</a></p>
</div>

      </section>
      <br />


    </div>
  )
}
