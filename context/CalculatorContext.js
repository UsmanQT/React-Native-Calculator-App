import { createContext, useState } from 'react';

export const CalculatorContext = createContext({
  history: [],
  settings: {},
  saveHistoryItems: (items) => {},
  saveSettings: (settings) => {},
});

const CalculatorContextProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [settings, setSettings] = useState({
    bearingUnits: 'Degrees',
    distanceUnits: 'Kilometers',
  });

  const saveHistoryItems = (items) => {
    setHistory(items);
  };

  const saveSettings = (settings) => {
    setSettings(settings);
  };

  const value = {
    history: history,
    settings: settings,
    saveHistoryItems: saveHistoryItems,
    saveSettings: saveSettings,
  };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContextProvider;
