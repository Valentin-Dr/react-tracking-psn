import {useState} from 'react';
import './styles.scss';
import data from "../../data.json";
import jeremyImg from "../../images/image-jeremy.png";


function App() {
  const [timeChosen, setTimeChosen] = useState("weekly");
  const [dateSentence, setDateSentence] = useState("Last week -");

  const switchActive = (date) => {
    setTimeChosen(date);
    setDateSentence(
      date === "daily"
      ? "Yesterday -"
      : date === "weekly"
      ? "Last week -"
      : date === "monthly" && "Last month -"
      );
    const dateOptions = document.querySelectorAll('.change-date');
    for (let i = 0; i < dateOptions.length; i++) {
      if (dateOptions[i].classList.contains("active")) {
        dateOptions[i].classList.remove("active");
      }
    }
    document.querySelector(`.${date}`).className += " active";
  }

  const jsxInfos = data.map((info) => {
    return (
      <div className="infos-sub" key={info.title}>
          <div className={`infos-illustration ${info.title.replace(' ','').toLowerCase()}`}>
            <div className={`img-${info.title.replace(' ','').toLowerCase()}`}></div>
          </div>
          <div className="infos-details">
          <div className="flex">
            <h2 className="infos-title">{info.title}</h2>
            <button className="link-dots">...</button>
          </div>
            <p className="infos-time">{info.timeframes[timeChosen].current}hrs</p>
            <p className="font-size-color-details">{dateSentence} {info.timeframes[timeChosen].previous}hrs</p>
          </div>
        </div>
    )
  })
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Poussinet</h1>
      </header> */}
      <main className="infos-grid">
        <div className="infos-main">
          <div className="infos-illustration-main">
            <img className="student-pic" src={jeremyImg} alt="Jeremy" />
            <p className="font-size-color-details">
              Report for
            </p>
            <h2 className="student-name">Jeremy<br/>Robson</h2>
          </div>
          <div className="infos-details details-main">
            <p
              className="change-date daily"
              onClick={() => {
                switchActive("daily");  
              }}
            >Daily</p>
            <p
              className="change-date weekly active"
              onClick={() => {
                switchActive("weekly");  
              }}
            >Weekly</p>
            <p
              className="change-date monthly"
              onClick={() => {
                switchActive("monthly");
              }}
            >Monthly</p>
          </div>
        </div>
        {jsxInfos}
      </main>
    </div>
  );
}

export default App;
