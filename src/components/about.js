import { Nav } from 'react-bootstrap'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const About = () => {
    return (
        <>  
            <div className="pt-20" id="about">
                <h2 className='about text-5xl font-bold'>Huy Tran</h2>
                <br />
                <div className="flex flex-row gap-20 justify-center">
                    <Nav.Link className='hover:scale-125' target="_blank" href="https://github.com/huy-tran49"><BsGithub size={30}/></Nav.Link>
                    <Nav.Link className='hover:scale-125' target="_blank" href="https://www.linkedin.com/in/huy-tran-5278b6126/"><BsLinkedin size={30}/></Nav.Link>
                </div>
                <br />
                    <section>
                        <p className="text-xl font-bold">
                            Hello, I'm a software engineer and basketball enthusiast located in Fairfax, Virginia. Previously, I worked in IT, and now I'm looking to combine my passion for technology to solve real-world issues.
                        </p>
                    </section>
        
            </div>
        </>  
    )
}

export default About