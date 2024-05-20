import React, { useState } from "react";

export const dataContext = React.createContext();
const DataContext = ({ children }) => {
   const [query, setQuery] = useState("");
   const [data, setData] = useState([]);
   const [formSeclected, setFormSeclected] = useState({
      id: "",
      name: "",
   });
   const [selectedStrengh, setSelectedStrengh] = useState(false);

   return (
      <dataContext.Provider
         value={{
            query,
            setQuery,
            data,
            setData,
            formSeclected,
            setFormSeclected,
            selectedStrengh,
            setSelectedStrengh,
         }}
      >
         {children}
      </dataContext.Provider>
   );
};

export default DataContext;
