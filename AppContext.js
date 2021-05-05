import React from "react";

const AppContext = React.createContext();

export const AppContextProvider = (props) => {
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState({});
  const [factor, setFactor] = React.useState([
    {
      name: "Financial",
      value: 0,
    },
    {
        name: "Environmental",
        value: 0,
      },
      {
        name: "Social",
        value: 0,
      }, 
       {
        name: "Physical",
        value: 0,
      },
      {
        name: "Intellectual",
        value: 0,
      },
      {
        name: "Emotional",
        value: 0,
      },
      {
        name: "Spiritual",
        value: 0,
      },
      {
        name: "Occupational",
        value: 0,
      },
  ]);

  const context = {
    token,
    setToken,
    user,
    setUser,
    factor,
    setFactor,
  };
  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};
export default AppContext;
