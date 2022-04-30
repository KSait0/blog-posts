const responseHandler = (res) => {
    return res.ok ? res.json() : Promise.reject (`Ошибка ${res.status}`)
}
class Api {
    constructor({path, token}) {
        this.path = path;
        this.token = token;
    }
    getAllPosts() {
        return fetch(`${this.path}/posts`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    getSinglePost(_id) {
            return fetch(`${this.path}/posts/${_id}`, {
                headers: {
                    authorization: `Bearer ${this.token}`
                }
            }).then(responseHandler);
    }
    createNewPost() {
        return fetch(`${this.path}/posts`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${this.token}`,
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(newPost)
        }).then(responseHandler);
    }
    editSinglePost(_id) {
        return fetch(`${this.path}/posts/${_id}`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    deleteSinglePost(_id) {
        return fetch(`${this.path}/posts/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }  
}

const config = {
    path: "https://api.react-learning.ru",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU1YTVmNTk0N2M3MjkyZDhjMjA1MTQiLCJpYXQiOjE2NDk3ODAyMTksImV4cCI6MTY4MTMxNjIxOX0.LA69-UuzZLxxDCSgN2rOdlwRBUtPtmwRJwqCvjRc52E"
}

const api = new Api(config);

export default api;