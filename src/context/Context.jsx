import React, { createContext, useContext, useState} from "react";


const IconContext = createContext();

export function useIconContext() {
  return useContext(IconContext);
}

export function IconProvider({ children }) {
  const [example1, setExample1] = useState([]);
  const [example2, setExample2] = useState([]);
  const [example3, setExample3] = useState([]);






  const contextValue = {
    
   example1,
   example2,
   example3,
  


  };

  return (
    <IconContext.Provider value={contextValue}>{children}</IconContext.Provider>
  );
}
