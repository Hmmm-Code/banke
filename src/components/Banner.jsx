import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Banner = () => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = [
      {
        src: "https://www.banke.ae/wp-content/uploads/2022/06/1647964365-20220322-154755-plain.jpg",
      },
      {
        src: "https://www.banke.ae/wp-content/uploads/2022/03/1647422826-bi-s-20-1842-6-plain.jpg",
      },
      {
        src: "https://www.banke.ae/wp-content/uploads/2021/09/1632311299-bi-s-20-0280-7-plain.jpg",
      },
      {
        src: "https://www.banke.ae/wp-content/uploads/2022/02/1623909830-bi-s-20-0578-5-plain.jpg",
      },
    ];
    if (images != null) {
      setImages(images);
      setLoading(false);
    } else {
      setImages({});
    }
    console.log(images);
  }, []);

  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    pauseOnHover: true,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="relative mt-10 mb-0">
        <div className="flex flex-wrap mr-auto ml-auto max-w-full lg:max-w-screen-lg xl:max-w-screen-2xl">
          <div className="flex  w-full">
            <div className="flex p-2.5 flex-wrap  w-full content-start">
              <div className="mb-3 w-full text-center">
                <div className="mt-10 m-0">
                  <div className="mb-12">
                    <h2 className="font-sans font-bold capitalize text-4xl text-[#4d4d4d] mx-0 my-2.5">
                      <span className="uppercase mr-3 text-[#FCB41C]">
                        featured
                      </span>
                      <span>Properties</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="mt-[-50px] m-0">
                  <div className="truncate ">
                    <div className="h-10 text-right w-full"></div>
                    <div className="m-0 ">
                      <div className=" visible opacity-100 select-none touch-pan-y">
                        <div className="translate m-0 p-0 truncate">
                          <div className="opacity-100 top-0 left-0">
                            {loading ? (
                              "loading"
                            ) : (
                              <Slider {...settings}>
                                {images.map((item) => (
                                  <div id="center" className="h-60 ">
                                    <img
                                      src={item.src}
                                      alt="slider"
                                      className="rounded-lg m-0 p-3 h-[17rem] w-full max-w-md"
                                    />
                                  </div>
                                ))}
                              </Slider>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
