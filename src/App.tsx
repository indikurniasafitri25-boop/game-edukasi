import { useState } from "react";
import "./App.css";

function App() {
  const [activeMenu, setActiveMenu] = useState("Beranda");

  const menus = [
    { name: "Beranda", icon: "⌂" },
    { name: "Peta", icon: "▤" },
    { name: "Prestasi", icon: "🏆" },
    { name: "Materi", icon: "▣" },
    { name: "Profil", icon: "♙" },
  ];

  return (
    <div className="app">
      <div className="game-screen">

        {/* Background */}
        <div className="sky">
          <div className="cloud cloud-one"></div>
          <div className="cloud cloud-two"></div>
          <div className="mountain mountain-one"></div>
          <div className="mountain mountain-two"></div>
          <div className="mountain mountain-three"></div>
        </div>

        {/* Header */}
        <header className="top-header">
          <div className="profile">
            <div className="avatar">👦</div>
            <div className="profile-info">
              <small>Siswa</small>
              <strong>Rizki</strong>
              <div className="level-bar">
                <span></span>
              </div>
              <small>Level 3</small>
            </div>
          </div>

          <div className="header-right">
            <div className="currency">
              <span>⭐</span> 120
              <b>+</b>
            </div>
            <div className="currency">
              <span>💎</span> 45
              <b>+</b>
            </div>
            <button className="settings">⚙</button>
          </div>
        </header>

        {/* Daily Mission */}
        <div className="mission">
          <div className="mission-icon">📋</div>
          <div className="mission-content">
            <strong>Misi Hari Ini</strong>
            <p>Selesaikan 3 level dengan nilai sempurna</p>
            <div className="mission-progress">
              <span></span>
              <small>1/3</small>
            </div>
          </div>
          <span className="mission-arrow">›</span>
        </div>

        {/* Main Title */}
        <main className="main-content">
          <div className="title-decoration">
            <span className="shape-outline triangle-outline"></span>
            <span className="shape-outline circle-outline"></span>
            <span className="shape-outline square-outline"></span>
            <span className="flag">🚩</span>
          </div>

          <div className="game-title">
            <h1>Petualangan</h1>
            <h2>Bangun Datar</h2>
            <p>Jelajahi Dunia, Temukan Bentuknya!</p>
          </div>

          <button
            className="start-button"
            onClick={() => alert("Selamat datang di Petualangan Bangun Datar!")}
          >
            <span className="play-icon">▶</span>
            <strong>Mulai Petualangan</strong>
          </button>
        </main>

        {/* Landscape */}
        <section className="landscape">

          <div className="castle">
            <div className="castle-roof"></div>
            <div className="castle-body">
              <div className="castle-window"></div>
              <div className="castle-door"></div>
            </div>
            <div className="castle-flag">🚩</div>
          </div>

          <div className="sign">
            <strong>Kenali<br />Bangun Datar</strong>
            <span>›</span>
          </div>

          <div className="shape-friends">
            <div className="friend-circle">●</div>
            <div className="friend-square">▪</div>
            <div className="friend-triangle">▲</div>
          </div>

          <div className="grass grass-left"></div>
          <div className="grass grass-right"></div>

          {/* Main Character */}
          <div className="hero-character">
            <div className="backpack">🎒</div>
            <div className="character-body">
              <div className="eye eye-left"></div>
              <div className="eye eye-right"></div>
              <div className="mouth"></div>
            </div>
            <div className="leg leg-left"></div>
            <div className="leg leg-right"></div>
          </div>

          <div className="flowers flower-one">✿</div>
          <div className="flowers flower-two">✿</div>
          <div className="flowers flower-three">✿</div>
        </section>

        {/* Bottom Navigation */}
        <nav className="bottom-nav">
          {menus.map((menu) => (
            <button
              key={menu.name}
              className={`nav-item ${
                activeMenu === menu.name ? "active" : ""
              }`}
              onClick={() => setActiveMenu(menu.name)}
            >
              <span className="nav-icon">{menu.icon}</span>
              <small>{menu.name}</small>
            </button>
          ))}
        </nav>

      </div>
    </div>
  );
}

export default App;