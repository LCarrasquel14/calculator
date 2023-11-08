
import "./App.css";
function App() {
  const ctx = "";
  return (
    <>
      <div className="container">
        <div className="bar">
          <div className="presentation">
            <i className="bx bxs-calculator brand"></i>
            <h5 className="title">Calculator</h5>
          </div>
          <nav className="navigation">
            <button className="tab">
              <hr className="minimize" />
            </button>
            <button className="tab maximize"></button>
            <button className="tab closed">X</button>
          </nav>
        </div>
        <input readonly="readonly" className="screen-calculator" type="text" />
        <ul className="container-number">
          <li className="button">%</li>
          <li className="button">CE</li>
          <li className="button">C</li>
          <li className="button">{"<x>"}</li>
          <li className="button">{"1/x"}</li>
          <li className="button">{"χ²"}</li>
          <li className="button">{"√"}</li>
          <li className="button">/</li>
          <li className="button">7</li>
          <li className="button">8</li>
          <li className="button">9</li>
          <li className="button">X</li>
          <li className="button">4</li>
          <li className="button">5</li>
          <li className="button">6</li>
          <li className="button">-</li>
          <li className="button">1</li>
          <li className="button">2</li>
          <li className="button">3</li>
          <li className="button">+</li>
          <li className="button">+/-</li>
          <li className="button">0</li>
          <li className="button">,</li>
          <li className="button">=</li>
        </ul>
      </div>
    </>
  );
}

export default App;
