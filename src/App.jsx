import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuoteCard from "./QuoteCard";
import axios from "axios";
import Loading from "./Loading";

function App() {
  const [state, setState] = useState({
    author: "",
    quote: "",
    isLoading: false,
  });
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setState((prevState) => ({ ...prevState, isLoading: true }));
    axios
      .get("https://api.quotesnewtab.com/v1/quotes/random")
      .then((response) => {
        setState({ ...response.data, isLoading: false });
      })
      .catch((error) => console.log("error ", error));
  }, [refresh]);

  const rotate = refresh ? "rotate(180deg)" : "rotate(-180deg)";

  return (
    <div className="w-3/4 md:w-1/2 flex flex-col items-center justify-center h-screen mx-auto">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <QuoteCard state={state} />

      <button
        className="bg-gray-300 mt-4 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={() => setRefresh(!refresh)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6`}
          style={{ transform: rotate, transition: "all 0.4s linear" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>{" "}
        <span>&nbsp; Random Quote</span>
      </button>
    </div>
  );
}

export default App;
