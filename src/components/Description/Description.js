import React, { useEffect, useState } from 'react'
import { fetchApi } from '../../utils/tools'
import { useQuery } from '../../utils/hooks'
import Album from '../Album/Album'
import Artist from '../Artist/Artist'
import Tracks from '../Tracks/Tracks'

export default function Description({ type }) {
    const [state, setState] = useState({})
    let query = useQuery()
    
    useEffect(() => {
        if (query.get('id') === null) {
          window.location.href = "/"
        }else {
            fetchApi(state, setState, { type, id: query.get('id') })
        }
    }, [])
    useEffect(() => {
    }, [state])
    return (
        <div>
            {(type === "album") && <Album data={state}/>}
            {(type === "artist") && <Artist data={state}/>}
            {(type === "track") && <Tracks data={state}/>}
         
        </div >
    )
}
