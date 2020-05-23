import axios from 'axios'


class Connect {

    makingRequests(server, value, API_URL) {
        const url = `${API_URL}/api/connect/`;
        return(axios.get(url, {
            params: {
                server: server,
                value: value
            }
        })
            .then(response => response.data)
            .catch(response => response.data)
        )
    }

}

export default Connect;