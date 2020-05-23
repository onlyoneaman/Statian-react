
const getServers = async () => {
    return (dataBases())
}

function dataBases() {
    return {
        data: {
            servers: {
                defaultSelectedId: 4,
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
                        serverName: 'db4free.net',
                        password: 'amankumar1647'
                    }
                ]
            },
            apps: {
                defaultSelectedId: 1,
                data: [
                    {
                        id: 1,
                        name: 'localhost',
                        url: 'http://localhost:8000'
                    },
                    {
                        id: 2,
                        name: 'Heroku App',
                        url: 'https://immense-anchorage-06876.herokuapp.com'
                    }
                ]
            }
        }
    }
}

export default getServers;