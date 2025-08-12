import { demoUsers } from "@/lib/demoData";
import Link from "next/link";

export default function ProfilesPage() {
  return (
    <section className="container pt-28 pb-16">
      <h1 className="font-playfair text-3xl mb-6">Browse Profiles</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {demoUsers.map((u) => (
          <article key={u.id} className="rounded-xl border p-5">
            <img src={u.avatar} alt={`${u.name} profile photo`} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
            <div className="mt-3">
              <h3 className="font-semibold text-lg">{u.name} · {u.age}</h3>
              <p className="text-sm text-muted-foreground">{u.location}</p>
              <p className="mt-2 text-sm">{u.bio}</p>
              <div className="mt-4 flex gap-2">
                <Link href={`/video-call/${u.id}`} className="btn btn-romantic">Video Chat</Link>
                <button className="btn btn-soft">Like</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
