import Card from './Card'
import './section2.css'

const Section2 = () => {
  return (
    <section className='section2-container'>
        <p className='section2-subtitle'>WHY SHOULD YOU RIDE WITH US?</p>
        <h1 className='section2-main-title'>Best in class rides</h1>
        <div className='cards'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </section>
  )
}

export default Section2