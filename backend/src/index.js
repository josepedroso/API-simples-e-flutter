const app = require('./app');
const { connect } = require('./database');

async function main() {
    //Database connection
    await connect();

    //Express Aplplication
    await app.listen(4000);
    console.log('Serve on port 4000: Connected');
}

main();