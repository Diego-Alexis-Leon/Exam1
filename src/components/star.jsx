
function Star({califica,star,raeting}) {


    return (
        <samp
            key={star} className={star <= raeting ? "active" : "inactive"}>
            <a onClick={() => califica(star)}> {'\u2605'}</a>
        </samp>
    )

}

export default Star