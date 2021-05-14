import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatDuration, updateLocaleStorage } from '../../utils/tools'
import './Card.scss'
import heart from '../../assets/icon/heart.svg'
export default function Card({ data }) {
    const [isFav, setFav] = useState(false)
    useEffect(() => {
        try { (JSON.parse(localStorage.getItem('favoris')).indexOf(data.id) !== -1) ? setFav(true) : setFav(false) }
        catch {
            
        }
    }, [])
    function addFav() {
        setFav(!isFav)
        updateLocaleStorage(data.id)
    }
    return (
        <tr data-index="0" className="playing">
            <td className="play-pause"><div className="imgContainer" onClick={() => addFav()}><img className="cover" src={data.album.cover} alt={`cover de l'album ${data.album.title}`} />

                <svg className="fav" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path className={`color ${isFav ? "active" : ""}`} d="m11.466 22.776c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721c4.001-4.053 1.158-11.055-4.532-11.055-3.417 0-4.985 2.511-5.596 2.98-.614-.471-2.172-2.98-5.596-2.98-5.672 0-8.55 6.984-4.531 11.055z" fill="#f44336" /></svg>
                {/* <img className="fav" src={heart} /> */}
            </div></td>
            <td ><Link to={`/track?id=${data.id}`}>{data.title}</Link></td>
            <td><Link to={`/artist?id=${data.artist.id}`}>{data.artist.name}</Link></td>
            <td><Link to={`/album?id=${data.album.id}`}>{data.album.title}</Link></td>
            <td>{formatDuration(data.duration)}</td>
        </tr>

    )
}
