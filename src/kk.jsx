import "./App.css";
import "./index.css";

export default function KK() {

  const videos = [
    // Previous videos
    "6lR6ztCgsKQ",
    "yp3B6HM96mA",
    "kR5PE1IZKYw",
    "ref8iYfnRIk",
    "zed0kMpaFTE",
    "sMqHX71j_HU",
    "H0x-wU9X6E8",
    "Xfjt15SvUWc",
    "4Poic_Mj8WM",
    "EgZmo26mp8s",
    "kyT90BieBTI",
    "pjdf1zi6F8g",
    "_l5El5n8qmg",
    "7hrs7jqIPZM",
    "CMT2-_vIuxs",
    "MfO44FUF1L0",
    "1xH0jVwS1Lc",
    "xIOG0fLncf4",

    // ==== Newly added videos ====
    "g44VQxMcFH4",
    "mPnWRXCwRsE",
    "4Poic_Mj8WM",
    "yFZXJODqbcw",
    "y4_7KVqj1cY",
    "gZcw3Ka25WY",
    "OdL3O67C-Bc",
    "Apj9ISyXr_s",
    "zyRFufOmeFY",
    "ViHFSCmv3vA"
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
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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