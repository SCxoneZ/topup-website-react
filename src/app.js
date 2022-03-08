const wrapper = document.querySelector('.wrapper');
/*

    <nav>
      <img src="img/logo.png" alt="#" />
    </nav>
    <title>Available Games</title>
    <div className="game-cards">
      <div className="card">
        <img src="img/games/MobileLegends.jpg" alt="#" />
        <div className="game-title">
          <p>Mobile Legends</p>
        </div>
      </div>
      <div className="card">
        <img src="img/games/FreeFire.png" alt="#" />
        <div className="game-title">
          <p>Free Fire</p>
        </div>
      </div>
      <div className="card">
        <img src="img/games/FreeFireMax.png" alt="#" />
        <div className="game-title">
          <p>Free Fire Max</p>
        </div>
      </div>
      <div className="card">
        <img src="img/games/CallOfDutyMobile.jpg" alt="#" />
        <div className="game-title">
          <p>Call Of Duty Mobile</p>
        </div>
      </div>
      <div className="card">
        <img src="img/games/Valorant.jpg" alt="#" />
        <div className="game-title">
          <p>Valorant</p>
        </div>
      </div>
      <div className="card">
        <img src="img/games/GenshinImpact.png" alt="#" />
        <div className="game-title">
          <p>Genshin Impact</p>
        </div>
      </div>
      <div className="card">
        <img src="img/games/PubgMobile.jpg" alt="#" />
        <div className="game-title">
          <p>Pubg Mobile</p>
        </div>
      </div>
      <div className="card">
        <img src="img/games/LeagueOfLegends.png" alt="#" />
        <div className="game-title">
          <p>League Of Legends: Wild Rift</p>
        </div>
      </div>
    </div>
    <div className="news-ads">
      <div className="card">
        <img className="thumbnail" src="img/ads-template.jpg" alt="ads" />
        <content>
          <div className="title">Facebook</div>
          <description>Share Your Experience Here!</description>
        </content>
      </div>
    </div>

*/

function App(){
  
  const availableGames = [
    {
      id: 0,
      name: 'Mobile Legends',
      currency: 'Diamond',
      price: {
        "3": "Rp. 1.000",
        "5": "Rp. 1.500",
        "11": "Rp. 3.400",
        "17": "Rp. 5.700",
        "25": "Rp. 8.300",
        "40": "Rp. 12.250",
        "70": "Rp. 15.009",
        "100": "Rp. 25.999",
        "200": "Rp. 45.999",
        "500": ""
      }
    }
  ];
  const {games, setGames} = React.useState([]);
  
  React.useEffect(
  function(){
    
  }
  );
  
  return (
    <>
    
    <nav>
      <img src="img/logo.png" alt="#" />
    </nav>
    <title>Available Games</title>
    <div className="game-cards">
      <div className="card">
        <img src="img/games/MobileLegends.jpg" alt="#" />
        <div className="game-title">
          <p>Mobile Legends</p>
        </div>
      </div>
      <div className="card">
        <img src="img/games/FreeFire.png" alt="#" />
        <div className="game-title">
          <p>Free Fire</p>
        </div>
      </div>
      <div className="card">
        <img src="img/games/FreeFireMax.png" alt="#" />
        <div className="game-title">
          <p>Free Fire Max</p>
        </div>
      </div>
      <div className="card">
        <img src="img/games/CallOfDutyMobile.jpg" alt="#" />
        <div className="game-title">
          <p>Call Of Duty Mobile</p>
        </div>
      </div>
      <div className="card">
        <img src="img/games/Valorant.jpg" alt="#" />
        <div className="game-title">
          <p>Valorant</p>
        </div>
      </div>
      <div className="card">
        <img src="img/games/GenshinImpact.png" alt="#" />
        <div className="game-title">
          <p>Genshin Impact</p>
        </div>
      </div>
      <div className="card">
        <img src="img/games/PubgMobile.jpg" alt="#" />
        <div className="game-title">
          <p>Pubg Mobile</p>
        </div>
      </div>
      <div className="card">
        <img src="img/games/LeagueOfLegends.png" alt="#" />
        <div className="game-title">
          <p>League Of Legends: Wild Rift</p>
        </div>
      </div>
    </div>
    <div className="news-ads">
      <div className="card">
        <img className="thumbnail" src="img/ads-template.jpg" alt="ads" />
        <content>
          <div className="title">Facebook</div>
          <description>Share Your Experience Here!</description>
        </content>
      </div>
    </div>
    
    </>
  );
}

ReactDOM.render(<App/>, wrapper);