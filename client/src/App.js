import "./App.scss";

import { Logs, Insights, Projects } from "./containers";

function App() {
  return (
    <div className="App">
      <h1 className="App__title">TIMETRACKER</h1>
      <div className="row">
        <Projects />
        <Logs />
      </div>
    </div>
  );
}

export default App;
