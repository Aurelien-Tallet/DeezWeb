import React, { useEffect, useState } from 'react'
import { fetchApi } from '../../utils/tools'
import Card from '../Card/Card'

export default function Favoris() {

    const favoris = JSON.parse(localStorage.getItem('favoris'))
    const [state, setstate] = useState([])
    function redirect() {
        window.location.pathname = "/"
    }
    useEffect(() => {
    
            fetchApi(state, setstate, { type: "favoris", id: favoris })
   
    }, [])

    useEffect(() => {


    }, [state])
    return (

        <section >
            <table id="playlist" className="no-select">
                <thead>
                    <th className="cover">&nbsp;</th>
                    <th >Titre</th>
                    <th >Artiste</th>
                    <th >Album</th>
                    <th>&nbsp;</th>
                </thead>
                <tbody>

                    {state.map((result, i) => {
                        return <Card data={result} key={i} />
                    })}
                </tbody>
            </table>
        </section>

    )
}
