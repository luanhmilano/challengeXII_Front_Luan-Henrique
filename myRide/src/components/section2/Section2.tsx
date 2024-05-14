import Card from './Card'
import './section2.css'

const Section2: React.FC = () => {

  const ids: number[] = [1, 2, 3, 4]

  return (
    <section className='section2-container'>
        <div className='section2-text'>
          <p className='section2-subtitle'>WHY SHOULD YOU RIDE WITH US?</p>
          <h1 className='section2-main-title'>Best in class rides</h1>
        </div>
        <div className='cards'>
            {ids.map((valor, index) => (
              <Card key={index} idProp={valor} />
            ))}
        </div>
    </section>
  )
}

export default Section2