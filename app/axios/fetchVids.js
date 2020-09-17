
import axios from 'axios'
export const KEY = 'AIzaSyB-FDuf22_bUDWPquhJZfMkGFCCBfLGz9c'

export const baseParams = {
    part: 'snippet',
    maxResults: 5,
    key: KEY,

}
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',

})



