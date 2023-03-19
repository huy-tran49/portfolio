import { Nav } from 'react-bootstrap'
import { HiHome} from 'react-icons/hi'
import { MdWork, MdEmail } from 'react-icons/md'
import { IoMdPerson } from 'react-icons/io'
import './navbar.css'

const Navigation = () => {
  return (
    <>
      <div className='side-nav flex flex-col gap-20 h-screen justify-center m-5 fixed'>
        <Nav.Link href="#about"><IoMdPerson size={40}/></Nav.Link>
        <Nav.Link href="#project"><MdWork size={40}/></Nav.Link>
        <Nav.Link href="#contact"><MdEmail size={40}/></Nav.Link>
      </div>
    </>
  )
}

export default Navigation