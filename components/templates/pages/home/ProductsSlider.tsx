"use client";

import "swiper/css";
import "swiper/css/pagination";
import "./swiper.style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import ProductCard from "@/components/shared/ProductCard";

import { productsList, sliderPagination } from "@/constants";

const ProductsSlider = () => {
    return (
        <section className="container-base">
            <span className="text-primary xl:text-[30px] text-center block mb-2">
                محصولات
            </span>
            <p className="xl:font-bold font-semibold xl:text-[34px] text-[20px] text-center mb-8 xl:mb-14">
                جدیدترین محصولات
            </p>
            <div className="lg:relative">
                <div className="max-lg:hidden">
                    <div className="w-[250px] h-full bg-linear-90 from-[#060B25] to-[#060B2500] absolute left-0 z-10 pointer-events-none" />
                    <div className="w-[250px] h-full bg-linear-90 to-[#060B25] from-[#060B2500] absolute right-0 z-10 pointer-events-none" />
                </div>
                <Swiper
                    spaceBetween={50}
                    modules={[Autoplay, Pagination]}
                    pagination={sliderPagination}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1300: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {productsList.map(({ id, ...props }) => (
                        <SwiperSlide key={id} className="py-22 -mt-5">
                            <ProductCard {...props} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProductsSlider;
