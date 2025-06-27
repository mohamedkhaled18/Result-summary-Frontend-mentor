import { useEffect , useState } from "react";
import SummaryItem from "./SummaryItem";

const SummaryComponent = () => {

  const [results, setResults] = useState([]);
  
  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setResults(data);
    }
    fetchResults();
  }
  , []);

  return (
    <div className="summary-results md:w-[50%] shadow-xl p-8 pr-5">
      <h3 className="font-bold text-2xl">Summary</h3>
      <div className="categories-results">
        {
          results.map((result, index) => <SummaryItem key={index} category={result.category} score={result.score} icon={result.icon} />)
        }
      </div>
      <button className="bg-[var(--dark-gray-blue)] hover:[background-image:var(--gradient-primary)] text-[var(--pale-blue)] block w-full p-4 rounded-3xl text-xl mt-12">Continue</button>
    </div>
  )
}

export default SummaryComponent;