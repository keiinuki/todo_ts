import { createContext } from "react";

export const UserInfoContext = createContext({});

export const UserInfoProvider = (props) => {
  const { children } = props;
  const userInfo =  { id:0, name:""};
  return (
    <UserInfoContext.Provider value={{ userInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};