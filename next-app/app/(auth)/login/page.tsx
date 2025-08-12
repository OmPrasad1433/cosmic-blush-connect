"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <section className="container pt-28 pb-16 max-w-md">
      <h1 className="font-playfair text-3xl mb-6">Sign in to Nawa Napam</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input className="w-full rounded-md border px-3 py-2" type="email" required placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input className="w-full rounded-md border px-3 py-2" type="password" required placeholder="••••••••" />
        </div>
        <button className="btn btn-romantic w-full" type="submit">Sign In</button>
        <p className="text-sm text-muted-foreground">No account? <a className="underline" href="/signup">Create one</a></p>
      </form>
    </section>
  );
}
