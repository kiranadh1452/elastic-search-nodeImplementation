// request the health status from elastic search

const client = require("./connection");

client.cluster.health({}, async (err, resp, status) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Elasticsearch cluster status: ${await resp}`);
    }
});
