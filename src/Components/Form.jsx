import React, { useContext } from "react";
import { dataContext } from "../context/DataContext";

const Form = ({ item, cardId }) => {
   const { formSeclected, setFormSeclected } = useContext(dataContext);
   const handleClick = (form, cardId) => {
      return () => {
         setFormSeclected({
            id: cardId,
            name: form,
         });
      };
   };

   return (
      <div className="form flex justify-between">
         <h4>Form:</h4>
         <ul className="ul-flex">
            {item.map((form, j) => {
               return (
                  <li
                     key={j}
                     id={j}
                     className={
                        cardId === formSeclected.id &&
                        form === formSeclected.name
                           ? "item item-shadow border-solid border border-medicine"
                           : "item border border-bodyTxt"
                     }
                     onClick={handleClick(form, cardId)}
                  >
                     {form}
                  </li>
               );
            })}
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
