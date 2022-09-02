const OptShow24h = ({ show24H, show24HToggle}) => {
    return (
        <div className="optItem">
            <label className="optItemLabel">
                <span>Show 24-hour clock</span>
                <input
                    type="checkbox"
                    checked={show24H}
                    onChange={show24HToggle}
                />
                <div className="optItemSlider"></div>
            </label>
        </div>
    );
}
 
export default OptShow24h;