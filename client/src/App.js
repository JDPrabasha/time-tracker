import { Header } from "./components";
import { Logs, Insights, Projects } from "./containers";

function App() {
  return (
    <div className="App bg-zinc-900 text-white font-body min-h-screen ">
      <Header />
      <div className="flex items-start mt-8 px-8">
        <Projects />
        <Logs />
        <Insights />
      </div>
    </div>
  );
}

export default App;
