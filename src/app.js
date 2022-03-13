const wrapper = document.querySelector('.wrapper');
import available_games from './src/games.js';
import available_news from './src/news.js';

function App() {

  const inputEl = React.useRef(null);
  let nominalButtons;

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

    nominalButtons.forEach(async (el) => {
      if (el.style.color == 'white') {
        const result = await Swal.fire({
          title: 'Are you sure?',
          html: `
          <ul>
            <li>GAME: <b>${game.name}</b></li>
            <li>ID: <b>${inputEl.current.value}</b></li>
            <li>AMOUNT: <b>${el.textContent}</b></li>
            <li>PRICE: <b>Rp. ${parseInt(el.textContent.split(' ')[1])*game.price}</b></li>
            <li>PAYMENT: <b>GOPAY</b></li>
          </ul>`,
          text: 'test\nkakak',
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
            html: `
            <p>You have Bought:</p>
            <p><b>${el.textContent}</b> for <b>Rp. ${parseInt(el.textContent.split(' ')[1])*game.price}</b></p>`
          });
        }

      }
    });


    console.log(inputEl.current.value);
  }

  function cardsListener(game) {
    const el = (

      <>
    <Navigation/>
    <button className="back-button" type="submit" onClick={() => ReactDOM.render(<App/>, wrapper)}>«</button>
    <img src={game.banner} alt="banner" className="game-banner"/>
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
              nominalButtons = document.querySelectorAll('.nominal-container .nominal-card');
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
        <img src="img/logo.png" alt="#" onClick={
          function(){
            ReactDOM.render(<App/>, wrapper);
          }
        }/>
      </nav>

    );
  }
}

ReactDOM.render(<App/>, wrapper);
