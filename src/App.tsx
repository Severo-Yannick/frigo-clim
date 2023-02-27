import floconLogo from './assets/flocon.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <a href="/">
          <img src={floconLogo} className="logo flocon" alt="Flocon logo" />
        </a>
      </div>
      <h1>Frigo Clim</h1>
      <div className="card">
        <button>
          <a
            href={"https://youtube.com/channel/UCAl43r53qeaq0xGmVvQzDzQ"}
            target="_blank"
            rel="noreferrer"
          >
            Youtube
          </a>
        </button>
        <button>
          <a
            href={"https://www.tiktok.com/@frigoclim?_t=8WYM0juAyph&_r=1"}
            target="_blank"
            rel="noreferrer"
          >
            Tiktok
          </a>
        </button>
        <button>
          <a
            href={"https://www.facebook.com/profile.php?id=100079186693585"}
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </button>
        <button>
          <a
            href={"https://www.linkedin.com/in/mohamed-ahmya-a344b0158"}
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </button>
        <p>
          Frigo Clim est une entreprise spécialisée dans la réfrigération et la climatisation.
        </p>
        <p>
          Elle propose des solutions pour le froid industriel et la climatisation.
        </p>
      </div>
      <p className="read-the-docs">
        Frigo Clim offre des services et des solutions dans le domaine de la réfrigération et de la climatisation pour les entreprises et les particuliers.
      </p>
      <p>
        Elle vous propose également des formations et des conseils dans ces domaines.
      </p>
      <br />
      <p>Crée avec &#x2764;&#xFE0F; by <a
        href={"https://www.faceaucode.com/"}
        target="_blank"
        rel="noreferrer"
      >FaceAuCode</a>
      </p>
    </div>
  )
}

export default App
