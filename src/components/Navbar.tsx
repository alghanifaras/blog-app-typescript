import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-blue-600"
        >
          Duo<span className="text-slate-900">Blog</span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/posts" className="hover:text-blue-600 transition">
            Blog
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};
