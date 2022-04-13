export function cToF(celsius: number) {
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    return Math.round(cToFahr * 100) / 100
}

export function fToC(fahrenheit: number) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    return Math.round(fToCel * 100) / 100

} 