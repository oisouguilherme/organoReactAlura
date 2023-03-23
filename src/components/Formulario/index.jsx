import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({aoColaboradorCadastrado, times})=>{
  
  const aoSalvar = (evento)=>{
    evento.preventDefault()
    console.log(nome, cargo, imagem,time)
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  return(
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
      <CampoTexto 
      obrigatorio={true} 
      label="Nome" 
      placeholder="Digite seu nome"
      valor={nome}
      aoAlterado={valor=>setNome(valor)}/> 
      
      <CampoTexto 
      obrigatorio={true} 
      label="Cargo" 
      placeholder="Digite seu cargo"
      valor={cargo}
      aoAlterado={valor=>setCargo(valor)}/>
      
      <CampoTexto 
      label="Imagem" 
      placeholder="Digite o endeço da imagem"
      valor={imagem}
      aoAlterado={valor=>setImagem(valor)}/>
      
      <ListaSuspensa 
      itens={times} 
      label="Time"
      valor={time}
      aoAlterado={valor=>setTime(valor)}/>
      <Botao>
        Criar Card
      </Botao>
      </form>
    </section>
  )
}

export default Formulario