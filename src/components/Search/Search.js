import React, { useState, useEffect } from 'react'
import './Search.scss'
import { fetchApi } from '../../utils/tools'
import Card from '../Card/Card'
export default function Search() {
    const [state, setstate] = useState({
        field: "",
        filter: "ARTIST_ASC",
        results: []
    })

    const SearchValue = (e) => {
        if (state.field.length <= 0) return
        e.preventDefault()
        fetchApi(state, setstate,{ type: "search" })
    }
    useEffect(() => {
        fetchApi(state, setstate,{ type: "search"})
    }, [state.filter])
    return (
        <div className="search">
            <form onSubmit={SearchValue}>
                <input className="search_input" placeholder='Rechercher' type="text" value={state.field} onChange={(e) => setstate({ ...state, field: e.currentTarget.value })} />
            </form>
            <section>
                <table id="playlist" className="no-select">
                    <thead>
                        <th className="cover">&nbsp;</th>
                        <th onClick={() => setstate({ ...state, filter: "TRACK_ASC" })} className={state.filter === "TRACK_ASC" ? "active" : ""}>Titre</th>
                        <th onClick={() => setstate({ ...state, filter: "ARTIST_ASC" })} className={state.filter === "ARTIST_ASC" ? "active" : ""}>Artiste</th>
                        <th onClick={() => setstate({ ...state, filter: "ALBUM_ASC" })} className={state.filter === "ALBUM_ASC" ? "active" : ""}>Album</th>
                        <th onClick={() => setstate({ ...state, filter: "RATING_ASC" })} className={state.filter === "RATING_ASC" ? "active" : ""}>Populatité</th>
                        <th onClick={() => setstate({ ...state, filter: "RANKING" })} className={state.filter === "RANKING" ? "active" : ""}>Rang</th>
                    </thead>
                    <tbody>
                        {state.results.map((result, i) => {
                            return <Card onClick={() => console.log("add favoris")} data={result} key={i} />
                        })}
                    </tbody>
                </table>
            </section>

        </div >
    )
}
