import linkedin from "../assets/linkedin.svg";
import git from "../assets/git.svg";

const resume = "https://portfolio-psi-five-80.vercel.app/resume.pdf";

function Footer(){
    return (
        <div className="footer">
            <div className="ft"></div>
            <div className="fwrap">
                <div className="fname">PRIYANSHU TIWARI<div>priyanshutiwari88064@gmail.com</div></div>
                <div className="flinks">
                    <div>Links</div>
                    <div className="flc">
                        <div className="flitem sp"><a href="#home">About Me</a></div>
                        <div className="flitem sp"><a href={resume} target="blank">Download CV</a></div>
                        <div className="flitem sp"><a href="#projects">Projects</a></div>
                    </div>
                </div>
                <div className="fsocial">
                    <img src={linkedin} alt=""/>
                    <img src={git} alt=""/>
                </div>
            </div>
        </div>
    );
}
export default Footer;