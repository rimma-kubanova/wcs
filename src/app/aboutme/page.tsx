import Image from "next/image"
import first from '../../../public/rect1.png'
import second from '../../../public/rect2.png'
import third from '../../../public/rect3.png'
import myPic from '../../../public/me.png'

export default function AboutMe() {
  return (
    <div className="w-full py-48">
        <div className="flex items-center justify-center relative flex-col mx-48 px-48">
            <div className="grid grid-cols-2 items-center">
                <Image src={myPic} alt="me"/>
                <div className="inline-flex flex-col justify-center">
                    <div className="mb-12 grid gap-2">
                        <h3 className="text-4xl">✨ Hi! It’s Rimma ! ✨</h3>
                        <p>( Rimskii for some ppl ) </p>
                    </div>

                    <div className="grid gap-4">
                        <p className="font-light">⛩️ 19 y.o | born in Russia, actually from Almaty</p>
                        <p>🎨 I draw A LOT, and love creating/customizing my own things</p>
                        <p>🐱 Cat enthusiast</p>
                        <p>🐑 Favourite Pokemon: Magikarp</p>
                    </div>
                </div>
            </div>
            <p className="py-24">In case I’m lost: Telegram: @kubrimskii | Instagram: @kub.rimskii | +7 771 442 9120 (for emergency)</p>
        </div>

        <div className="flex items-center justify-center pt-8 flex-col">
            <h3>If I had to describe myself in three pics, they would be:</h3>
            <div className="grid grid-cols-3 px-24 pt-12 gap-24 rounded-2xl">
                <Image src={first} alt="1"/>
                <Image src={second} alt="1"/>
                <Image src={third} alt="1"/>
            </div>
        </div>

    </div>
  )
}