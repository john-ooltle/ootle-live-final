export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-white text-black max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold mb-12 text-center">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Growth Strategy</h2>
          <p>
            Custom go-to-market and brand positioning plans for startups ready to scale.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Demand Generation</h2>
          <p>
            We build inbound machines with SEO, paid media, and high-converting content.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Funnel Optimisation</h2>
          <p>
            We identify bottlenecks and opportunities in your growth funnel — from lead to sale.
          </p>
        </div>
      </div>
    </main>
  );
}
