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

    static editMovie(token, movie_id, body){
        return fetch(
            `http://192.168.0.106:8000/api/movies/${movie_id}/`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(body)
            }
        ).then(resp => resp.json())
    }

}