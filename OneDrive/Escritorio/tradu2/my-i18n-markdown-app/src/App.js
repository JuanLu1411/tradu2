// src/App.js
import React from 'react';
import './App.css';
import MarkdownContent from './MarkdownContent';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('es')}>Español</button>
        </div>
        <MarkdownContent />
      </header>
    </div>
  );
}

export default App;
