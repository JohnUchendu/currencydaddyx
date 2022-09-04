import React from 'react'

const Form = props => {
  return (
    
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



  )
}

export default Form