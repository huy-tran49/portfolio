import { Nav } from 'react-bootstrap'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const About = () => {
    return (
        <>  
            <div className="mt-5">
                <h2 className='about text-5xl font-bold' id="about">Huy Tran</h2>
                <br />
                <div className="flex flex-row gap-20 justify-center">
                    <Nav.Link target="_blank" href="https://github.com/huy-tran49"><BsGithub size={30}/></Nav.Link>
                    <Nav.Link target="_blank" href="https://www.linkedin.com/in/huy-tran-5278b6126/"><BsLinkedin size={30}/></Nav.Link>
                </div>
                <br />
                    <section>
                        <p className="text-xl font-bold">
                            Hello, I'm a software engineer and basketball enthusiast locate in Fairfax, Virginia. Previously worked in IT, I'm looking to combine my passion in technology to solve real world issues.
                        </p>
                    </section>
        
            </div>
        </>  
    )
}

export default About