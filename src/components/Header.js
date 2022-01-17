import Button from "./Button.js"

const Header = ({functions}) => {
    return (
        <header>
            <div>
                <h1 onClick={functions.landing}> Mansterlytics </h1>
                <Button text="Spirit Vale" onClick={functions.wing1}/>
                <Button text="Salvation Pass" onClick={functions.wing2}/>
                <Button text="Stronghold of the Faithful" onClick={functions.wing3}/>
                <Button text="Bastion of the Penitent" onClick={functions.wing4}/>
                <Button text="Hall of Chains" onClick={functions.wing5}/>
                <Button text="Mythwright Gambit" onClick={functions.wing6} />
                <Button text="The Key of Ahdashim" onClick={functions.wing7}/>
                <Button text="Strikes" onClick={functions.strikes}/>
                <Button text="Nightmare" onClick={functions.f98}/>
                <Button text="Shattered Observatory" onClick={functions.f99}/>
                <Button text="Sunqua Peak" onClick={functions.f100}/>
                <Button text="Upload" onClick={functions.upload}/> 
            </div>
        </header>
    )
}

export default Header
