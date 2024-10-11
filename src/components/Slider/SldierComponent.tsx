"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import WithArrow from "./WithArrow";
import { Swiper as SwiperType } from "swiper";
import Link from "next/link";
import Image from "next/image";

export default function SldierComponent() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-[1920px] px-5">
      <Swiper
        className="h-[474px]"
        modules={[A11y]}
        spaceBetween={40}
        slidesPerView={5}
        navigation={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
          1740: {
            slidesPerView: 5,
          },
        }}
      >
        {[
          ["/images/img1.png", "artur"],
          ["/images/img1.png", "artur"],
          ["/images/img1.png", "artur"],
          ["/images/img1.png", "artur"],
          ["/images/img1.png", "artur"],
          ["/images/img1.png", "artur"],
          ["/images/img1.png", "artur"],
          ["/images/img1.png", "artur"],
          ["/images/img1.png", "artur"],
          ["/images/img1.png", "artur"],
          ["/images/img1.png", "artur"],
          ["/images/img1.png", "artur"],
        ].map(([src, alt]) => (
          <SwiperSlide key={alt}>
            <Link href={"#"}>
              <Image
                className={"w-full object-cover"}
                src={src}
                fill
                alt={alt}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <WithArrow
        direction="prev"
        ariaLabel="prev"
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <WithArrow
        direction="next"
        ariaLabel="next"
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
}
