const Clock24 = ({ date }) => {
    const hour36 = Math.floor((date.getHours() * 60 + date.getMinutes()) / 40) // (h * 60 + m) / 40
    const min36 = (date.getHours() * 60 + date.getMinutes()) % 40 // (h * 60 + m) % 40

    return (
        <section className="clock36">
            <h1>36-hour Clock</h1>
            <p className="clock36-time">{ hour36 } : { min36 }<span>{ date.getSeconds() }</span></p>
        </section>
    );
}
 
export default Clock24;