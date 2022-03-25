import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';


const alanKey = '99e83ca7425c523ed9b0ebb2e0621a152e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command  === 'newHeadlines') {
          setNewsArticles(articles);
        }
      }
    })
  }, [])
  return (
    <div>
      <h1>AIVAN APP</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
