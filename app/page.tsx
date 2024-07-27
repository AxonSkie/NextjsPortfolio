import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-blue-background min-h-screen">
      <div>
        <Navbar />
      </div>
    </main>
  );
}
