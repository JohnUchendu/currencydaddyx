import Link from 'next/link'


const error404 = () => {
  return (
    <section className='text-center py-[20rem]'>
    <h1>Thank you for getting this far</h1>
    <h2><br />
         
        Click<p className='text-blue-600 inline'><Link href='/'> HOME </Link></p> to navigate</h2>
        
    </section>
  )
}

export default error404