import logo from "./logo.svg";
import "./index.css";
import { useState, createContext } from "react";
import Dictionary from "./component/Dictionary";
import Switch from "@mui/material/Switch";
import { BookOpenIcon } from "@heroicons/react/24/solid";

export const ThemeContext = createContext(null);
function App() {
  const [mode, setMode] = useState("dark");

  // const toggleMode = () => {
  //   setMode(mode === "light" ? "dark" : "light");
  // };

  const label = { inputProps: { "aria-label": "Size switch demo" } };
  return (
    <ThemeContext.Provider>
      <div>
        {/* <BookOpenIcon width={40} /> */}
        {/* <Switch {...label} defaultChecked onClick={toggleMode}>
          Dark mode
        </Switch> */}
        <Dictionary />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
