import Image from "next/image";
import { FullPage } from "./components/FullPage";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero/>
      <FullPage />
    </main>
  );
}
