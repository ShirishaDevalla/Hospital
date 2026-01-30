import Service_Icon1 from '../images/service-icon-1.png'
import Service_Icon2 from '../images/service-icon-2.png'
import Service_Icon3 from '../images/service-icon-3.png'
import Service_Icon4 from '../images/service-icon-4.png'
import './Services.css'

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Service_Icon1,
      alt: "Pulmonologist",
      text: "A pulmonologist is a doctor who treats diseases related to the lungs and breathing system."
    },
    {
      id: 2,
      icon: Service_Icon2,
      alt: "Micro Test",
      text: "Microbiological tests are laboratory tests used to detect microorganisms."
    },
    {
      id: 3,
      icon: Service_Icon3,
      alt: "Cardiologist",
      text: "A cardiologist is a doctor who specializes in diseases of the heart and blood vessels."
    },
    {
      id: 4,
      icon: Service_Icon4,
      alt: "Gynecologist",
      text: "A gynecologist is a doctor who specializes in women’s health, particularly the female reproductive system."
    }
  ]

  return (
    <div className="services-container">
      {services.map(service => (
        <div key={service.id} className="service-card">
          <img src={service.icon} alt={service.alt} className="service-icon" />
          <p>{service.text}</p>
        </div>
      ))}
    </div>
  )
}
