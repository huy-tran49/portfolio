import { Nav } from 'react-bootstrap'
import { HiHome} from 'react-icons/hi'
import { MdWork, MdEmail } from 'react-icons/md'
import { IoMdPerson } from 'react-icons/io'

const Navigation = () => {
  return (
    <>
      <div className='flex flex-col gap-20 h-screen justify-center m-5'>
        <Nav.Link href="#about"><IoMdPerson size={40}/></Nav.Link>
        <Nav.Link href="#project"><MdWork size={40}/></Nav.Link>
        <Nav.Link href="#contact"><MdEmail size={40}/></Nav.Link>
      </div>
    </>
  )
}

export default Navigation