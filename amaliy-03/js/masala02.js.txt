function sozniYashir(s) {
    if (s.length <= 2) {
        return s;
    }
    let birinchi = s[0];
    let oxirgi = s[s.length - 1];
    let yulduzchalar = "*".repeat(s.length - 2);
    return birinchi + yulduzchalar + oxirgi;
}

console.log(sozniYashir("parol"));
console.log(sozniYashir("ok"));
console.log(sozniYashir("javascript"));
console.log(sozniYashir("a"));