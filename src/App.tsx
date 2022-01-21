import "./App.css";
import React , {FC} from "react";
import Person , {HairColor} from "./components/Person";
import { AppContext, contextValue } from "./context/appContext";


const App : FC = () => {

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
    <Person name = "Williams" age={18} email="williams@mail.com" hairColor= {HairColor.Blonde}/>
    </div>
    </AppContext.Provider>
  );
};

export default App;
