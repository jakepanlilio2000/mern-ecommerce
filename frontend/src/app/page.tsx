import Image from "next/image";
import Carousel from "./components/carousel";


export default function Home() {
  return (
    <div className="">
      <main>
        {/* Announcement */}
        <h1>20% off everything</h1>
        {/* Carousel */}
        <section className="rounded-b-[250px] bg-linear-to-b from-primary to-secondary border-black border">
          <Carousel></Carousel>
        </section>
        {/* best seller */}
        {/* new arrivals */}
        {/* on sale */}
        {/* customer review */}
      </main>
    </div>
  );
}
