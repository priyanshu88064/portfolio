import React from "react";

const ProjectItem = React.forwardRef(({item},ref)=>{
    return (
        <div className="sitem" ref={ref}>
            <div className="sip">
                <div className="sipa">{item.title}</div>
                <div className="sipd">a description of your proect goes here.</div>
                <div className="sipb">
                    <div>LIVE</div>
                    <div>GITHUB</div>
                </div>
            </div>
        </div>
    );
});

export default ProjectItem;