import React from 'react';

export default function Languages(props) {
  const languagesList = props.languagesList;
  const whenClick = props.whenClick;
  return (
    <div className="App-map">
      <h2>The UK and You</h2>
      <img src={require(`../images/Uk-areas.png`)}  alt='Uk-areas' />
      <p>Choose Your Language</p>
      {
        languagesList.map((language, index) => {
          return (
            <button key={index} className="language-btn" onClick={whenClick}>
              {language}
              <img src={require(`../images/${language}.png`)}  alt={language} />
            </button>
          );
        })
      }
    </div>
  );
}
