export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-white text-black max-w-2xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
      <p className="mb-10 text-lg">
        We'd love to hear from you. Fill in your details and we'll get back to you soon.
      </p>
      <form className="space-y-6 text-left">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input type="text" id="name" className="w-full border p-3 rounded" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input type="email" id="email" className="w-full border p-3 rounded" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea id="message" rows={5} className="w-full border p-3 rounded" />
        </div>
        <button type="submit" className="bg-black text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </main>
  );
}
