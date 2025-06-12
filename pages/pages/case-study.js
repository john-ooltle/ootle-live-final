export default function CaseStudyPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-white text-black max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-center">Fintech Case Study</h1>
      <p className="text-lg mb-8 text-center">
        See how we helped a Series A fintech scale inbound demo requests by 4x in just 90 days.
      </p>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Client Background</h2>
          <p>
            The client was a rapidly growing fintech startup preparing for Series B funding.
            They had product-market fit but struggled with consistent inbound lead flow.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Approach</h2>
          <p>
            We revamped their positioning, rebuilt their top-of-funnel SEO strategy,
            and launched a content-driven paid campaign focused on founder-led growth stories.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">The Results</h2>
          <ul className="list-disc pl-6">
            <li>4x increase in inbound demo requests</li>
            <li>Organic traffic up 212%</li>
            <li>Average CPL reduced by 35%</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
