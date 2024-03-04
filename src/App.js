import { useState } from "react";

import TabItem from "./components/tab-item";

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
          <p>Log In</p>
        </div>
      </div>

      <div className="app-body">
        <div className="list-select-wrapper">
          <TabItem title="Simple" active={listType === "simple"} onClick={() => handleListTypeChange("simple")} />
          <TabItem title="Extended" active={listType === "extended"} onClick={() => handleListTypeChange("extended")} />
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
