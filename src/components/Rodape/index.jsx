import './Rodape.css'

import logo from '../../images/logo.png'
import fb from  '../../images/fb.png'
import ig from  '../../images/ig.png'
import tw from  '../../images/tw.png'

const Rodape = ()=> {
  return(
    <footer className='footer'>
      <div className='redeSociais'>
        <a href="#"><img src={fb} alt="Facebook" /></a>
        <a href="#"><img src={ig} alt="Instagram" /></a>
        <a href="#"><img src={tw} alt="Twitter" /></a>
      </div>
      <img src={logo} alt="Logo organo" />
      <p>Desenvolvido por Guilherme H.</p>
    </footer>
  )
}

export default Rodape