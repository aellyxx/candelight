"use client"

const discussionTopics = [
  {
    id: 1,
    title: "Understanding Wax Chemistry",
    description:
      "The foundation of candle making lies in understanding wax chemistry. Soy wax offers clean burning with excellent fragrance retention, beeswax naturally purifies air and produces superior light, paraffin wax provides superior scent throw and color vibrancy, and gel wax creates stunning visual effects. Each wax type has distinct melting points, viscosity, and performance characteristics that directly impact your final product. Professional candle makers carefully select their wax based on desired burn time, fragrance load capacity, and environmental considerations.",
    image: "/images/candle-wax-materials.jpg",
  },
  {
    id: 2,
    title: "The Art of Wick Selection and Burning",
    description:
      "Mastering wick selection is where art meets precision. The wick diameter, material, and braiding pattern determine burn rate, flame height, and fragrance release. A properly chosen wick creates the ideal melt pool, prevents tunneling, and ensures even burn. Understanding wick classifications and how they interact with different wax types is essential for creating candles that perform beautifully every time. The science behind flame temperature and oxygen flow transforms a simple wick into a precision instrument.",
    image: "/images/candle-making.jpg",
  },
  {
    id: 3,
    title: "Fragrance Science and Scent Throw",
    description:
      "Fragrance science is where candle making becomes truly technical. Fragrance oils contain volatile compounds that release at specific temperatures. Scent throw—both cold and hot—depends on flashpoint, pour temperature, and cooling rates. Learning how to calculate fragrance percentages, layer scents, and optimize release rates transforms you from a hobbyist into a true candle maker. The chemistry of aromatic molecules and their interaction with heat creates the perfect sensory experience in every burn.",
    image: "/images/fragrance-oil.jpg",
  },
]

export function ArtOfCandleMaking() {
  return (
    <section id="guide" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-brom-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-primary font-sans font-semibold text-sm tracking-widest uppercase mb-2">
            Deep Dive
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            The Art and Science of Candle Making
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the chemistry, craftsmanship, and precision techniques that transform simple materials into
            extraordinary candles
          </p>
        </div>

        <div className="space-y-16">
          {discussionTopics.map((topic, index) => (
            <div key={topic.id} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Alternate image position for visual rhythm */}
              {index % 2 === 0 ? (
                <>
                  <div className="flex-1 rounded-xl overflow-hidden shadow-lg h-80">
                    <img
                      src={topic.image || "/placeholder.svg"}
                      alt={topic.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="font-serif text-3xl font-bold text-orange-500">{topic.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{topic.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1 space-y-4">
                    <h3 className="font-serif text-3xl font-bold text-orange-500">{topic.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{topic.description}</p>
                  </div>
                  <div className="flex-1 rounded-xl overflow-hidden shadow-lg h-80">
                    <img
                      src={topic.image || "/placeholder.svg"}
                      alt={topic.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}