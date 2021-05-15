module.exports = (client) => {

    console.log("Ready Event");

    client.user.setPresence(
        {
            status: "online",
            game:
                {
                    name: "Code",
                    url: null,
                    type: "WATCHING"
                }
        }
    );


}