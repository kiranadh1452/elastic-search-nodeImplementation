const elasticSearch = require("elasticsearch");
const client = new elasticSearch.Client({
    host: "localhost:9200",
    log: "trace",
});

const pingElasticSearch = () => {
    client.ping(
        {
            requestTimeout: 30000,
        },
        (error) => {
            if (error) {
                console.error("Elastic search cluster is down!");
            } else {
                console.log("Connection seems good");
            }
        }
    );
};

pingElasticSearch();
module.exports = client;
