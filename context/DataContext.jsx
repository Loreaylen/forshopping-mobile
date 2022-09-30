import React, {createContext, useState} from 'react';

export const AppContext = createContext();

const DataContext = () => {

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
      
    </AppContext.Provider>
  )}

export default DataContext;
