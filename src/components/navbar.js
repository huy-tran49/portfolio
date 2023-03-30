import { Nav } from 'react-bootstrap'
import { MdWork, MdEmail } from 'react-icons/md'
import { IoMdPerson } from 'react-icons/io'
import './navbar.css'

const Navigation = () => {
  return (
    <>
      <div className='bg-slate-950 side-nav flex flex-col gap-20 h-screen justify-center m-5 fixed'>
        <Nav.Link className='hover:scale-125' href="#about"><IoMdPerson size={40}/></Nav.Link>
        <Nav.Link className='hover:scale-125' href="#project"><MdWork size={40}/></Nav.Link>
        <Nav.Link className='hover:scale-125' href="#contact"><MdEmail size={40}/></Nav.Link>
      </div>
    </>
  )
}

export default Navigation