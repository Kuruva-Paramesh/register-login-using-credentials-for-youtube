import "./App.css";
import "./index.css";

export default function KK() {

  const videos = [
    "zed0kMpaFTE",
    "sMqHX71j_HU",
    "H0x-wU9X6E8",
    "Xfjt15SvUWc",
    "4Poic_Mj8WM",
    "EgZmo26mp8s",
    "kyT90BieBTI",
    "pjdf1zi6F8g",
    "_l5El5n8qmg",
    "dQw4w9WgXcQ", // extra video 1
    "3JZ_D3ELwOQ", // extra video 2
    "V-_O7nl0Ii0", // extra video 3
    "9bZkp7q19f0", // extra video 4
    "kJQP7kiw5Fk", // extra video 5
    "zed0kMpaFTE", // Andhamaina Kalala Full HD
    "sMqHX71j_HU", // Nannaku Prematho Title Song
  ];

  return (
    <>
      <div className="nav">
        <h1>🎬 Welcome to Paramesh YouTube Channel</h1>
        <button className="c1" onClick={() => window.location.reload()}>
          Logout
        </button>
      </div>

      <div className="card1">
        {videos.map((id, index) => (
          <div className="video-box" key={index}>
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}

      </div>
       <footer className="footer">
        <p>© 2026 Paramesh YouTube Channel. All rights reserved.</p>
        <div className="social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </footer>
    </>
  );
}