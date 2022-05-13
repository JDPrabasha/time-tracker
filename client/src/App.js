import { ReactComponent as Logo } from "./assets/images/logo.svg";

import { Logs, Insights, Projects } from "./containers";

function App() {
  return (
    <div className="App">
      <Logo className="w-16 mt-8 ml-8 hover:rotate-2 transition-all ease-linear" />
      <div className="flex items-start mt-8 px-8">
        <Projects />
        <Logs />
        <Insights />
      </div>
    </div>
  );
}

export default App;
