const extractTimeMs = (timeToken) => {
    const chaine = timeToken.split(" ");
    const res = chaine.reduce((prev, element, index) => {
        let res = 0
        if (element.includes("d")) {
            console.log("jour", element.split("d")[0])
            res = element.split("d")[0] * 60 * 60 * 1000 * 24
        }
        if (element.includes("h")) {
            console.log("heure", element.split("h")[0])
            res = element.split("h")[0] * 60 * 60 * 1000
        }
        if (element.includes("m")) {
            console.log("minute", element.split("m")[0])
            res = element.split("m")[0] * 60 * 1000
        }
        if (element.includes("s")) {
            console.log("seconde", element.split("s")[0])
            res = element.split("s")[0] * 1000
        }
        return prev + res;
    }, 0)
    return res;
    console.log("res", res)
}

module.exports = {
    extractTimeMs
}