function uzunlikBoyichaSarala(s) {
    let sozlar = s.split(" ");
    sozlar.sort((a, b) => a.length - b.length);
    return sozlar.join(" ");
}

console.log(uzunlikBoyichaSarala("javascript veb va html"));
console.log(uzunlikBoyichaSarala("salom dunyo"));
console.log(uzunlikBoyichaSarala("a bb ccc"));
console.log(uzunlikBoyichaSarala("bir"));