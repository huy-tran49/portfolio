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
                            Hello! I am a driven software engineer and an avid basketball enthusiast based in Fairfax, Virginia. With a background in IT, I have gained valuable experience and now aim to channel my passion for technology towards solving real-world challenges.
                            <br /><br />
                            In addition to my professional pursuits, my enthusiasm for basketball fuels my drive for excellence both on and off the court. The same dedication, discipline, and teamwork that I embody in my athletic endeavors also reflect in my approach to software engineering. I believe in the power of collaboration, effective communication, and continuous learning to achieve remarkable results.
                            <br /><br />
                            If you're searching for a dynamic software engineer who is not only passionate about technology but also possesses a strong work ethic and a desire to make a difference, I would love to connect with you. Let's collaborate on meaningful projects that push the boundaries of innovation and bring about positive change.
                        </p>
                    </section>
        
            </div>
        </>  
    )
}

export default About