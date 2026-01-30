import Doctor from '../images/header.png'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      
      <div className="home-text">
        <p>Your Most Trusted</p>
        <b>HEALTH PARTNER</b>
        <p>The Best Match Services For You</p>

        <p>
          It is equipped with modern medical facilities such as diagnostic
          laboratories, operation theatres, emergency units, and intensive care
          units to ensure proper treatment.
        </p>
      </div>

      <div className="home-image">
        <img src={Doctor} alt="Header-doctor-image" />
      </div>

    </div>
  )
}
