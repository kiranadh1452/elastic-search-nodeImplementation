// create index for users

const client = require("./connection");

client.indices
    .create({
        index: "users",
    })
    .then((resp) => {
        console.log(resp);
    })
    .catch((err) => {
        console.log(err);
    });
