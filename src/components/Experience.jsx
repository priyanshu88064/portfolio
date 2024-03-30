import expimg from "../assets/exp.svg";

function Experience(){
    return (
        <div className="exp">
            <div className="exphead">
                <img src={expimg} alt=""/>
                Experience
            </div>
            <div className="expitem">
                <div className="eih">FULL STACK DEVELOPER INTERN</div>
                <div className="eimeta">
                    <div>JULY 2022 - SEP 2022</div>
                    <div>NEEMTREE</div>
                </div>
                <div className="eib"></div>
                <div className="eidesc">
                    <ul>
                    <li>Developed and implemented several UI components to improve the user experience of the application.</li>
                    <li>Developed and maintained back-end features utilizing Node.js to ensure seamless functionality of the application.</li>
                    <li>Diagnosed and resolved bugs and issues in the application, demonstrating exceptional problem-solving and troubleshooting skills.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Experience;