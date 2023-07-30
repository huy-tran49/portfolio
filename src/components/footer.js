import { Nav } from 'react-bootstrap'

const Footer = () => {
    return(
        <>
            <footer className="h-40 mt-20 bg-black">
                <ul className="pl-5 pt-3">
                    <li className='text-2xl'><Nav.Link  href="#about">About</Nav.Link></li>
                    <li className='text-2xl'><Nav.Link  href="#project">Projects</Nav.Link></li>
                    <li className='text-2xl'><Nav.Link  href="#contact">Contact</Nav.Link></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer