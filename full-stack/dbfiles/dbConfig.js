const config = {
    user: 'root',
    password: '123',
    server: 'NOTE-DESE-WEB',
    database: 'laserWelderDb',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS',

    },
    port: 1433
}

module.exports = config;