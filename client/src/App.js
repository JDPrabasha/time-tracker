import "./App.scss";
import { Log, Project } from "./components";
import { Logs, Insights, Projects } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Projects />
        <Logs />
      </div>
    </div>
  );
}

export default App;
