
function TabItem({ title, active, onClick }) {
    const classes = `tab-item ${active ? 'tab-item-active' : ''}`

    return (
        <div className={classes} onClick={onClick}>
            <p className="tab-item-title">{title}</p>
        </div>
    );
}

export default TabItem