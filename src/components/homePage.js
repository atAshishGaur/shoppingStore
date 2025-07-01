import React, { useState } from "react";
import img7 from "../assests/image7.jpg";
import image8 from "../assests/image8.png";
import image9 from "../assests/image9.png";
import image10 from "../assests/image10.jpg";
import image12 from "../assests/image12.jpg";
import image13 from "../assests/image13.jpg";
import image15 from "../assests/image15.webp";
import image16 from "../assests/image16.webp";
import image17 from "../assests/image17.webp";
import image18 from "../assests/image18.webp";
import image19 from "../assests/image19.webp";

import Header from "./header";
import Footer from "./footer";

const HomePage = () => {
  return (
    <div>
      <div className="font-montserrat">
        <Header />
        <div className="mt-[20px]">
          <img src={img7} alt="img2" className="w-full" />
        </div>

        <div className="ml-[30px]">
          <div className="mt-[20px] px-4 py-8">
            <div class="text-gray-500">ALL TIME FAVOURITES</div>

            <h2 class="mt-[20px] text-3xl font-semibold mb-2">
              TOP PICK LISTING
            </h2>

            <div class="mt-[20px] text-gray-500">
              We've sorted through our feed to put together a collection of our
              products perfect for a summer outdoors.
            </div>
          </div>

          <div className="flex space-x-28 mt-[40px] ml-[20px]">
            <div className="bg-gray-400 text-white p-4 w-[200px] text-center rounded">
              <img src={image8} alt="T-Shirt" className="w-full h-auto mb-3" />
              <div className="text-lg mt-[70px] font-medium mb-2 text-black">
                Men T-Shirt
              </div>
              <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 transition">
                Shop Now
              </button>
            </div>

            <div className="bg-gray-400 text-white p-4 w-[200px] text-center rounded">
              <img src={image9} alt="T-Shirt" className="w-full h-auto mb-3" />
              <div className="text-lg text-black font-medium mb-2">
                Men T-Shirt
              </div>
              <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 transition">
                Shop Now
              </button>
            </div>

            <div className="bg-gray-400 text-white p-4 w-[200px] text-center rounded">
              <img src={image10} alt="T-Shirt" className="w-full h-auto mb-3" />
              <div className="mt-[60px] text-lg font-medium mb-2 text-black">
                Men T-Shirt
              </div>
              <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center mt-10">
          <div className=" text-[40px] font-medium mb-2">OFFER CORNER</div>
          <div className="flex justify-center space-x-6 mt-8">
            <div className="group w-32 h-32 rounded-full bg-black text-white flex items-center justify-center text-center text-sm font-semibold cursor-pointer transition duration-300 hover:shadow-[0_0_25px_10px_rgba(255,255,0,0.7)]">
              New Arrival
              <br />
              Women
            </div>

            <div className="group w-32 h-32 rounded-full bg-black text-white flex items-center justify-center text-center text-sm font-semibold cursor-pointer transition duration-300 hover:shadow-[0_0_25px_10px_rgba(255,255,0,0.7)]">
              Discount
              <br />
              Zone
            </div>

            <div className="group w-32 h-32 rounded-full bg-black text-white flex items-center justify-center text-center text-sm font-semibold cursor-pointer transition duration-300 hover:shadow-[0_0_25px_10px_rgba(255,255,0,0.7)]">
              New Arrival
              <br />
              Men
            </div>
          </div>
        </div>
        <div className=" items-center text-center text-[30px] font-medium mt-[40px]">
          FOR HER
        </div>
        <div className="w-1/2 h-[2px] bg-yellow-300 mx-auto mt-2 rounded-full"></div>

 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
  {[
    image12, image13, image12, image13,
    image12, image13, image12, image13,
    image12, image13, image12, image13
  ].map((img, index) => (
    <div key={index} className="flex flex-col items-center">
      <img
        src={img}
        alt={img === image12 ? "Sandoos" : "Shirts"}
        className="w-40 h-40 rounded-full object-cover"
      />
      <div className="mt-3 text-base font-medium text-gray-800">
        {img === image12 ? "Sandoos" : "Shirts"}
      </div>
    </div>
  ))}
</div>



        <div className=" items-center text-center text-[30px] font-medium mt-[40px]">
          FOR HIM
        </div>
        <div className="w-1/2 h-[2px] bg-yellow-300 mx-auto mt-2 rounded-full"></div>
        <div className="grid grid-cols-4 gap-2 p-2">
          {[
            image15,
            image16,
            image15,
            image16,
            image15,
            image16,
            image15,
            image16,
            image15,
            image16,
            image15,
            image16,
          ].map((img, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={img}
                alt={img === image15 ? "SHIRTS" : "T-SHIRTS"}
                className="w-40 h-40 rounded-full object-cover"
              />
              <div className="mt-1 text-sm font-medium">
                {img === image15 ? "SHIRTS" : "T-SHIRTS"}
              </div>
            </div>
          ))}
        </div>
        <div className=" items-center text-center text-[30px] font-medium mt-[40px]">
          V2 CART SPOTLIGHT
        </div>
        <div className="w-1/2 h-[2px] bg-red-600 mx-auto mt-2 rounded-full"></div>
        <div>
          <div className="mt-[20px]">
            <img src={image17} alt="img17" className="w-full" />
          </div>
          <div className=" items-center text-center text-[30px] font-medium mt-[40px]">
            IN THE SPOTLIGHT
          </div>
          <div className="mt-[20px]">
            <img src={image18} alt="img18" className="w-full" />
          </div>
          <div className="mt-[20px]">
            <img src={image19} alt="img19" className="w-full" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
