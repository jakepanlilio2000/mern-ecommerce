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
      <section>
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl flex-grow">
          <div>
            <HeaderSeperator className="text-red mb-4 font-bold">On sale</HeaderSeperator>
            
          </div>
        </div>
      </section>
      {/* customer review */}
      <section className="bg-linear-to-b from-primary to-secondary min-h-[360px] py-15 sm:max-h-[1000px] flex">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl flex-grow">
          <HeaderSeperator className="text-center mb-4 font-bold">Customer reviews</HeaderSeperator>
          <div className="flex justify-center gap-10 flex-wrap">
            {[...Array(3)].map((_, i) => (
              <Review key={i} stars={4} avatar="" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor massa non neque gravida venenatis. Vestibulum bibendum, sem a ultricies maximus, felis nulla ultricies quam, eget molestie nisl velit at ipsum. Nunc tellus elit, cursus elementum lorem id, tempor venenatis sapien. Praesent justo justo, sollicitudin maximus molestie eu, scelerisque eu orci. Cras id arcu non sem tristique fringilla. Donec felis magna, sollicitudin et risus eget, luctus pretium massa. In gravida pulvinar pulvinar. Aliquam varius ornare urna, eget aliquam erat suscipit auctor. Duis aliquam odio facilisis nibh dapibus ultrices. Aenean non tortor erat. Ut eleifend nulla et lorem interdum, non posuere sem luctus. Quisque ac ornare turpis, id dictum ex."></Review>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
