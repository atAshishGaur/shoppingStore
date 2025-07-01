import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import React, { useState } from "react";
import axios from 'axios';

const Header=()=>{
          const [menuOpen, setMenuOpen] = useState(false);

            const handleFetch = async () => {
    try {
      const response = await axios.get('https://ecomm.dotvik.com/v2kart/service/categories/main');
      console.log('API Response:', response.data);
      // You can now use response.data to render categories
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
    return (
               <div>
           <div className="w-full flex items-center justify-between px-6 sm:px-8 py-4">
             <button
               className="lg:hidden space-y-1.5"
               onClick={() => setMenuOpen(!menuOpen)}
             >
               <div className="w-6 h-0.5 bg-black"></div>
               <div className="w-6 h-0.5 bg-black"></div>
             </button>
     
             <div className="hidden lg:flex justify-between w-full px-6 text-[#37173D] font-medium text-sm sm:text-base">
               <div className="flex gap-12 font-semibold">
                <div className="">
      <button
        onClick={handleFetch}
        className="cursor-pointer hover:text-[#B549FF]"
      >
       Men
      </button>
    </div>
                 <div className="cursor-pointer hover:text-[#B549FF]">WOMEN</div>
                 <div className="cursor-pointer hover:text-[#B549FF]">KIDS & INFANTS</div>
                   <div className="cursor-pointer hover:text-[#B549FF]">BEST SELLER</div>
                     <div className="cursor-pointer hover:text-[#B549FF]">DISCOUNT ZONE</div>
               </div>
     
            <div className="flex items-center gap-6">
       <div className="cursor-pointer hover:text-[#B549FF] flex items-center gap-2">
         <FaSearch />
         SEARCH
       </div>
         <div className="cursor-pointer hover:text-[#B549FF] flex items-center gap-2">
        <FaUser />
        LOGIN
       </div>
     
     
       <div className="cursor-pointer hover:text-[#B549FF] flex items-center gap-2">
          
         
         <FaHeart />
       </div>
     
       <div className="cursor-pointer hover:text-[#B549FF] flex items-center gap-2">
       
         <FaShoppingCart />
       </div>
     </div>
     
             </div>
           </div>
     
           {menuOpen && (
             <div className="lg:hidden px-6 text-[#37173D] font-medium text-sm sm:text-base space-y-4">
               <div className="cursor-pointer hover:text-[#B549FF]">MEN</div>
               <div className="cursor-pointer hover:text-[#B549FF]">WOMEN</div>
               <div className="cursor-pointer hover:text-[#B549FF]">KIDS AND INFANT</div>
               <div className="cursor-pointer hover:text-[#B549FF]">BEST SELLER</div>
               <div className="cursor-pointer hover:text-[#B549FF]">DISCOUNT ZONE</div>
               <div className="cursor-pointer hover:text-[#B549FF]">CART (0)</div>
             </div>
           )}
         </div>
    )
}
export default Header