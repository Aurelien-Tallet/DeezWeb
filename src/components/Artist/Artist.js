import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Artist.scss'

export default function Artist({ data }) {
    const { img, title, nb_fan, nb_album , id} = data
    const [ID, setID ] = useState()
    useEffect(()=> {
        setID(id)
        console.log(data)
    },[data])
    return (
     (ID !== undefined) ? <section className="artist">
            <div className="artist_hero">
                <h2><Link  to={`/artist?id=${id}`}>{title}</Link></h2>
                <img src={img}></img>
            </div>
            <div className="artist_info">
                <h3>{nb_fan} fans</h3>
                <h3>{nb_album} albums</h3>
            </div>
        </section> : <>Chagement...</>

    )
}
