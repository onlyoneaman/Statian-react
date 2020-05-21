
const Connect = (server) => {
    let mysql = require('mysql');
    console.log(mysql);
    let connection = mysql.createConnection({
        host: server.serverName,
        user: server.username,
        password: server.password,
        database: server.dbname,
        port: server.port
    });
    connection.connect();
    connection.end();
}

export default Connect;