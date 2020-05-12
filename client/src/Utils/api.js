import axios from "axios"

export default{
    getGooglebooks: function(title){
        return axios.get("/api/googlebooks/" + title)
    }
}