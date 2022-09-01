const OptShowSeconds = ({ showSeconds, showSecondsToggle}) => {
    return (
        <div className="optItem">
            <label for="showSecondsCheck">Show Seconds</label>
            <input
                id="showSecondsCheck"
                type="checkbox"
                checked={showSeconds}
                onChange={showSecondsToggle}
            />
        </div>
    );
}
 
export default OptShowSeconds;