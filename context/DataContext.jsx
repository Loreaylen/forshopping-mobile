import React, {createContext, useState} from 'react';

export const AppContext = createContext();

const DataContext = ({children}) => {

  const [budget, setBudget] = useState(0),
        [name, setName] = useState("");

  const contextValue = {
    budget,
    name,
    setBudget,
    setName
  }

  return(
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )}

export default DataContext;
