import './About.css'
import DoctorsImage from '../images/about-img.png'

export default function About() {
  return (
    <div className='about'>

      <p className='about-text'>Doctors are the quiet backbone of society—combining<br />
        science, skill, compassion to protect life at its most vulnerable<br />
        moments. They listen when fear is loud, act when seconds matter, <br />
        and carry the weight of responsibility with steady resolve. Beyond <br />
        diagnoses and treatments, doctors offer reassurance, hope, and<br />
        humanity, often placing others’ well-being above their own. <br />
        Their work is not just a profession but a commitment to healing, <br />
        service, and trust, making an immeasurable difference in individual<br />
        lives and in the health of the world as a whole.<br /></p>

        <img className='about-image' src={DoctorsImage} alt='Doctors Image' />

    </div>
  )
}
