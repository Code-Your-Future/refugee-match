import React from 'react';

export default function Languages(props) {
  const languagesList = props.languagesList;
  const whenClick = props.whenClick;
  return (
    <div className="App-map">
      <h2>The UK and You</h2>
      <div>
        <p>
          This tool is designed to inform you about the different areas of the United Kingdom.
          You can use it to help you think about where you would prefer to live.
        </p>
        <p>
          None of your personal information is stored or used in any way.
          This tool has been designed by independent researchers from Oxford University to help refugees understand the countries in which they are seeking asylum.
        </p>
      </div>
      
      <p>Choose Your Language</p>
      {
        languagesList.map((language, index) => {
          return (
            <button key={index} className="language-btn" onClick={whenClick}>
              {language}
            </button>
          );
        })
      }
    </div>
  );
}
