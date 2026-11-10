function engKopTakrorlangan(arr) {
    let chastota = {};
    let engKop = arr[0];
    let maxSoni = 0;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        chastota[element] = (chastota[element] || 0) + 1;
        if (chastota[element] > maxSoni) {
            maxSoni = chastota[element];
            engKop = element;
        }
    }
    return engKop;
}

console.log(engKopTakrorlangan([3, 7, 3, 1, 7, 3]));
console.log(engKopTakrorlangan(["a", "b", "b", "a"]));
console.log(engKopTakrorlangan([5, 5, 2, 1, 5]));
console.log(engKopTakrorlangan([42]));