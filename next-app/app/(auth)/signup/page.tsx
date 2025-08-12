"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const complete = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <section className="container pt-28 pb-16 max-w-lg">
      <h1 className="font-playfair text-3xl mb-2">Create your account</h1>
      <p className="text-muted-foreground mb-6">Join the romantic community of Nawa Napam.</p>

      <div className="w-full bg-muted rounded-full h-2 mb-6">
        <div className="h-2 rounded-full bg-accent" style={{ width: `${(step/3)*100}%` }} />
      </div>

      <form onSubmit={complete} className="space-y-4">
        {step === 1 && (
          <>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input className="w-full rounded-md border px-3 py-2" type="email" required />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input className="w-full rounded-md border px-3 py-2" type="password" required />
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div>
              <label className="block text-sm mb-1">Display name</label>
              <input className="w-full rounded-md border px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm mb-1">Age</label>
              <input className="w-full rounded-md border px-3 py-2" type="number" min={18} required />
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div>
              <label className="block text-sm mb-1">Bio</label>
              <textarea className="w-full rounded-md border px-3 py-2" rows={3} />
            </div>
            <div>
              <label className="block text-sm mb-1">Interests</label>
              <input className="w-full rounded-md border px-3 py-2" placeholder="Music, Travel, ..." />
            </div>
          </>
        )}

        <div className="flex items-center justify-between pt-2">
          <button type="button" onClick={prev} disabled={step===1} className="btn btn-ghost">Back</button>
          {step < 3 ? (
            <button type="button" onClick={next} className="btn btn-romantic">Next</button>
          ) : (
            <button type="submit" className="btn btn-romantic">Finish</button>
          )}
        </div>
      </form>
    </section>
  );
}
