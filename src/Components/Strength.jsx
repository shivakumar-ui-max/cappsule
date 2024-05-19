import React, { useContext } from "react";
import { dataContext } from "../context/DataContext";

const Strength = ({ item }) => {
   const { cardIndex, selectedForms } = useContext(dataContext);

   const getFormName = () => {
      if (selectedForms !== "") {
         console.log(selectedForms[cardIndex]);
      }
   };

   getFormName();
   return (
      <>
         <div className="strength flex  justify-between  mt-3">
            <h4 className="">Strength:</h4>
            <ul className="ul-flex ">
               <li className="item item-shadow">100mg</li>
            </ul>
         </div>
      </>
   );
};

export default Strength;
