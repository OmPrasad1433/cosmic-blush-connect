import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header className="relative pt-28 pb-24 bg-gradient-romantic">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair text-white drop-shadow">
            Welcome to <span className="text-cherry-blossom">Nawa Napam</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/90 text-lg">
            Discover meaningful connections and find your perfect match in a safe, vibrant community.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/signup" className="btn btn-romantic">Join Now</Link>
            <Link href="/login" className="btn btn-soft">Sign In</Link>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            { title: "Smart Matching", desc: "Filters for age, location, interests & more." },
            { title: "Video & Text Chat", desc: "Instant WebRTC-style video and messaging UI." },
            { title: "Gifts & Premium", desc: "Coins, gifts, tiers – all mocked for demo." },
          ].map((f) => (
            <article key={f.title} className="rounded-xl border p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-claret">{f.title}</h3>
              <p className="text-muted-foreground mt-2">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
