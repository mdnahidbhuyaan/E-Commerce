import React from "react";
import featureImage from "@/assets/six.jpg";
import { Button } from "@/components/ui/button";
const FeatureCollection = () => {
  return (
    <section className="py-16 bg-white ">
      <div className="container mx-auto px-4">

      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2 items-center ml-4  itmes-center justify-center ">
        <div>
          <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
            Feature Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Summer Essentials
          </h2>
          <p className="text-gray-600 mb-6">
            Discover your dolor sit, amet consectetur adipisicing elit. Aperiam
            sapiente laudantium, qui fugiat eveniet illo, veritatis, corrupti
            consequuntur autem eaque adipisci cupiditate quae possimus eius?
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Premium Quality",
              "Free Shipping",
              "Secure Payment",
              "Customer Support",
            ].map((featuer, idx) => (
              <li key={idx} className="flex items-center">
                <span>{featuer}</span>
              </li>
            ))}
          </ul>
          <Button className="!rounded-button whitespace-nowrap bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-700 px-8 py-6 text-lg mt-5 ">
            Shop Collections
          </Button>
        </div>
        <div className="relative">
          <img
            src={featureImage.src}
            alt="Summer Collection"
            className="mt-5  rounded-lg shadow-xl"
            />
          <div className="absolute -bottom-6 -left-6 rounded-lg bg-white shadow-lg p-4 max-w-xs">
            <div className="flex items-center  gap-4 mb-2">
              <div className="bg-indigo-100 rounded-full p-2">

              </div>
              <h4 className="font-bold">Free Shipping</h4>
            </div>
            <p className="text-gray-600 text-sm ">
 On all orders over$100 International Shipping Available 
            </p>
          </div>
        </div>
      </div>
            </div>
    </section>
  );
};

export default FeatureCollection;
