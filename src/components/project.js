import { Row, Col, Button } from "react-bootstrap"
import ImageSlider from "./ImageSlider"

const Project = () => {

    const containerStyles = {
        width: "800px",
        height: "600px",
        margin: "0 auto",
    }

    const projectOneSlides = [
        { url: "https://i.imgur.com/xgGsaPY.png", title: "game play" },
        { url: "https://i.imgur.com/0LV8U5X.png", title: "score screen" },
        
    ]

    const projectTwoSlides = [
        { url: "https://i.imgur.com/QjOtSc9.png", title: "home page" },
        { url: "https://i.imgur.com/DD9wlOK.png", title: "players tracker" },
        
    ]

    const projectThreeSlides = [
        { url: "https://i.imgur.com/madk96x.png", title: "home page" },
        { url: "https://i.imgur.com/Rr65an6.png", title: "court detail" },
        
    ]

    return (
        <>
            <div className="mt-5">
            <h2 className='projects text-5xl font-bold mb-5' id='project'>Projects</h2>
                <div className="mb-5">
                    <h3 className='text-3xl font-bold mb-3'>Ballislife</h3>
                    <Row>
                        <Col>
                            <div style={containerStyles}>
                            <ImageSlider slides={projectOneSlides} />
                            </div>
                        </Col>
                        <Col>
                            <Button onClick={()=> window.open('https://huy-tran49.github.io/Ball-is-life/', '_blank')}>Project</Button>
                            
                            <p>
                                Words typing game that animate shooting basketballs when a user typed a word correctly.
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className="mb-5">
                    <h3 className='text-3xl font-bold mb-3'>NBA stats tracker</h3>
                    <Row>
                        <Col>
                            <div style={containerStyles}>
                                <ImageSlider slides={projectTwoSlides} />
                            </div>
                        </Col>
                        <Col>
                            <Button onClick={()=> window.open('https://nba-stats-tracker.fly.dev/', '_blank')}>Project</Button>
                            
                            <p>
                                An app where a user can tracker multiple NBA player stats. Data are being pull from an external API.
                            </p>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h3 className='text-3xl font-bold mb-3'>Courtdate</h3>
                    <Row>
                        <Col>
                        <div style={containerStyles}>
                            <ImageSlider slides={projectThreeSlides} />
                        </div>
                        </Col>
                        <Col>
                            <Button onClick={()=> window.open('https://courtdate.netlify.app/', '_blank')}>Project</Button>
                            
                            <p>
                                A basketball court finding app. Users can add a basketball court to the app for others to rate, comment. Users can upload pictures of the court, add location, and see address of the basketball court on a map.
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Project