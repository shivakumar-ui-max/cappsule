import React, { useContext } from "react";
import search from "../assets/search.svg";
import { dataContext } from "../context/DataContext";
import axios from "axios";

const SearchBar = () => {
   const { query, setQuery, setData } = useContext(dataContext);

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (query !== "") {
         try {
            const response = await axios.get(
               `${import.meta.env.VITE_API_URL}${query}&pharmacyIds=1,2,3`
            );
            const dataResult = response.data.data.saltSuggestions;
            setData(dataResult);
         } catch (error) {
            console.log("Error fetching data", error);
         }
      }
   };

   const handleChange = (e) => {
      setQuery(e.target.value);
   };

   return (
      <>
         <div>
            <h1 className="text-center text-h1 my-9 font-poppins font-normal text-2xl">
               Cappsule web development test
            </h1>
            <form
               className="w-[1002px] flex items-center rounded-search box-shadow p-3"
               onSubmit={handleSubmit}
            >
               <figure className="px-3">
                  <img src={search} alt="search-icon" />
               </figure>
               <input
                  type="text"
                  placeholder="Type your medicine name here"
                  value={query}
                  onChange={handleChange}
                  className="w-full border-none outline-none font-poppins font-medium text-xs text-medicine placeholder:text-placeHolder"
               />

               <button
                  type="submit"
                  className="px-3 ml-auto text-search font-poppins font-semibold"
               >
                  Search
               </button>
            </form>
            <hr className="w-[1002px] mt-11 text-[#CDCDCD]" />
         </div>
      </>
   );
};

export default SearchBar;
