export default function Footer() {
  return (
    <footer className="border-t py-10 mt-16">
      <div className="container grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="font-playfair text-lg">Nawa Napam</h4>
          <p className="text-muted-foreground mt-2">A romantic space to meet, match and chat.</p>
        </div>
        <nav>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Safety</a></li>
            <li><a href="#" className="hover:text-foreground">Premium</a></li>
            <li><a href="#" className="hover:text-foreground">Support</a></li>
          </ul>
        </nav>
        <div className="text-muted-foreground">
          © {new Date().getFullYear()} Nawa Napam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
