const apiAdapter = require('../../apiAdapter');

const {
    URL_MEDIA_SERVICES
} = process.env;

const api = apiAdapter(URL_MEDIA_SERVICES);

module.exports = async (req, res) => {
    try {
        const media = await api.get('/media');

        return res.json(media.data);
    } 
    catch (error) {
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }

        const { status, data } = error.response;
        
        return res.status(status).json(data);
    }
}