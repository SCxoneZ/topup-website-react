const wrapper = document.querySelector('.wrapper');
import available_games from './src/games.js';
import available_news from './src/news.js';

function App() {

  const inputEl = React.useRef(null);

  function RenderGames() {
    const Games = available_games.map((game) => {
      return (
        <div key={game.id} className="card" onClick={cardsListener.bind(this, game)}>
        <img src={game.thumbnail} alt={game.name} />
        <div className="game-title">
          <p>{game.name}</p>
        </div>
      </div>
      );
    });
    return Games;
  }

  function RenderNews() {
    const News = available_news.map((news) => {
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
    return News;
  }

  async function SubmitListener(game) {
    const selectedNominal = getSelectedNominal();
    console.log(selectedNominal);
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `ID: ${inputEl.current.value}
      GAME: ${game.name}
      AMOUNT: ${selectedNominal.value}
      PRICE: ${parseInt(selectedNominal.textContent.split(' ')[0])*game.price}`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'BUY!',
      cancelButtonText: "CANCEL"
    });
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: 'INVOICE',
        text: 'You have bought: blablbla'
      });
    }
  }

  function cardsListener(game) {
    const el = (

      <>
    <Navigation/>
    <button className="back-button" type="submit" onClick={() => ReactDOM.render(<App/>, wrapper)}>«</button>
    <img src="img/game-banner/MobileLegends_Banner.jpg" alt="banner" className="game-banner"/>
    <div className="input-container">
      <div className="container-info">
        Enter User ID
      </div>
      <input
      ref={inputEl}
      type="number"
      placeholder="Enter User ID..."
      />
    </div>
    <div className="nominal-container">
      <RenderNominalCards game={game}/>
    </div>
    <button type="submit" className="button-buy" onClick={SubmitListener.bind(this, game)}>BUY NOW!</button>
    </>
    );

    ReactDOM.render(el, wrapper);
  }
  
  function getSelectedNominal(){
    return document.querySelectorAll('.nominal-container .nominal-card').forEach((el) => {
      if(el.style.backgroundColor == 'black'){
        return el;
      };
    });
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

  function RenderNominalCards(props) {
    const nominals = [5, 10, 100, 250, 700, 1000, 1500, 2500, 5000, 10000];
    const NominalCards = [];
    for (let i = 0; i < nominals.length; i++) {
      NominalCards.push(
        <div key={i} className="nominal-card" onClick={
            function(e){
              const nominalButtons = document.querySelectorAll('.nominal-container .nominal-card');
              nominalButtons.forEach((btn) => {
                btn.style.backgroundColor = 'transparent';
                btn.style.color = 'black';
                btn.style.boxShadow = 'none';
              });
              e.target.style.backgroundColor = 'black';
              e.target.style.color = 'white';
              e.target.style.boxShadow = '0 0 10px rgba(0,0,0,.3)';
            }

        }> {nominals[i]} {props.game.currency}</div>
      );
    }
    return NominalCards;
  }

  function Navigation() {
    return (

      <nav>
        <img src="img/logo.png" alt="#"/>
      </nav>

    );
  }
}

ReactDOM.render(<App/>, wrapper);
