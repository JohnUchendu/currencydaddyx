import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <p className='text-blue-600'><Link  href='/about' >About</Link></p>

        <p>A project by mainStar, made with money.</p>
        <p>| Office: Port Harcourt, Rivers State.</p>
        <p>| hello@currencydaddyx.com</p>

      </div>
      <div className={styles.footer}><p className='text-neutral-900 text-[0.5rem]'>DISCLAIMER:
        CurrencyDaddyX is a project of mainStart. We will never message, call,
        directly email you to ask for money. We do not sell any books, ebooks, EPUB or any
        sort of online magazine.
        It is important to inform users of this website that you agree to Terms and conditions when using the data and
        services rendered. Visitors/ or users should be aware of the risks invovled in the forex, crypto, stocks or any category
        of liquid market. You are liable to loose funds. Also you can earn a decent or lavish life. *Note that the information can change over
        time.
      </p></div>
    </>
  )
}

export default Footer