import Link from "next/link";

// '@' means root
import Header from "@/components/header";

export default function Home() {
  console.log("Executing..");
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About us</Link>
      </p>
    </main>
  );
}

// localhost:3000/about
