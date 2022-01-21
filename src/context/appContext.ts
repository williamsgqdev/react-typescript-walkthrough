import { createContext } from "react";

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

export const AppContext = createContext<AppContextInterface | null>(null);
export const contextValue :AppContextInterface = {
  name : "williams" ,
  age : 18 ,
  country : "nigeria"
}