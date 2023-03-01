import React from 'react';
import { useState } from 'react';
import { createContext, useContext } from 'react';

const Authcontext = createContext();
export function Authprov({ children }) {
  const { clienttoken, loginstatus, clientcompany } = JSON.parse(
    localStorage.getItem('data')
  ) || {
    clienttoken: null,
    loginstatus: false,
    clientcompany: null,
  };
  const [token, setToken] = useState(clienttoken);
  const [isuserloggedin, setIsuserloggedin] = useState(loginstatus);
  const [company, setCompany] = useState(clientcompany);
  console.log(company);
  return (
    <Authcontext.Provider
      value={{
        token,
        setToken,
        isuserloggedin,
        setIsuserloggedin,
        company,
        setCompany,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}
export const useAuth = () => useContext(Authcontext);
