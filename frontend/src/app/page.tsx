import Image from "next/image";
import Carousel from "./components/carousel";
import HeaderAnnouncement from "./components/ui/headerAnnouncement";
import HeaderSeperator from "./components/ui/headerSeperator";
import Review from "./components/review";

export default function Home() {
  return (
    <>
      {/* Announcement */}
      <HeaderAnnouncement>20% off everything</HeaderAnnouncement>
      {/* Carousel */}
      <section className="rounded-b-[250px] bg-linear-to-b from-primary to-secondary border-black border">
        {/* <Carousel></Carousel> error here gives extra space fix */}
      </section>
      {/* best seller */}
      {/* new arrivals */}
      {/* on sale */}
      {/* customer review */}
      <section className=" bg-linear-to-b from-primary to-secondary">
        <HeaderSeperator>Customer reviews</HeaderSeperator>
        <div className="flex">
          {
            [...Array(3)].map((_, i) => (
              <Review stars={4} avatar="" review="its okay"></Review>
            ))
          }
        </div>
      </section>
    </>
  );
}
