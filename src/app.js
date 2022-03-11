const wrapper = document.querySelector('.wrapper');
import available_games from './src/games.js';
import available_news from './src/news.js';

function App() {
  
  const []
  
  function RenderGames() {
    const GamesComponent = available_games.map((game) => {
      return (
        <div key={game.id} className="card" onClick={cardsListener}>
        <img src={game.thumbnail} alt={game.name} />
        <div className="game-title">
          <p>{game.name}</p>
        </div>
      </div>
      );
    });
    return GamesComponent;
  }

  function RenderNews() {
    const NewsComponent = available_news.map((news) => {
      return (
        <div key={news.id} className="news-card">
        <img className="thumbnail" src={news.thumbnail} alt={news.name} />
        <content>
          <div className="title">{news.name}</div>
          <description>{news.description}</description>
        </content>
      </div>
      );
    });
    return NewsComponent;
  }
  
  function cardsListener(){
    const el = (
     
     <>
    <Navigation/>
    <button className="back-button" type="submit" onClick={() => ReactDOM.render(<App/>, wrapper)}>«</button>
    <div className="input-container">
      <div className="container-info">
        Enter User ID
      </div>
      <input type="number" placeholder="Enter User ID..."/>
    </div>
    <div className="nominal-container">
    </div>
    <button type="submit" className="button-buy">BUY NOW!</button>
    </>
    );
    
    ReactDOM.render(el, wrapper);
  }
  
  
  return (
    
  <>
    
    <Navigation/>
    <title>Available Games</title>
    <div className="game-cards">
      <RenderGames/>
    </div>
    <div className="news">
      <RenderNews/>
    </div>
    
  </>
  );
  
  function NominalCard(){
    return (
      
      <div className="nominal-card">
        100000 <span className="currency">Diamonds</span>
      </div>
      
    );
  }
  
  function Navigation() {
    return (

      <nav>
        <img src="img/logo.png" alt="#" onClick={
            function(){
              ReactDOM.render(<App/>, wrapper);
            }
          } />
      </nav>

    );
  }
}

ReactDOM.render(<App/>, wrapper);
