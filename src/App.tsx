import floconLogo from './assets/flocon.png'
import './App.css'
import { socialNetwork, SocialNetwork } from './data/socialNetwork'
import { md5 } from './utils/md5'

function App(): JSX.Element {
  return (
    <div className="App">
      <div>
        <a href="/">
          <img src={floconLogo} className="logo flocon" alt="Flocon logo" />
        </a>
      </div>
      <h1>Frigo Clim</h1>
      <div className="card">
        {socialNetwork && socialNetwork.map((social: SocialNetwork) => {
          return <button key={md5(social?.name)}>
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {social?.name}
            </a>
          </button>
        })}
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
