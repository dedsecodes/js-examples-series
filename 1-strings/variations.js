function getNumberOfChars(name) {
    // number of characters in: name
    return name.length
}
function getFirstChar(name) {
    // first character of: name
    return name[0]
}
function getLastChar(name) {
    // last character of: name
    return name[name.length-1]
}
function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    return name.toLowerCase()
}
function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    return name.toUpperCase()
}
function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
    return name[0].toUpperCase()+name.substring(1).toLowerCase()
}