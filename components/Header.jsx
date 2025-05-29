import globe from '../images/globe.png'
export function Header(){
    return(
        <header>
            <img className="logo-img" alt="globe icon" src={globe}/>
            <span>my travel journal.</span>
        </header>
    )
}