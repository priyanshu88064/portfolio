function ProjectItem({item}){
    return (
        <div className="sitem"
            style={{
                background:`url(${item.image})`,
                backgroundSize:'cover'
            }}>
            <div className="op"></div>
            <div className="sipop"></div>
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
}
export default ProjectItem;