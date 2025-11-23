"use client"

const materials = [
  {
    name: "Soy Wax",
    description:
      "Made from soybean oil, soy wax is a renewable and eco-friendly option. It burns slower than paraffin, lasting up to 50% longer, and produces minimal soot. Soy wax holds fragrance well and allows for excellent color payoff. It's biodegradable and supports sustainable agriculture. Perfect for environmentally conscious candle makers seeking premium results.",
    image: "/images/soy-wax.jpg",
  },
  {
    name: "Paraffin Wax",
    description:
      "A petroleum byproduct, paraffin wax is affordable and versatile. It holds color and fragrance exceptionally well, making it ideal for vibrant, scented candles. Paraffin has a lower melting point, making it easier to work with for beginners. It's heat-resistant and provides excellent scent throw. The most commonly used wax in the candle industry due to cost-effectiveness.",
    image: "/images/paraffin-wax.jpg",
  },
  {
    name: "Beeswax",
    description:
      "A natural wax produced by honeybees, beeswax is premium and long-lasting. It burns brighter and cleaner than other waxes, naturally purifying air by releasing negative ions. Beeswax has a naturally sweet honey scent and creates elegant, naturally colored candles. Though more expensive, it's prized by luxury candle makers for its superior quality and health benefits.",
    image: "/images/beeswax.jpg",
  },
  {
    name: "Fragrance Oils",
    description:
      "Fragrance oils are synthetic aromatic compounds designed specifically for candles. They offer superior scent throw compared to essential oils, meaning the aroma travels farther. Available in countless scent profiles—from floral and fruity to woody and spiced. They're stable, consistent, and highly concentrated. Essential for creating custom blends and achieving the exact scent profile you desire.",
    image: "/images/fragrance-oil-material.jpg",
  },
  {
    name: "Wicks",
    description:
      "Wicks are twisted or braided fibers that draw wax up to the flame. Cotton wicks are natural and eco-friendly, burning cleanly with minimal residue. Wooden wicks create a crackling ambiance and burn slower. Paper-core wicks offer stability and consistent burn. Wick size must match container diameter—too thin causes tunneling, too thick creates excess smoke. Proper wick selection is crucial for optimal candle performance.",
    image: "/images/wicks.jpg",
  },
  {
    name: "Dyes & Colorants",
    description:
      "Candle dyes add visual appeal and come in various forms—liquid, powder, and blocks. Wax dyes are oil-based and blend seamlessly into melted wax without affecting burn quality. High-quality dyes provide vibrant colors that don't fade or discolor. A little dye goes a long way; over-dyeing can clog wicks. Mica and oxide powders offer metallic and natural earth tones for sophisticated designs.",
    image: "/images/dyes.jpg",
  },
  {
    name: "Containers",
    description:
      "The right container affects both candle performance and aesthetics. Glass containers must be heat-resistant and thick enough to withstand high temperatures. Ceramic and tin containers offer durability and elegant presentation. Container size and shape determine wick size and burn time. The interior surface color influences aesthetic appeal and light reflection. Quality containers enhance the premium feel of your finished candles.",
    image: "/images/containers.jpg",
  },
  {
    name: "Essential Oils",
    description:
      "Extracted from plants, essential oils provide pure aromatherapy benefits without synthetic chemicals. Lavender, chamomile, and eucalyptus offer calming properties; citrus oils energize and uplift. Essential oils are highly concentrated and have lower flash points than fragrance oils. They work best blended with carrier-grade fragrance oils for optimal scent throw in candles. Perfect for wellness-focused, natural candle formulations.",
    image: "/images/essential-oil.jpg",
  },
]

export function Materials() {
  return (
    <section id="materials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-2">
            Essential Components
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
            Candle Material Knowledge Hub
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover the essential materials used in candle making, their purposes, and how to choose the best options
            for your craft
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material, idx) => (
            <div
              key={idx}
              className="group overflow-hidden bg-background rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="relative h-40 overflow-hidden bg-muted">
                <img
                  src={material.image || "/placeholder.svg"}
                  alt={material.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 block"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-serif text-base font-bold text-foreground mb-2 group-hover:text-primary transition">
                  {material.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{material.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
