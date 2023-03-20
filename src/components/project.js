import { Button, Image } from "react-bootstrap"
const Project = () => {
    return (
        <>
            <div className="mt-5">
            <h2 className='projects text-5xl font-bold' id='project'>Projects</h2>
                <div>
                    <h3 className='text-3xl font-bold'>Ballislife</h3>
                    <Image className="w-25" src="https://i.imgur.com/xgGsaPY.png" thumbnail></Image>
                    <Image className="w-25" src="https://i.imgur.com/0LV8U5X.png" thumbnail></Image>
                    https://huy-tran49.github.io/Ball-is-life/
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>NBA stats tracker</h3>
                    <Image className="w-25" src="https://i.imgur.com/QjOtSc9.png" thumbnail></Image>
                    <Image className="w-25" src="https://i.imgur.com/DD9wlOK.png" thumbnail></Image>
                    https://nba-stats-tracker.fly.dev/
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>Courtdate</h3>
                    <Image className="w-25" src="https://i.imgur.com/madk96x.png" thumbnail></Image>
                    <Image className="w-25" src="https://i.imgur.com/Rr65an6.png" thumbnail></Image>
                    https://courtdate.netlify.app/
                </div>
            </div>
        </>
    )
}

export default Project