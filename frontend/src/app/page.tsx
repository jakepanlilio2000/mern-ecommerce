import Image from "next/image";
import Carousel from "./components/carousel";


const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <div className="">
      <main>
        {/* Announcement */}
        <h1>20% off everything</h1>
        {/* Carousel */}
        <section className="flex justify-center items-center rounded-b-[250px] bg-linear-to-b from-primary to-secondary border-black border">
          <Carousel slides={SLIDES}></Carousel>
        </section>
        {/* best seller */}
        {/* new arrivals */}
        {/* on sale */}
        {/* customer review */}
      </main>
    </div>
  );
}
