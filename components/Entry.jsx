import marker from '/images/marker.png'
export function Entry(props){
    return(
        <main>
            <article>
                <img className="country-img" alt= {props.item.img.alt} src={props.item.img.src}/>
                <div className="content-container">
                    <div className="location-container">
                        <img alt="marker logo" className="marker" src={marker} />
                        <p>{props.item.country}</p>
                        <a href={props.item.googleMapsLink} target="_blank">View on Google Maps</a>
                    </div>
                    <div className="text-content">
                        <h3>{props.item.title}</h3>
                        <p><b>{props.item.date}</b></p>
                        <p>{props.item.text}</p>
                    </div>
                </div>

            </article>
        </main>
    )
}