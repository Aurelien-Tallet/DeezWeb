import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { formatDuration } from '../../utils/tools'
import './Album.scss'

export default function Album({ data }) {
    const { img, title, subtitle, tracks = [] } = data
    useEffect(() => {
    }, [data])
    return (
        <section className="Album">
            <div className="Album_hero">
                <div className="Album_hero_desc">
                    <h2><Link>{title} /</Link></h2>

                    <h3><Link to={`/artist?id=${(tracks.length > 0) ? tracks[0].artist.id : ""}`}>{subtitle}</Link></h3>
                </div>
                <img src={img} alt={`cover de l'album  ${title}`}/>

            </div>
            <div className="Album_tracklist">
                <ul className="tracklist">
                    {tracks && tracks.map((track, i) => {
                        return <Link to={`/track?id=${track.id}`}><li className="track" key={i}><span className='track_title'>{track.title}</span> <span className='track_title'>{formatDuration(track.duration)}</span> </li></Link>
                    }
                    )}
                </ul>
            </div>
        </section>

    )
}
