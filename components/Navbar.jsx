import Link from 'next/link'


const Navbar = () => {
    return (
        <div className='bg-neutral-900 p-5'>
            <ul className='flex align-center justify-start '>
                <Link href='/'>
                    <li className=' text-white font-semibold font-mono cursor-pointer'>
                        CurrencyDaddyX
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar