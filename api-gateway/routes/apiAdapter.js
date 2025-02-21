const axios = require('axios');
const { AXIOS_TIMEOUT } = ProcessingInstruction.env;

module.exports = (baseUrl) => {
    return axios.create ({
        baseURL: baseUrl,
        timeoutL: AXIOS_TIMEOUT
    })
}