import React from "react";

const ProductName = ({ name }) => {
   return (
      <>
         <h3 className="font-poppins font-semibold text-base">{name}</h3>
         <span className="font-poppins font-medium text-sm text-search">
            Tablet | 100mg | 5 strips
         </span>
      </>
   );
};

export default ProductName;
