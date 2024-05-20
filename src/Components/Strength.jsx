import React, { useContext, useState } from "react";
import { dataContext } from "../context/DataContext";

const Strength = ({ item, cardId }) => {
   const { selectedStrengh, setSelectedStrengh, formSeclected } =
      useContext(dataContext);

   let strengthData;
   if (formSeclected && item.salt_forms_json) {
      strengthData = item.salt_forms_json[formSeclected.name];
   }
   return (
      <>
         <div className="strength flex  justify-between  mt-3">
            <h4 className="">Strength:</h4>
            <ul className="ul-flex ">
               {strengthData &&
                  Object.keys(strengthData).filter((strengthValue, id) => {
                     return (
                        formSeclected.id === cardId && (
                           <li key={id} onClick={handleClick}>
                              {strengthValue}
                           </li>
                        )
                     );
                  })}
            </ul>
         </div>
      </>
   );
};

export default Strength;
