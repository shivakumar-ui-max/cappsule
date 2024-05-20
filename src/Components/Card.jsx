import React, { useContext } from "react";
import Form from "./Form";
import Strength from "./Strength";
import Packaging from "./Packaging";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";

import { dataContext } from "../context/DataContext";

const Card = () => {
   const { data } = useContext(dataContext);

   return (
      <>
         {data.length !== 0 &&
            data.map((item, cardId) => {
               return (
                  <div
                     className="card w-[1007px]  flex justify-between items-center p-5  my-4 rounded-card"
                     key={cardId}
                     id={cardId}
                  >
                     <div className="card-product-types ">
                        <Form item={item.available_forms} cardId={cardId} />
                        <Strength item={item} cardId={cardId} />
                        <Packaging />
                     </div>

                     <div className="card-product-name  text-center w-1/2">
                        <ProductName name={item.salt} />
                     </div>

                     <div className="card-product-price text-center w-1/4 ">
                        <ProductPrice />
                     </div>
                  </div>
               );
            })}
      </>
   );
};

export default Card;

{
   /* <div className="card-product-null">
               <p>No stores selling this product near you</p>
            </div> */
}
