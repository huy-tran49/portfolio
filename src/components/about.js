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
                            Hello! I am a driven software engineer and an avid basketball enthusiast based in Los Angeles, California. With a background in IT, I have gained valuable experience and now aim to channel my passion for technology towards solving real-world challenges.
                            <br /><br />
                            Besides my professional pursuits, my passion for basketball drives me to excel on and off the court. The dedication, discipline, and teamwork I demonstrate in sports are mirrored in my approach to software engineering. I firmly believe that collaboration, effective communication, and continuous learning are the keys to achieving remarkable results.
                            
                        </p>
                    </section>
        
            </div>
        </>  
    )
}

export default About