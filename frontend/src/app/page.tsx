"use client";
import CarouselComp from "./components/carousel";
import HeaderAnnouncement from "./components/ui/headerAnnouncement";
import HeaderSeperator from "./components/ui/headerSeperator";
import Review from "./components/review";
import ButtonHelper from "./components/ui/button-helper";
import ProductDisplay from "./components/product-display";

export default function Home() {
  return (
    <>
      {/* Announcement */}
      <HeaderAnnouncement>20% off everything</HeaderAnnouncement>
      {/* Carousel */}
      <section className="rounded-b-[250px] bg-linear-to-b from-primary to-secondary border-black border">
        <CarouselComp withZoom={true}>
          <div className="border">
            <h3>1</h3>
          </div>
          <div className="border">
            <h3>2</h3>
          </div>
          <div className="border">
            <h3>3</h3>
          </div>
        </CarouselComp>
      </section>
      {/* best seller */}
      {/* new arrivals */}
      {/* on sale */}
      <section>
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl flex-grow">
          <div className="self-stretch flex justify-center items-center">
            <HeaderSeperator className="text-red-500 font-bold flex justify-center gap-2 items-center me-2">
              <svg
                width="56"
                height="60"
                viewBox="0 0 56 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.1791 6.36247L46.7549 16.3341L55.8224 20.9583L51.2499 30L55.8483 39.0416L46.7033 43.6658L45.1274 53.6375L35.0783 52.0616L27.9224 59.1916L20.7408 51.9583L10.7691 53.6116L9.16744 43.5625L0.151611 38.9641L4.74994 29.9225L0.177445 20.9583L9.24494 16.2825L10.8208 6.3883L20.8183 8.04164L27.9999 0.782471L35.1558 7.9383L45.1791 6.36247ZM21.5416 17.0833C20.5139 17.0833 19.5283 17.4916 18.8016 18.2183C18.0749 18.945 17.6666 19.9306 17.6666 20.9583C17.6666 21.986 18.0749 22.9716 18.8016 23.6983C19.5283 24.425 20.5139 24.8333 21.5416 24.8333C22.5693 24.8333 23.5549 24.425 24.2816 23.6983C25.0084 22.9716 25.4166 21.986 25.4166 20.9583C25.4166 19.9306 25.0084 18.945 24.2816 18.2183C23.5549 17.4916 22.5693 17.0833 21.5416 17.0833ZM34.4583 35.1666C33.4306 35.1666 32.4449 35.5749 31.7182 36.3016C30.9915 37.0283 30.5833 38.0139 30.5833 39.0416C30.5833 40.0694 30.9915 41.055 31.7182 41.7817C32.4449 42.5084 33.4306 42.9166 34.4583 42.9166C35.486 42.9166 36.4716 42.5084 37.1983 41.7817C37.925 41.055 38.3333 40.0694 38.3333 39.0416C38.3333 38.0139 37.925 37.0283 37.1983 36.3016C36.4716 35.5749 35.486 35.1666 34.4583 35.1666ZM18.7258 42.9166L40.9166 20.7258L37.2741 17.0833L15.0833 39.2741L18.7258 42.9166Z"
                  fill="#FF0000"
                />
              </svg>
              On sale
            </HeaderSeperator>
            <hr className="grow" />
            <ButtonHelper className="uppercase">See more</ButtonHelper>
          </div>
          <div className="self-stretch">
            <CarouselComp withZoom={false}>
              <ProductDisplay
                title="some"
                img=""
                genre="dress"
                stars="4.5"
                origPrice={5000}
                currentPrice={4500}
              ></ProductDisplay>
              <ProductDisplay
                title="some"
                img=""
                genre="dress"
                stars="4.5"
                origPrice={5000}
                currentPrice={4500}
              ></ProductDisplay>
              <ProductDisplay
                title="some"
                img=""
                genre="dress"
                stars="4.5"
                origPrice={5000}
                currentPrice={4500}
              ></ProductDisplay>
            </CarouselComp>
          </div>
        </div>
      </section>
      {/* customer review */}
      <section className="bg-linear-to-b from-primary to-secondary min-h-[360px] py-15 sm:max-h-[1000px] flex">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl flex-grow">
          <HeaderSeperator className="text-center mb-4 font-bold">
            Customer reviews
          </HeaderSeperator>
          <div className="flex justify-center lg:justify-between gap-3 flex-wrap md:self-stretch">
            {[...Array(3)].map((_, i) => (
              <Review
                key={i}
                stars={4}
                avatar=""
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor massa non neque gravida venenatis. Vestibulum bibendum, sem a ultricies maximus, felis nulla ultricies quam, eget molestie nisl velit at ipsum. Nunc tellus elit, cursus elementum lorem id, tempor venenatis sapien. Praesent justo justo, sollicitudin maximus molestie eu, scelerisque eu orci. Cras id arcu non sem tristique fringilla. Donec felis magna, sollicitudin et risus eget, luctus pretium massa. In gravida pulvinar pulvinar. Aliquam varius ornare urna, eget aliquam erat suscipit auctor. Duis aliquam odio facilisis nibh dapibus ultrices. Aenean non tortor erat. Ut eleifend nulla et lorem interdum, non posuere sem luctus. Quisque ac ornare turpis, id dictum ex."
              ></Review>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
