
import "./CampoTexto.css"

const CampoTexto = ({label,placeholder,obrigatorio, valor, aoAlterado})=> {
  
  const aoDigitado = (evento)=>{
    aoAlterado (evento.target.value)
  }

  return(
    <div className="campo-texto">
      <label>{label}</label>
      <input 
      required={obrigatorio} 
      placeholder={placeholder}
      onChange={aoDigitado}
      value={valor} />
    </div>
  )
}

export default CampoTexto