const { postLogin, postName, getUser } = require("../app")

describe("verify api calls", () => {

    it("verifying login api", async () => {
        const response = await postLogin();
        expect(response.status).toEqual(200);
        console.log("Token : " + response.data.token);
    });

    it("verifying post name api", async () => {
        const response = await postName();
        expect(response.status).toEqual(201);
        if ('name' in response.data) {
            console.log("Name : " + response.data.name);
        }
        if ('job' in response.data) {
            console.log("Job : " + response.data.job);
        }
        if ('id' in response.data) {
            console.log("Id : " + response.data.id);
        }
        if ('createdAt' in response.data) {
            console.log("Created At : " + response.data.createdAt);
        }
    });

    it("verifying user details get api", async () => {
        const response = await getUser();
        expect(response.status).toEqual(200);
        if (/@reqres.in\s*$/.test(response.data.data.email)) {
            console.log("it ends in @reqres.in ");
        }
    });

});