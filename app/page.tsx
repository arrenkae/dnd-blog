import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <Link href="/blog">Blog</Link>
    </div>
  );
}