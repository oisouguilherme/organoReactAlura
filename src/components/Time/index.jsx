import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({nome, corSecundaria,corPrimaria, colaboradores}) => {
  return(
    (colaboradores.length > 0) ? <section 
    className='time'
    style={{backgroundColor: corSecundaria}}>

      <h3 style={{borderColor:corPrimaria}}>
        {nome}
      </h3>
      <div className='colaboradores'>
        {colaboradores.map( colaborador => <Colaborador
          corDeFundo={corPrimaria}
          key={colaborador.nome}
          nome={colaborador.nome} 
          cargo={colaborador.cargo}
          imagem={colaborador.imagem} />)}
      </div>
    </section> : ""
  )
}

export default Time