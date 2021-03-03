import './header.scss';
import Scoreboard from "../scoreboard/scoreboard";

function Header (props) {
    return (
        <header>
            <Scoreboard isTimeBoard={false} 
            {...props}/>
            <Scoreboard isTimeBoard={true} 
            {...props}/>
        </header>
    )
}

export default Header;