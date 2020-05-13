import axios from "axios"

export default {
    getGooglebooks: function(title, apiKey){
        let url = "https://www.googleapis.com/books/v1/volumes?q=" + title + "&printType=Books&key=" + apiKey;
        return axios.get(url);
    }

}