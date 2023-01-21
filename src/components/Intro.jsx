import Typer from "./Typer"
import '../css/intro.css'
import Scroll from '../img/scroll.svg'
import ScrollWhite from '../img/scrollWhite.svg'
import { useContext } from "react";
import { ThemeContext } from "./context";

const Intro = ()=> {

    const theme = useContext(ThemeContext);
    const darkTheme = theme.state.darkTheme;

    return (
            <div className="content__wrapper">
            <div className="content">
                <div className="title">
                    Web Developer 
                </div>
                <div className="items_list">
                    <div className="items-wrapper">
                    <div className="item">JavaScript</div>
                    <div className="item">TypeScript</div>
                    <div className="item">React JS</div>
                    <div className="item">Less, Sass, Scss</div>
                    </div>
                </div>
                <div className="intro_description">
                    I'm a prolific front end web developer. I consistently receive high user experience scores for all web development projects. Passionate about building world class web applications in different buisness areas.
                </div>
                    <Typer />
                    <img src = {darkTheme ? ScrollWhite : Scroll } alt="scroll down" className="intro_scroll" />
            </div>
            </div>
    )
}

export default Intro