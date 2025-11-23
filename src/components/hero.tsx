"use client"

export function Hero() {
    const scrollToGuide = () => {
    const section = document.getElementById("guide")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-amber-50/30 to-background">
      <div className="max-w-7xl mx-auto text-center">

        <div className="space-y-6">
          <div className="space-y-2">

            <p className="text-orange-500 font-sans font-semibold text-sm tracking-widest uppercase">
            Discover the Art of Candle Making
            </p>

          <h1 className="font-serif text-5xl sm:text-7xl font-bold text-foreground leading-tight text-balance">
              The Complete Guide to Candlelight
            </h1>
          </div>


        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            Explore everything you need to know about candles—from the craft of making them to understanding their
            therapeutic benefits. Learn about premium materials, techniques, and how to choose the perfect candle.
       </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={scrollToGuide}
              className="px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition"
            >
              Read the Complete Guide
            </button>

            
          </div>
        </div>

        <div className="mt-16 relative w-full max-w-3xl mx-auto">
        <div className="aspect-video rounded-xl overflow-hidden bg-muted shadow-lg">


            <img
            src="/images/candlelight.jpg"
            alt="Candles"
            className="w-full h-full object-cover"
            />
        </div>
        </div>


      </div>
    </section>
  )
}
