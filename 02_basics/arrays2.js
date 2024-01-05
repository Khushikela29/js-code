const Movies = ["KKHH", "KKKG", "DDLJ"]
const Series = ["Scam 2003", "My Demon"]

// Movies.push(Series)
// console.log(Movies);

const New = Movies.concat(Series)
console.log(New);

const indv = [...Movies, ...Series]
console.log(indv);

const Songs = ["pal", "jeena jeena", "husn", ["apna banale", "chaleya"]]
const NewSong = Songs.flat(Infinity)
console.log(NewSong);


//isArray , from , of
console.log(Array.isArray("Khushi"));
console.log(Array.from("Khushi"));