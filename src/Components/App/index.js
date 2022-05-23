import {useState} from 'react';
import './styles.scss';
import data from "../../data.json";
import jeremyImg from "../../images/image-jeremy.png";


function App() {
  const [timeChosen, setTimeChosen] = useState("weekly");
  console.log(data);

  const jsxInfos = data.map((info) => {
    return (
      <div className="infos-sub" key={info.title}>
          <div className={`infos-illustration ${info.title.replace(' ','').toLowerCase()}`}></div>
          <div className="infos-details">
          <div className="flex">
            <h2 className="infos-title">{info.title}</h2>
            <button className="link-dots">...</button>
          </div>
            <p className="infos-time">{info.timeframes[timeChosen].current}hrs</p>
            <p className="font-size-color-details">Last week - {info.timeframes[timeChosen].previous}hrs</p>
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
              className="change-date"
              onClick={() => {setTimeChosen("daily")}}
            >Daily</p>
            <p
              className="change-date"
              onClick={() => {setTimeChosen("weekly")}}
            >Weekly</p>
            <p
              className="change-date"
              onClick={() => {setTimeChosen("monthly")}}
            >Monthly</p>
          </div>
        </div>
        {jsxInfos}
      </main>
    </div>
  );
}

export default App;
