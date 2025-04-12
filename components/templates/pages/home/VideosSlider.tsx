"use client";

import Image from "next/image";

import { sliderPagination, videosSliderList } from "@/constants";

import "./videoSlider.style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    EffectCoverflow,
    Pagination,
    Navigation,
    Autoplay,
} from "swiper/modules";

import VideoCard from "@/components/shared/VideoCard";

const VideosSlider = () => {
    return (
        <section className="my-20 max-w-[1700px] mx-auto swiper-container-wrapper">
            <Swiper
                effect={"coverflow"}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
                initialSlide={4}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                pagination={sliderPagination}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 400,
                    modifier: 1,
                    slideShadows: false,
                }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
            >
                {videosSliderList.map((item) => (
                    <SwiperSlide key={item.image} className="py-15">
                        <VideoCard {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-prev">
                <Image
                    src="/assets/icons/angle-left.png"
                    alt="angle-left"
                    width={21}
                    height={21}
                    className="w-[10px]"
                />
            </div>
            <div className="custom-next">
                <Image
                    src="/assets/icons/angle-right.png"
                    alt="angle-right"
                    width={21}
                    height={21}
                    className="w-[10px]"
                />
            </div>
        </section>
    );
};

export default VideosSlider;
