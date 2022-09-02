const OptShowSeconds = ({ showSeconds, showSecondsToggle}) => {
    return (
        <div className="optItem">
            <label className="optItemLabel">
                <span>Show Seconds</span>
                <input
                    type="checkbox"
                    checked={showSeconds}
                    onChange={showSecondsToggle}
                />
                <div className="optItemSlider"></div>
            </label>
        </div>
    );
}
 
export default OptShowSeconds;