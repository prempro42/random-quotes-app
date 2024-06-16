import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import PoweredBy from "./components/PoweredBy";
import QuoteCard from "./components/QuoteCard";
import RandomQuoteButton from "./components/RandomQuoteButton";
import ToggleModeButton from "./components/ToggleModeButton";

function App() {
  const [state, setState] = useState({
    author: " C.S. Lewis",
    quote:
      "Friendship is unnecessary, like philosophy, like art, like the universe itself… It has no survival value; rather it is one of those things which give value to survival.",
    isLoading: false,
    initialRender: true,
    isDarkMode: false,
  });

  const [refresh, setRefresh] = useState(false);
  const animateFlag = useRef(360);

  useEffect(() => {
    if (state.initialRender) {
      const toggleDarkMode =
        document.documentElement.classList.contains("dark");
      if (toggleDarkMode) {
        setState((prevState) => ({
          ...prevState,
          initialRender: false,
          isDarkMode: true,
        }));
      } else {
        setState((prevState) => ({ ...prevState, initialRender: false }));
      }
    } else {
      axios
        .get("https://api.quotesnewtab.com/v1/quotes/random")
        .then((response) => {
          // setState({ ...response.data, isLoading: false });
          setState((prevState) => ({
            ...prevState,
            ...response.data,
            isLoading: false,
          }));
        })
        .catch((error) => console.log("error ", error));
    }
  }, [refresh]);

  const getRandomQuote = () => {
    setRefresh(!refresh);
    animateFlag.current = animateFlag.current + 360;
  };

  const ToggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const toggleDarkMode = document.documentElement.classList.contains("dark");

    if (toggleDarkMode) {
      setState((prevState) => ({
        ...prevState,
        isDarkMode: true,
      }));
    } else {
      setState((prevState) => ({ ...prevState, isDarkMode: false }));
    }
  };

  return (
    <div className="w-3/4 md:w-1/2 flex flex-col items-center justify-center h-screen mx-auto">
      <ToggleModeButton ToggleDarkMode={ToggleDarkMode} state={state} />

      <QuoteCard state={state} />

      <RandomQuoteButton
        getRandomQuote={getRandomQuote}
        animateFlag={animateFlag}
      />

      <PoweredBy />
    </div>
  );
}

export default App;
