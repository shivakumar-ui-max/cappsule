import { useContext } from "react";
import Card from "../Components/Card.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import { dataContext } from "../context/DataContext.jsx";

const Home = () => {
   const { data } = useContext(dataContext);
   return (
      <>
         <div className="bg-bg max-w-4xl container mx-auto">
            <SearchBar />
            {/* {data.length !== 0 ? (
               <Card />
            ) : (
               <h2 className="text-center mt-72 text-bodyTxt font-poppins font-semibold">
                  “ Find medicines with amazing discount “
               </h2>
            )} */}
            <Card />
         </div>
      </>
   );
};

export default Home;
