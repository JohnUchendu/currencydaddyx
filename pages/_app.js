import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/Home.module.css'



function MyApp({ Component, pageProps }) {
 
  return (
   
      <div className=''>
     
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    




  )
}

export default MyApp
