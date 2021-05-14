import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Tracks.scss'

export default function Tracks({ data }) {

    const { title, img, artist, preview, artistID, link } = data
    const [URL, setURL] = useState()
    useEffect(() => {
        setURL(preview)
    }, [data])

    useEffect(() => {
        setURL(preview)
    }, [URL])
    return (
        (URL !== undefined) ? < section className="track" >
            <div className="track_hero">
                <div className="track_hero_desc">
                    <h2><a href={link} target="_blank" rel="noopener noreferrer">{title} /</a></h2>
                    <h3><Link to={`/artist?id=${artistID}`}>{artist}</Link></h3>
                </div>
                <img src={img} alt={`cover de l'album  de ${artist}`} />
            </div>
            <figure>
           {(URL !== undefined) ?  <audio controls >
                    <source src={URL} type="audio/mp3"></source>
                </audio> : <> </>}  
            </figure>

        </section > : <>Chagement...</>

    )
}
