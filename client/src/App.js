import { ReactComponent as Logo } from "./assets/images/logo.svg";

import { Logs, Insights, Projects } from "./containers";

function App() {
  return (
    <div className="App bg-slate-50 pt-8 pl-4">
      <Logo className="w-16 ml-6  hover:rotate-2 transition-all ease-linear" />
      <div className="flex items-start mt-8 px-8">
        <Projects />
        <Logs />
        <Insights />
      </div>
    </div>
  );
}

export default App;
