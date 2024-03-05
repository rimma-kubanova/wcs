import Image from "next/image"
import maria from '../../../../public/maria.jpg'
import scene1 from '../../../../public/scene1.jpg'
import scene2 from '../../../../public/scene2.jpg'
import scene3 from '../../../../public/scene3.jpg'
import blood1 from '../../../../public/blood1.jpg'
import blood2 from '../../../../public/blood2.jpg'
import dance1 from '../../../../public/dance1.jpg'
import dance2 from '../../../../public/dance2.jpg'
import crown from '../../../../public/crown.jpg'
import final from '../../../../public/final.jpg'
import malena from '../../../../public/malena.jpg'

export default function Blog() {
  return (
    <div className="w-full pt-48 h-[100vh]">
       <div className="absolute top-0"> 
        <Image src={maria} alt='maria' className="grayscale"/>
        <div className="bg-white flex-col justify-center items-center py-24 text-center">
          <h6 className="text-xl">WCS 240: Blog Entry</h6>
          <div className="px-48 mx-48 text-start">
          <h2 className="text-black text-6xl font-bold text-center pt-20">Visual Storytelling: Analysis of Hwasa&apos;s &apos;Maria&apos; Music Video</h2>
            <h6 className="text-xl text-center pt-6 pb-20">by Rimma Kubanova </h6>
            <h6 className="text-2xl pb-6 pt-12">In this blog post, I will analyze the multimodal text in the form of music song "Maria" by Hwasa. I will aim to explore the design choices made in this music clip through concepts introduced in the chapters on "Semiotics," "Form," and "Iconography" of Visual Culture.</h6>
            <a className="text-center text-2xl py-12 underline" href="https://www.youtube.com/watch?v=tDukIfFzX18">https://www.youtube.com/watch?v=tDukIfFzX18</a>
            <h6 className="text-2xl pt-6">"Maria" is a single released by Hwasa, depicting her journey of self-discovery as a K-pop artist. For further discussion, it&apos;s crucial to understand the context that motivated the artist to produce the film in the way it is.</h6>
            <h6 className="text-2xl py-6"><span className="font-bold">Ahn Hye-jin</span>, also known as <span className="font-bold">Hwasa</span>, is a Korean singer and a member of the group MAMAMOO. In the realm of K-pop, she is famous for defying Korea&apos;s strict beauty standards. Her unconventional body type for a K-pop singer, along with her tanned skin (in contrast to the preference for whitewashed skin), and her obstinate nature, have, however, made her a subject of significant criticism and judgment. 
</h6>
            <h6 className="text-2xl pb-12">The choice of the song title "Maria" is significant. Derived from her baptismal name, it portrays her real personality, distinct from her stage persona. The song itself feels like Hwasa&apos;s dialogue with her true self, with her true essence, serving as an internal pep talk to help her overcome negative reactions: <span className="italic">“Oh Mary, I&apos;m saying this for you. Why are you trying so hard? You&apos;re already beautiful.</span>"
</h6>

            <div className="grid items-center grid-cols-2">
              <Image src={scene1} alt="" />
              <Image src={scene2} alt="" />
            </div>

            <h6 className="text-2xl py-12">Now, let&apos;s dive into the analysis of the intro frames. We are presented with Hwasa lying in a bathtub surrounded by yellow police tapes and a crowd gathered around, obviously suggesting what this is a crime scene, with Hwasa potentially being the victim. However, we are left questioning: was she indeed the victim of a crime, or did she take her own life?
</h6>
              <Image src={scene3} alt="" />
            <h6 className="text-2xl py-12">The next scene presents a huge contrast: the somber, cold atmosphere transitions into warm tones. Following Panofsky&apos;s method, on the first level we need to identify what is shown and what atmosphere it communicates (Visual Culture, Chapter "Iconography"). Here we are clearly witnessing a funeral: fields of roses, chairs, lit candles, characteristic of Christian culture, surrounding the figure in the center - the body of Hwasu, dressed in a black dress. As we go deeper, we notice what the color of dress is chosen for a purpose - black matching the solemnity of the occasion, symbolizing her demise, marking the end of her story.  Strangely, there&apos;s a absence of mourners; all chairs are empty, turned away from the center. This contrast from the previous crime scene, where people swarmed around her, highlights a message: <span className="font-bold">in death, Hwasa is neglected and unloved. </span> </h6>

            <div className="grid items-center grid-cols-2">
              <Image src={maria} alt="" />
              <Image src={malena} alt="" />
            </div>
            <h6 className="text-2xl py-12">In the next shot depicts we see Hwasa being offered lighters, a clear reference taken from a scene in the Italian film "Malena". In the movie, this moment symbolizes Malena reclaiming her dignity after enduring persecution from her town. This reference enhances to the audience the message of the music video - Hwasa will hold her ground despite the criticism she gets for her appearance and behavior.</h6>

            <div className="grid items-center grid-cols-2">
              <Image src={blood1} alt="" />
              <Image src={blood2} alt="" />
            </div>

            <h6 className="text-2xl pt-12">After the funeral scene, we transition to a meal-serving scene where the food is depicted as human organs. Despite the implications of cannibalism and explicit gore, it&apos;s important to remember that the music video does not necessarily depict reality. As it was argued in Visual Culture, Chapter “Form”, <span className="italic"> "It is necessary, then, to give up trying to judge the art by its &apos;realism&apos;, but to see it instead as the expression of emotions.</span>" 
</h6>
            <h6 className="text-2xl py-6">In this scene, emotions are vividly portrayed through accent colors, particularly red. We see Hwasa, wearing an apron stained with blood, serving a meal consisting of body parts, subtly implying that the old Hwasa is figuratively &apos;consumed&apos; by her guests. The red symbolism mainly represents hunger, reflecting the guests&apos; expectations for Hwasa to satisfy them and earn their approval.
</h6>
            <h6 className="text-2xl pb-12">In the next shot, all the guests have their heads covered by red bags, this signifies <span className="font-bold">the power and dominance</span> that Hwasa gains over them.</h6>

            <Image src={dance1} alt="" />
            <h6 className="text-2xl py-12">Then comes the dance scene, and well this is not what you usually expect to see. In most K-pop songs, dancing scenes are characterized by a riot of vibrant colors, serving to help the dancers to stand out. As  it was stated in chapter “Iconography” of “Visual Culture”, <span className="italic">we should always be aware of what is not shown in the visual text as well as what is simply shown</span>. In this case, it&apos;s the absence of vibrant colors that catches our attention. Both Hwasa and the other dancers are in identical outfits—nude tops and gray trousers, that blend seamlessly with the background. The choice of outfit is not spontaneous. <span className="italic">“Our choice of clothes says something not only who we are, but also of how we would like to be seen” </span>(Visual Culture, Chapter “Semiotics”). We see Hwasa as ‘unnoticed’, in her early career stage when she was not yet a prominent figure, still impressionable and akin to a &apos;blank&apos; canvas. </h6>

            <Image src={crown} alt="" />
            <h6 className="text-2xl py-12">The scene that also worth mentioning is when Hwasa finds the the crown made of thorns. This imagery draws from biblical references, where the crown of thorns symbolizes painful burdens, guilt, and anxiety — emotions she struggled with before she was metaphorically "crucified." It&apos;s crucial to note that this scene shouldn&apos;t necessarily be interpreted as her downfall, but rather as a sign of her triumph. Here the crown is <span className="font-bold">‘signifier’</span>, something that stands for something else, and the idea it stands for is - her ability to overcome her struggles, ultimately reborning as a new, stronger person.</h6>

            <Image src={dance2} alt="" />

            <h6 className="text-2xl py-12">The crucial moment we&apos;ve all been anticipating arrives: the final dance scene. Here, we witness a transformed Hwasa. Her hair is now shiny red, she dances in a vibrant red outfit, standing out among the other dancers. Once again, red hues dominate the scene, but instead of representing violence and anger, they now convey <span className="font-bold">courage, drive, energy, and determination</span>. This portrayal signifies the emergence of the new Hwasa — the Maria — the embodiment of her true self, strengthened and empowered as a woman.

</h6>
            <Image src={final} alt="" />
            <h6 className="text-2xl pt-12">As we reach the end, let&apos;s dive into the last bathtub scene — the same pool where old Hwasa was discovered "dead." We find Hwasa seated at the corner of the bathtub, gazing at her own reflection. As Fry pointed out, <span className="italic">the composition should give us a good sense of ‘unity’, using various color and textures</span> (Visual Culture, Chapter 2). Here, for example, the cool tones of the room helps to put focus to the center of the image - the vibrant red of the water and her reflection. As we have seen, red symbolizes Hwasa&apos;s new strong and determined nature - contemplation of her new self. Throughout the music video, water is recurrently used, and in literary symbolism, it often signifies birth or baptism, a theme echoed many times.</h6>
            <h6 className="text-2xl py-6">Furthermore, the unique shape of the bathtub—a triangle—is also worth mentioning. Triangles are commonly associated with stability and power, symbolizing a solid foundation for the Hwasa&apos;s improvement.
</h6>
<h2 className="text-black text-3xl font-bold text-center pt-12 pb-10">Reference List</h2>
<h6 className="text-2xl py-3">1. Howells, Richard, and Joaquim Negreiros. Visual Culture. 2nd ed. Cambridge, UK: Polity, 2012.</h6>
<h6 className="text-2xl py-3">2. Ball, Cheryl E., et al. Writer/Designer: A Guide to Making Multimodal Projects. Bedford/St. Martins, 2014., Chapter 2</h6>

          </div>
          <h6 className="text-xl pt-24 text-gray-500">thanks for reading, hope you enjoyed it!!! it took longer than i expected... ...at least it was fun...</h6>
        </div>
        </div>
    </div>
  )
}
