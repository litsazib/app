import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Head from "next/head";

const SingleVehicle = () => {
  const banner = [
    { id: "1", name: "banner1" },
    { id: "2", name: "banner2" },
    { id: "3", name: "banner3" },
  ];
  const productImage = [
    { id: "1", image: "v1" },
    { id: "2", image: "v2" },
    { id: "3", image: "v3" },
  ];

  //Bootstrap js
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>History</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        <div className="row">
          <div className="swiper">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {banner.map((rony) => {
                return (
                  <SwiperSlide key={rony.id}>
                    <Image
                      className="img-fluid"
                      src={`/product/${rony.name}.webp`}
                      alt="car"
                      width={1920}
                      height={0}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5">
          <div className="col-sm-6">
            <Carousel>
              {productImage.map((slide) => {
                return (
                  <div key={slide.id}>
                    <img src={`/discover/${slide.image}.png`} alt="Product" />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="col-sm-6">
            <div className="row mb-4">
              <div className="col-sm-3 col-6">
                <div className="row">
                  <button type="button" className="btn btn-outline-secondary">
                    Prodduct Brochure
                  </button>
                </div>
              </div>
              <div className="col-sm-3 col-6 ms-3">
                <div className="row">
                  <button type="button" className="btn btn-outline-secondary">
                    Sales Inquery
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Over View
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Technical Spacification
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, porro voluptatem minima libero cum, nobis illo sit
                  fugit ratione, mollitia explicabo? Impedit exercitationem quae
                  sequi, iste iusto blanditiis magnam repudiandae.
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SingleVehicle;
