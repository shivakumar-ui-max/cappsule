import React from "react";
import Home from "./Pages/Home";
import DataContext from "./context/DataContext";

const App = () => {
   return (
      <DataContext>
         <Home />
      </DataContext>
   );
};

export default App;
