import artists from "../config/artists.json"
import {PromptObject} from "../types/PromptUITypes"

export const getArtists = (): Array<PromptObject> => {
    const res = []
    for (var artist in artists) {
        const url = artists[artist as keyof typeof artists]
        const last = url.split('/')
        const name = last[last.length-1].replace(/\.[^/.]+$/, "").replaceAll('%', '%25')
        const obj = {
            displayName: artist,
            //name: 'by_' + artist.replaceAll(' ', '_')
            name: name
        }
        res.push(obj)
    }
    return res 
}