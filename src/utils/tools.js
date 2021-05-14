
export function fetchApi(state, setState, spec) {
    let url = (spec.type !== "search") ? `https://api.deezer.com/${spec.type}/${spec.id}` : `https://api.deezer.com/search?q=${state.field}&order=${state.filter}`
    if (spec.type !== "favoris") {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                if (spec) {
                    switch (result.type) {
                        case 'artist':
                            const formatArtist = {
                                type: result.type,
                                img: result.picture_medium,
                                title: result.name,
                                nb_fan: result.nb_fan,
                                nb_album: result.nb_album,
                                link: result.link,
                                id: result.id
                            }
                            setState({ ...formatArtist })
                            break;
                        case 'album':
                            const formatAlbum = {
                                type: result.type,
                                img: result.cover_medium,
                                title: result.title,
                                subtitle: result.artist.name,
                                tracks: [...result.tracks.data],
                                link: result.link,
                                rating: result.rating
                            }
                            setState({ ...formatAlbum })
                            break;
                        case 'track':
                            const formatTrack = {
                                type: result.type,
                                img: result.album.cover_medium,
                                title: result.title,
                                link: result.link,
                                album: result.album.title,
                                preview: result.preview,
                                artist: result.artist.name,
                                artistID: result.artist.id
                            }
                            setState({ ...formatTrack })
                            break;
                        default: setState({ ...state, results: [...result.data] })
                            break;
                    }
                }
            }).catch(err => console.log(err))
    } else {
        if (spec.id == null) return
        Promise.all(spec.id.map(id =>
            fetch(`https://api.deezer.com/track/${id}`).then(response => response.json())
        )).then(data => {
            setState([...data])
        })

    }
}


export function formatDuration(time) {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    return `${(minutes.length < 2) ? "0" + minutes : minutes}:${(seconds.length < 2) ? "0" + seconds : seconds}`
}





export function updateLocaleStorage(id) {
    id.toString()
    if (!localStorage.getItem('favoris')) {
        localStorage.setItem("favoris", JSON.stringify([id]))
    } else {
        const lastFavoris = JSON.parse(localStorage.getItem('favoris'))
        const favoris = JSON.parse(localStorage.getItem('favoris')).filter((track) => track !== id)
        if (lastFavoris.length !== favoris.length) {

            localStorage.setItem("favoris", JSON.stringify([...favoris]))
        } else {
            localStorage.setItem("favoris", JSON.stringify([...favoris, id]))
        }
    }
}