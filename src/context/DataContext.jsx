import React, { useState } from "react";

export const dataContext = React.createContext();
const DataContext = ({ children }) => {
   const [query, setQuery] = useState("");
   const [data, setData] = useState([]);
   const [selectedForms, setSelectedForms] = useState({});
   const [cardIndex, setCardIndex] = useState(0);

   const setSelectedForm = (id, form) => {
      setSelectedForms((prevState) => ({
         ...prevState,
         [id]: form,
      }));
   };

   return (
      <dataContext.Provider
         value={{
            query,
            setQuery,
            data,
            setData,
            selectedForms,
            setSelectedForm,
            cardIndex,
            setCardIndex,
         }}
      >
         {children}
      </dataContext.Provider>
   );
};

export default DataContext;
