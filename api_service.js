export class API{

    static getMovies(token){
        return fetch(
            "http://192.168.0.106:8000/api/movies/",
            {
                method: 'GET',
                headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            }
        ).then(resp => resp.json())
    }

}