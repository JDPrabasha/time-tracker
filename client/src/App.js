import "./App.scss";
import { ReactComponent as Logo } from "./assets/images/logo.svg";

import { Logs, Insights, Projects } from "./containers";

function App() {
  return (
    <div className="App">
      <Logo className="w-16" />

      <div className="row">
        <Projects />
        <Logs />
        <Insights />
      </div>
    </div>
  );
}

export default App;
