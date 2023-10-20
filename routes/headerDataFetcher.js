const axios = require('axios');

function fetchHeaderData(baseUrl) {
    const endpointUrl = `${baseUrl}/api/getheader`;

    return axios.get(endpointUrl)
        .then(response => {
            console.log('minedata', response);
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}

module.exports = fetchHeaderData;





