"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// {image }
import image1 from "@/assets/one.png";
import image2 from "@/assets/two.png";
import image3 from "@/assets/fore.jpg";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const NewArrival = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center mb-12">
          <div className="">
            <h2 className="text-3xl font-bold mb-2">New Arrival</h2>
            <p className="text-gray-600">
              User friendly dolor sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
       
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          navigation
          className="pb-12"
        >
          {[
            {
              name: "laptop",
              category: "Electronics",
              price: "$99.99",
              image: image1,
            },
            {
              name: "Laptop",
              category: "Electronics",
              price: "$199.99",
              image: image2,
            },
            {
              name: "watch",
              category: "Electronics",
              price: "$79.99",
              image: image3,
            },
              {
              name: "Camera",
              category: "Electronics",
              price: "$79.99",
              image: image3,
            },
          ].map((porduct, index) => (
            <SwiperSlide key={index}>
              <Card className="h-full group overflow-hidden ">
                <div className="relative overflow-hidden pt-[100%]">
                  <img
                    src={porduct.image.src}
                    alt={porduct.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-indigo-500 text-white hover:bg-indigo-600">
                      New
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button className="!rounded-button whitespace-nowrap bg-white text-indigo-600 hover:bg-gray-100 cursor-pointer">
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm text-gray-500">
                        {porduct.category}
                      </p>
                      <h3 className="font-semibold text-lg">{porduct.name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <i className="fas fa-star text-yellow-400 mr-1 text-sm"></i>
                  </div>
                  <p className="text-lg font-bold text-indigo-600">
                   {porduct.price}
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewArrival;
