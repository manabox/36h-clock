const OptShow24h = ({ show24H, show24HToggle}) => {
    return (
        <div className="optItem">
            <label for="show24hCheck">Show 24-hour clock</label>
            <input
                id="show24hCheck"
                type="checkbox"
                checked={show24H}
                onChange={show24HToggle}
            />
        </div>
    );
}
 
export default OptShow24h;