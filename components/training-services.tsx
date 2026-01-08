import Image from "next/image"

export function TrainingServices() {
  return (
    <section id="training" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary uppercase tracking-wide">
            Training Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Comprehensive training designed to elevate every aspect of your game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Block 1 - Hitting (Large) */}
          <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl shadow-xl">
            <div className="relative h-[400px] lg:h-full min-h-[500px]">
              <Image
                src="/5.jpg"
                alt="Elite Hitting Training"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 font-sans">
                  Most Popular
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide">
                  Elite Hitting
                </h3>
                <p className="mt-3 text-white/90 font-sans text-lg max-w-md">
                  Master power, timing, footwork, and approach. Transform your swing into a weapon.
                </p>
              </div>
            </div>
          </div>

          {/* Block 2 - Pitching (Vertical) */}
          <div className="group relative overflow-hidden rounded-3xl shadow-xl">
            <div className="relative h-[300px]">
              <Image
                src="/4.jpg"
                alt="Dominant Pitching Training"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-wide">
                  Dominant Pitching
                </h3>
                <p className="mt-2 text-white/90 font-sans">Velocity, command, and arm care safety.</p>
              </div>
            </div>
          </div>

          {/* Block 3 - Fielding (Small) */}
          <div className="group relative overflow-hidden rounded-3xl shadow-xl">
            <div className="relative h-[300px]">
              <Image
                src="/1.jpg"
                alt="Outfield Defense Training"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-wide">Outfield Defense</h3>
                <p className="mt-2 text-white/90 font-sans">Reads, routes, and throwing accuracy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
