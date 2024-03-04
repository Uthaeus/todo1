import { useState } from "react";

import SimpleList from "./components/simple-list/simple-list";
import ExtendedList from "./components/extended-list/extended-list";

function App() {
  const [listType, setListType] = useState("extended");

  const handleListTypeChange = (type) => {
    setListType(type);
  };

  return (
    <div className="App">
      <div className="app-header">
        <h1 className="app-title">ToDo App</h1>

        <div className="app-header-actions">

        </div>
      </div>

      <div className="app-body">
        <div className="list-select-wrapper">
          <button onClick={() => handleListTypeChange("simple")} className="list-select-btn">Simple</button>
          <button onClick={() => handleListTypeChange("extended")} className="list-select-btn">Extended</button>
        </div>
        
        <div className="app-list-wrapper">
          {listType === "simple" && <SimpleList />}
          {listType === "extended" && <ExtendedList />}
        </div>
      </div>
    </div>
  );
}

export default App;
