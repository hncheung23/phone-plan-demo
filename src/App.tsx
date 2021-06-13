import React, { useState } from "react";
import JsonInput from "./components/jsonInput";
import PlanDisplay from "./components/planDisplay";
import "./App.css";

const App = () => {
  const [jsonData, setJsonData] = useState({
    plans: []
  });
  const getJson = (value: any) => {
    setJsonData(value);
  };

  return (
    <div className="root">
      {jsonData.plans.length === 0 ? (
        <JsonInput getJson={getJson} />
      ) : (
        <PlanDisplay jsonData={jsonData} />
      )}
    </div>
  );
};

export default App;
