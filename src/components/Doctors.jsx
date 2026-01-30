import Doctor1 from '../images/doc-1.png'
import Doctor2 from '../images/doc-2.png'
import Doctor3 from '../images/doc-3.png'
import Doctor4 from '../images/doc-4.png'
import './Doctors.css'

export default function Doctors() {
  const doctors = [
  {
    id: 1,
    icon: Doctor1,
    alt: "Doctor1",
    name: 'Ajay',
    profession: 'Cardiologist',
    text: "A cardiologist specializes in diagnosing and treating diseases related to the heart and blood vessels."
  },
  {
    id: 2,
    icon: Doctor2,
    alt: "Doctor2",
    name: 'Shirisha',
    profession: 'Microbiologist',
    text: "A microbiologist studies micro-organisms like bacteria, viruses, fungi, and parasites."
  },
  {
    id: 3,
    icon: Doctor3,
    alt: "Doctor3",
    name: 'Navya',
    profession: 'Pulmonologist',
    text: "A pulmonologist specializes in lung and respiratory system diseases."
  },
  {
    id: 4,
    icon: Doctor4,
    alt: "Doctor4",
    name: 'Pooja',
    profession: 'Gynecologist',
    text: "A gynecologist focuses on women’s reproductive health."
  }
]

  return (
    <div className='doctor-container'>
      {doctors.map(doctor => (
        <div key={doctor.id} className='doctor-card'>
          <img
            src={doctor.icon}
            alt={doctor.alt}
            className='doctor-icon'
          />
          <h3>{doctor.name}</h3>
  <h4 className="doctor-profession">{doctor.profession}</h4>
  <p>{doctor.text}</p>
        </div>
      ))}
    </div>
  )
}
