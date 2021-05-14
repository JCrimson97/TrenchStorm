module.exports = async(client) => {

    await console.log("Ready Event");

    await client.user.setPresence({
        status: "dnd",
        game: {
            name: "Code",
            type: "WATCHING"
        }
    });

}