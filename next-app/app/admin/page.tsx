import { demoUsers } from "@/lib/demoData";

export default function AdminPage() {
  const totalUsers = demoUsers.length;
  const premiumUsers = 1;
  const reports = 2;

  return (
    <section className="container pt-28 pb-16">
      <header className="mb-8">
        <h1 className="font-playfair text-3xl">Admin Dashboard</h1>
        <p className="text-muted-foreground">Overview, moderation and settings (demo).</p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-6"><div className="text-sm text-muted-foreground">Users</div><div className="text-3xl font-semibold">{totalUsers}</div></div>
        <div className="rounded-xl border p-6"><div className="text-sm text-muted-foreground">Premium</div><div className="text-3xl font-semibold">{premiumUsers}</div></div>
        <div className="rounded-xl border p-6"><div className="text-sm text-muted-foreground">Reports</div><div className="text-3xl font-semibold">{reports}</div></div>
      </div>

      <h2 className="font-semibold mt-10 mb-4">Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-3 pr-4">Name</th>
              <th className="py-3 pr-4">Age</th>
              <th className="py-3 pr-4">Location</th>
              <th className="py-3 pr-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {demoUsers.map((u) => (
              <tr key={u.id} className="border-b">
                <td className="py-3 pr-4">{u.name}</td>
                <td className="py-3 pr-4">{u.age}</td>
                <td className="py-3 pr-4">{u.location}</td>
                <td className="py-3 pr-4">
                  <button className="btn btn-ghost mr-2">Warn</button>
                  <button className="btn btn-soft">Ban</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
