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

    static rateMovie(token, movie_id, rating){
        return fetch(
            `http://192.168.0.106:8000/api/movies/${movie_id}/rate_movie/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify({stars: rating})
            }
        ).then(resp => resp.json())
    }

    static addMovie(token, body){
        return fetch(
            `http://192.168.0.106:8000/api/movies/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(body)
            }
        ).then(resp => resp.json())
    }

    static deleteMovie(token, movie_id){
        return fetch(
            `http://192.168.0.106:8000/api/movies/${movie_id}/`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            }
        ).then(resp => resp.json())
    }

    static userLogin(body){
        return fetch(
            `http://192.168.0.106:8000/auth/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }
        ).then(resp => resp.json())
    }

    static userRegister(body){
        return fetch(
            `http://192.168.0.106:8000/api/users/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }
        ).then(resp => resp.json())
    }

}