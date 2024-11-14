"use client";
import React from "react";
// import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Integration_4 = () => {
  return (
    <div className="container text-black mx-auto pt-[2rem] p-4">
      <h1 className="text-heading mt-[3rem]">Connect over 300+ integrations</h1>
      <p className="text-2xl m-[3rem] md:text-3xl">
        Ensure your companys data is completely secure and that you are in
        compliance with the latest standards
      </p>

      <div className="btn-black m-[2rem] w-fit">See all integration</div>

      {/*  */}
      <Carousel className="mt-[3rem]">
        <CarouselContent>
          <CarouselItem>
            1<div className="item"></div>
          </CarouselItem>
          <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Integration_4;
