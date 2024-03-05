import Image from "next/image"
import sadcat from '../../../public/Subject 12.png'
import hwasa from '../../../public/hwasa.webp'
import cover from '../../../public/0226-Cover.jpg';
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="w-full pt-48 h-[100vh]">
        <div className="flex flex-col justify-center items-center gap-6">
            <h2 className="text-4xl text-white pb-6 font-semibold">My Works ≽^•⩊•^≼ ₊˚⊹♡</h2>
            <div className="grid grid-cols-3 mx-48">
              <div className="bg-white rounded-xl px-8 py-12 mx-8 drop-shadow-md flex flex-col justify-center items-center">
                <Image src={hwasa} alt='' width={400} className="rounded-xl"/>
                <h4 className="text-2xl pt-5 pb-3 font-semibold text-center">Visual Storytelling: Analysis of Hwasa's 'Maria' Music Video</h4>
                <h5 className="pb-12">WCS 240: Blog Entry</h5>
                <button className="bg-[#DE4C57] px-8 py-2 rounded-3xl text-white text-2xl"><Link href='/works/blog1'>Read</Link> </button>
              </div>

              <div className="bg-white rounded-xl px-8 py-12 mx-8 drop-shadow-md flex flex-col justify-center items-center">
                <Image src={cover} alt='' width={400} className="rounded-xl"/>
                <h4 className="text-2xl pt-5 pb-3 font-semibold text-center">IMPERFECT</h4>
                <h5 className="pb-12">WCS 240: Digital Narrative</h5>
                <button className="bg-[#DE4C57] px-8 py-2 rounded-3xl text-white text-2xl"><Link href='/works/narrative'>Watch</Link> </button>
              </div>

            </div>
            <p>( anyway there will be cat pics to fill the space )</p>
            <Image src={sadcat} alt="cat is overwhemled and lying" className="pb-12" width="300"/>
        </div>
    </div>
  )
}