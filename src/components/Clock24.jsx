const Clock24 = ({ date }) => {
    return (
        <section className="clock24">
            <h2>24-hour Clock</h2>
            <p className="clock24-time">{date.getHours()}:{date.getMinutes()}</p>
        </section>
    );
}
 
export default Clock24;