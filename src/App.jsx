import ResultComponent from "./Components/ResultComponent";
import SummaryComponent from "./Components/SummaryComponent";
import "./index.css";

const App = () => {

  return (
    <div className="body grid place-items-center min-h-screen bg-[var(--pale-blue)]">
      <div className="_container flex bg-white rounded-2xl min-h-[485px] md:flex-row flex-col m-4 max-sm:max-w-[400px]">
        <ResultComponent />
        <SummaryComponent />
      </div>
    </div>
  )
}

export default App;