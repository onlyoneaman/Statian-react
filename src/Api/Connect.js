import axios from 'axios'

const API_URL = 'http://localhost:8000';

class Connect {

    makingRequests(server, value) {
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