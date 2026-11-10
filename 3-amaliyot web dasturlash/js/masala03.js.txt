function sozlarUzunligi(arr) {
    let natija = [];
    for (let i = 0; i < arr.length; i++) {
        natija.push(arr[i].length);
    }
    return natija;
}

console.log(sozlarUzunligi(["veb", "html", "css"]));
console.log(sozlarUzunligi([""]));
console.log(sozlarUzunligi(["frontend", "backend"]));
console.log(sozlarUzunligi([]));