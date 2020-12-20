import Axios from "axios"
import React, { useState } from "react"
import ReactDOM from "react-dom"

function Main() {
  const initialState = {
    author: "Reinhold Niebuhr",
    quote: "God grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference."
  }

  const [state, setState] = useState(initialState)

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  let bgValue = 0
  const colorArr = [" #ee9ca7, #ffdde1", " #2980b9, #6dd5fa, #ffffff", "#c6ffdd, #fbd786, #f7797d", "#215f00, #e4e4d9", "#1d2b64, #f8cdda", "#ed4264, #ffedbc", "#ede574, #e1f5c4", " #9796f0, #fbc7d4", "#e6dada, #274046"]

  async function getRandomQuote() {
    try {
      await Axios.get("https://api.quotesnewtab.com/v1/quotes/random").then(response => {
        // console.log(response.data)

        bgValue = getRandomInt(10)
        $("body").css("background", `linear-gradient(to right,${colorArr[bgValue]})`)

        setState(prevState => {
          return {
            author: response.data.author,
            quote: response.data.quote
          }
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div id="page-container">
        <main>
          <div className="container">
            <div className="row">
              <div className="col">
                <div id="mainCard" className="card mt-5">
                  <div className="card-header">Quote</div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p id="RandomQuote">{state.quote}</p>
                      <footer className="blockquote-footer" id="authorName">
                        {state.author}
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <button className="mt-4 btn btn-primary r-btn" onClick={getRandomQuote}>
                  <img className="refresh-icon" src="./images/refresh-2-512.png" alt="refresh-icon" /> Random Quote
                </button>
              </div>
            </div>
          </div>
        </main>
        <footer id="footer" className="text-center">
          <span>
            <p className="text-muted f9 m-0">
              Powered by{" "}
              <a target="_blank" href="https://github.com/quotesnewtab/api">
                Quotes New Tab API
              </a>
            </p>

            <p className="text-muted f9 m-0">
              Made by{" "}
              <a target="_blank" href="https://prem-kumar-g.netlify.app/">
                Prem G
              </a>
            </p>
          </span>
        </footer>
      </div>
    </>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
