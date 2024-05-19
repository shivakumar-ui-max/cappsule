import React, { useContext, useEffect } from "react";
import { dataContext } from "../context/DataContext";

const Form = ({ item, i }) => {
   const { selectedForms, setSelectedForm, setCardIndex } =
      useContext(dataContext);
   const handleFormClick = (form) => {
      Object.keys(selectedForms).forEach((key) => {
         if (selectedForms[key] !== form) {
            setSelectedForm(key, null);
         }
      });
      setSelectedForm(i, form);
      setCardIndex(i);
   };

   return (
      <div className="form flex justify-between">
         <h4>Form:</h4>
         <ul className="ul-flex">
            {item.map((form, j) => (
               <li
                  key={j}
                  id={j}
                  onClick={() => handleFormClick(form)}
                  className={
                     selectedForms[i] === form
                        ? "border-2 border-solid border-medicine item item-shadow"
                        : "border-2 border-solid border-bodyTxt item"
                  }
               >
                  {form}
               </li>
            ))}
         </ul>

         {item.length > 3 && (
            <span className="self-end font-poppins font-bold text-search">
               more..
            </span>
         )}
      </div>
   );
};

export default Form;
