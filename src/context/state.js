import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, setState] = useState({
    timeFrame: 'today',
    filterInput: '',
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
}
