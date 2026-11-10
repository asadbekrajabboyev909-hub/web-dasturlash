function haroratOgir(c) {
    let f = c * 9 / 5 + 32;
    return Number(f.toFixed(1));
}

console.log(haroratOgir(36.6));
console.log(haroratOgir(-40));
console.log(haroratOgir(0));
console.log(haroratOgir(100));