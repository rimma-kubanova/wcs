import Link from 'next/link';

export default function Navbar(){
    return(
        <div className='w-full absolute text-white z-10 text-2xl'>
            <nav className='flex items-center justify-center mx-auto gap-36 my-8'>
                <Link href='/'>main</Link>
                <Link href='/portfolio'>portfolio</Link>
                <Link href='/aboutme'>about me</Link>
                <div className='bg-[#DE4C57] px-8 py-2 rounded-3xl'>
                    <Link href='/works'>works</Link>
                </div>
            </nav>
            
            <div className='bg-white h-0.5 mx-24'></div>
        </div>
    )
}