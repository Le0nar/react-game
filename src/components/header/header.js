import './header.scss';
import Scoreboard from "../scoreboard/scoreboard";

function Header () {
    return (
        <header>
            <Scoreboard isTimeBoard={false} />
            <Scoreboard isTimeBoard={true} />
        </header>
    )
}

export default Header;