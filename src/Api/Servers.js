
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
                },
                {
                    id: 4,
                    name: 'db4free',
                    dbname: 'amank1647db',
                    username: 'amank1647',
                    port: 3306,
                    serverName: 'db4free.net'
                }
            ]
        }
    }
}

export default getServers;