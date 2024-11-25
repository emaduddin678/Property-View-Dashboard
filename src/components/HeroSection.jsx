import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSection = () => {
  return (
    <div className="hero h-screen min-h-[700px] relative bg-cover bg-center bg-no-repeat bg-prgreen">
      <div className="hero-slide absolute inset-0 bg-white  ">
        <Swiper
          spaceBetween={1}
          speed={1000}
          centeredSlides={true}
          grabCursor={false}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="img overlay w-full h-full z-20  flex items-end">
              <img
                className="w-full h-full "
                src="/hero_bg_3.jpg"
                alt="hero Image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img overlay w-full h-full z-20  flex items-end">
              <img
                className="w-full h-full "
                src="/hero_bg_2.jpg"
                alt="hero Image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img overlay w-full h-full z-20  flex items-end">
              {" "}
              <img
                className="w-full h-full "
                src="/hero_bg_1.jpg"
                alt="hero Image"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" h-screen min-h-[700px] w-full flex justify-center items-center relative z-30">
        <div className=" justify-content-center align-items-center">
          <div className=" text-center">
            <h1
              className="heading font-inter text-white text-4xl font-medium"
              data-aos="fade-up"
            >
              Easiest way to find your dream home
            </h1>

            <form className="max-w-md mx-auto mt-5">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50    "
                  placeholder="Search for your assets..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-prgreen hover:bg-prgreen2 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2  "
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
