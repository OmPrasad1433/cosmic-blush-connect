"use client";

import { useParams, useRouter } from "next/navigation";
import { demoUsers } from "@/lib/demoData";
import { useMemo, useState } from "react";

export default function VideoCallPage() {
  const params = useParams();
  const router = useRouter();
  const userId = Array.isArray(params?.userId) ? params.userId[0] : (params?.userId as string);
  const user = useMemo(() => demoUsers.find((u) => u.id === userId), [userId]);
  const [connected, setConnected] = useState(false);

  return (
    <section className="container pt-28 pb-16">
      <button className="btn btn-ghost mb-4" onClick={() => router.back()}>&larr; Back</button>
      <h1 className="font-playfair text-2xl mb-4">Video Call with {user?.name ?? "Guest"}</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="aspect-video rounded-xl border bg-muted grid place-items-center text-muted-foreground">
          {connected ? "You" : "Camera Off (Demo)"}
        </div>
        <div className="aspect-video rounded-xl border bg-muted grid place-items-center text-muted-foreground">
          {connected ? (user?.name ?? "Partner") : "Connecting..."}
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="btn btn-romantic" onClick={() => setConnected(true)}>Connect (Mock)</button>
        <button className="btn btn-soft" onClick={() => setConnected(false)}>Hang Up</button>
      </div>
    </section>
  );
}
