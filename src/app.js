const axios = require("axios")

const apod = axios.create({
    baseURL: 'https://reqres.in/api'
});

function postLogin() {
    const res = apod.post("/login/", {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    })
        .then(response => {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
    return res;
}

function postName() {
    const res = apod.post("/users", {
        "name": "Vijay Gahlot",
        "job": "QA Automation Engineer"
    })
        .then(response => {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
    return res;
}

function getUser() {
    const res = apod.get("https://reqres.in/api/users/3")
        .then(response => {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
    return res;
}

module.exports = {
    postLogin: postLogin,
    postName: postName,
    getUser: getUser,
}