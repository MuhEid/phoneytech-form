import { connect } from "mongoose";

const options = {
    dbName: "test",
};

const db_connection = () => {
    connect(`${process.env.CONNECTION_STRING}`, options)
        .then((connect) => {
            console.log(`Success Connect to Database: ${connect.connection.host}`);
        })
        .catch((error) => {
            console.error(`Error connecting to MongoDB: ${error}`);
            setTimeout(db_connection, 5000);
        });
};
export default db_connection;
