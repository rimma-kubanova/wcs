import Image from 'next/image'
import homeImg from '../../public/sky3.png';
import back from '../../public/group.svg';

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <div>
      <h1 className="absolute z-10 mx-24 mt-40 w-[400px]">Rimms kii’s space</h1>
      <h3 className="absolute w-[30vw] z-10 mx-24 mt-40 right-0 text-right text-3xl leading-relaxed">blog about me and stuff i do for Writing for Digital Media</h3>
      <h3 className="absolute w-[15vw] z-10 mx-24 mt-80 right-0 text-right text-3xl leading-relaxed">If your name is Brandon Brock, click to the red button</h3>
      <Image src={homeImg}
        alt="sky yeahh...sky"
        className='w-[100vw]'/>
      </div>
      {/* <Image src={back}
        alt="sky yeahh...sky"
        
        className='relative w-[100vw]'/> */}

        


    </div>
  )
}
