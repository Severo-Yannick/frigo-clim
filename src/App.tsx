import { useState } from 'react'
import floconLogo from './assets/flocon.png'
import './App.css'
import { socialNetwork, SocialNetwork } from './data/socialNetwork'
import { md5 } from './utils/md5'
import { locales } from './utils/locales'
import { Translations } from './components/Translations'

function App(): JSX.Element {
  const [locale, setLocale] = useState("FR")

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
        <Translations locale={locale} />
      </div>
      <div className="translation">
        {locales && locales.map(locale => <span key={md5(locale.name)} onClick={() => setLocale(locale.name)}>{locale.flag}</span>)}
      </div>
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
