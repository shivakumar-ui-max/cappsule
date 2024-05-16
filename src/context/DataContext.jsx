import React, { useState } from "react";

export const dataContext = React.createContext();
const DataContext = ({ children }) => {
   const [query, setQuery] = useState("");
   const [data, setData] = useState([]);

   return (
      <dataContext.Provider value={{ query, setQuery, data, setData }}>
         {children}
      </dataContext.Provider>
   );
};

export default DataContext;
