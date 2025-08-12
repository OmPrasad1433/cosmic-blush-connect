import Link from "next/link";
import { demoUsers } from "@/lib/demoData";

export default function DashboardPage() {
  return (
    <section className="container pt-28 pb-16">
      <header className="mb-8">
        <h1 className="font-playfair text-3xl">Welcome back 👋</h1>
        <p className="text-muted-foreground">Discover profiles and start a chat.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {demoUsers.map((u) => (
          <article key={u.id} className="rounded-xl border p-5">
            <img src={u.avatar} alt={`${u.name} profile photo`} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
            <div className="mt-3">
              <h3 className="font-semibold text-lg">{u.name} · {u.age}</h3>
              <p className="text-sm text-muted-foreground">{u.location}</p>
              <p className="mt-2 text-sm">{u.bio}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {u.interests.map((i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-cherry-blossom text-claret">{i}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <Link href={`/video-call/${u.id}`} className="btn btn-romantic">Video Chat</Link>
                <Link href={`/profiles`} className="btn btn-soft">View Profile</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
