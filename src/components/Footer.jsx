import linkedin from "../assets/linkedin.svg";
import git from "../assets/git.svg";

function Footer(){
    return (
        <div className="footer">
            <div className="ft"></div>
            <div className="fwrap">
                <div className="fname">PRIYANSHU TIWARI<div>priyanshutiwari88064@gmail.com</div></div>
                <div className="flinks">
                    <div>Links</div>
                    <div className="flc">
                        <div className="flitem">About Me</div>
                        <div className="flitem">Download CV</div>
                        <div className="flitem">Projects</div>
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