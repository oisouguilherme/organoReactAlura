import './ListaSuspensa.css'

const ListaSuspensa = ({label, itens, value, aoAlterado})=>{
  return(
    <div className='lista-suspensa'>
      <label>{label}</label>
      <select 
      onChange={evento => aoAlterado(evento.target.value)} 
      value={value}>
        {itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default ListaSuspensa