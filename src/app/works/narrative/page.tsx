import Image from "next/image"
import cover from "../../../../public/0226-Cover.jpg";
import char from '../../../../public/twochar.png';
import twoo from '../../../../public/twoo.png';
import mee from "../../../../public/mee.png";
import dorm from "../../../../public/dorm.png";
import portrait from "../../../../public/canvas.png";

export default function DigitalNarrative(){
  return (
    <div className="w-full pt-48 h-[100vh]">
       <div className="absolute top-0"> 
       <h2 className="text-black text-6xl font-bold text-center pt-10 absolute">IMPERFECT</h2>
      <Image src={portrait} alt="f" className="grayscale w-[100vw]"/>
        <div className="bg-white flex-col justify-center items-center py-24 text-center">
          <h6 className="text-xl">WCS 240: Digital Narrative</h6>
          <div className="px-48 mx-48 text-start">
          <h2 className="text-black text-6xl font-bold text-center pt-10">IMPERFECT</h2>
            <h6 className="text-xl text-center pt-6 pb-20">by Rimma Kubanova </h6>
            <iframe width="1120" height="630" src="https://www.youtube.com/embed/_bvBpNjJKTI?si=56l1XmNV_WVafkPm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <h6 className="text-2xl pb-6 pt-12">This is the story of inner conflict, showing how people taught to be flawless face the tough truth of an imperfect world filled with challenges. It's about learning to accept our flaws instead of fearing them, understanding that they're part of who we are. As the characters navigate through their imperfections, they discover resilience and authenticity. This story teaches us the importance of accepting ourselves as we are and finding strength in our vulnerabilities.</h6>
            <h6 className="text-2xl pt-6 font-bold">This is the story about being feared of failing.</h6>
            <h4 className="p-12 font-bold text-4xl text-center">THE NEW NORMAL</h4>
            <div className="flex justify-center pb-12"><Image width="900" src={mee} alt="f"/></div>
            <h6 className="text-2xl pb-6">Truth be told, first I came up with the topic, then started to look for similarities with the suggested topics. I do believe that my story resonates best with the theme of "The New Normal." In my interpretation, the new normal is essentially the change that has become a part of everyday life. For me, accepting my imperfections was a long journey, a step-by-step process through which I came to understand how I changed during this period.</h6>
            <h4 className="p-12 font-bold text-4xl text-center">CHARACTERS</h4>
            <div className="flex justify-center pb-12"><Image width="900" src={char} alt="f"/></div>
            <h6 className="text-2xl py-6">The story revolves around two distinct characters: the protagonist (myself) and alter ego (also me but different). This choice was made to reflect the personal struggle with inner conflict. According to "Writing Fiction", the story of man against himself, is one of the common tropes used in media, which helps to analyze the conflicts people face with their themselves.
</h6><h6 className="text-2xl py-12">As has been conveyed in visual culture, form, or rather color, lines, space and weight, plays a huge role in conveying dynamics. Here I have tried to combine these shapes to create a contrast - a difference that can help us understand that the characters are different. We see one character wearing a simple black T-shirt, symbolizing humility. The main character struggles with self-doubt, anxiety and fear of failure, even minor failures such as imperfectly drawn lines become sources of frustration. Then another, shown in a blue T-shirt, exudes confidence and acts as an observer, observing the protagonist's journey.  </h6>
        <h6 className="text-2xl py-12">The narrative delves into the human desire to aspire towards better versions of oneself, often personified by an idealized alter ego. This motif explores the known concept of self-improvement, often stated as "Fake it till you make it," albeit with a deeper emphasis on genuine growth and resilience.</h6>
        <h4 className="p-12 font-bold text-4xl text-center">SETTING</h4>  
        <div className="flex justify-center pb-12"><Image width="900" src={dorm} alt="f"/></div>
        <h6 className="text-2xl py-6">Setting the stage within the confines of a dorm room serves both practical and symbolic purposes. Practically, it accommodates the limitations of solo filming, granting full control over the camera. It also helps to create a sense of Consistency (UPD), when "similar parts are expressed in similar ways". The story is perceived as easier as the setting remains consistent. Symbolically, the dorm room becomes a microcosm of the protagonist's mind, wherein all conflicts transpire, highlighting the internal nature of the struggle. </h6>     
        <h4 className="p-12 font-bold text-4xl text-center">THE LINE SEPARATION</h4>  
        <div className="flex justify-center pb-12"><Image width="900" src={twoo} alt="f"/></div>
        <h6 className="text-2xl py-6">The visual motif of separation, which appears as a line separating characters in the frame, serves as a symbolic representation (visual culture) of their inherent differences. This stylistic choice emphasizes the boundary that exists between the protagonist and her alter ego. This was heavily inspired by the film Parasite, where the invisible line served as a distinguishing feature between the poor and the rich, visually emphasizing the contrast between classes. This idea is supported by Visual Culture, where lines can be used in different ways, including to show visual separation of characters.</h6>
        <h4 className="p-12 font-bold text-4xl text-center">POST PRODUCTION</h4>  
        <h6 className="text-2xl py-12">During post-production, emphasis is placed on distinguishing between present moments and flashbacks. Using techniques such as black screens and distinct settings helps in delineating temporal shifts, ensuring clarity for the audience. Similarly, the musical score serves a dual purpose, bridging narrative elements while signaling thematic connections between scenes.
Sound effects play a pivotal role in conveying the characters' emotional states, with a myriad of effects employed to evoke feelings of frustration and anxiety. These auditory cues enrich the viewing experience, heightening the audience's immersion in the characters' inner conflict.
</h6>
          <h6 className="text-xl pt-24 text-gray-500">thanks for reading, hope you enjoyed it!!! i'm still mad that i actually could do better than that, but didnt, will do my best for psa</h6>
        </div>
    </div>
    </div>
    </div>
  )
}