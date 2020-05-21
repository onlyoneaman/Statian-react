
const getServers = async () => {
    return (dataBases())
}

function dataBases() {
    return {
        servers: {
            defaultSelectedId: 1,
            data: [
                {
                    id: 1,
                    name: 'AWS',
                },
                {
                    id: 2,
                    name: 'Azure'
                },
                {
                    id: 3,
                    name: 'Google Cloud'
                }
            ]
        }
    }
}

export default getServers;