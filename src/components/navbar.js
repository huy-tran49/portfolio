import { Nav } from 'react-bootstrap'
import { MdWork, MdEmail } from 'react-icons/md'
import { IoMdPerson } from 'react-icons/io'
import './navbar.css'

const Navigation = () => {
  return (
    <>
      <div className='sticky flex justify-center top-0 left-0 right-0 bg-black h-20 z-10'>
        <ul className='flex items-center justify-end'>
          <li className='m-6' ><Nav.Link className='hover:scale-125' href="#about"><IoMdPerson size={40}/>About</Nav.Link></li>
          <li className='m-6'><Nav.Link className='hover:scale-125' href="#project"><MdWork size={40}/>Projects</Nav.Link></li>
          <li className='m-6'><Nav.Link className='hover:scale-125' href="#contact"><MdEmail size={40}/>Contact</Nav.Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navigation