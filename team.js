const teamMemmbers = [
  {
    name: "Ilies",
    surname: "Guellaf",
    age: 21,
    city: "Los Montesinos",
    hobby: "Dibujar",
    favoriteFood: "Ensaladilla rusa",
    favoriteVideoGame: "Pokemon HeartGold",
    favoriteFilm: "Blade Runner 2049",
    favoriteBook: "Manga:PunPun",
    petName: "",
  },
  {
    name: "Wilmer",
    surname: "Salazar",
    age: 26,
    city: "Madrid",
    hobby: "Leer",
    favoriteFood: "Pizza",
    favoriteVideoGame: "Luigi's Mansion",
    favoriteFilm: "La vida es bella",
    favoriteBook: "El principito",
    petName: "",
  },
  {
    name: "Nicolae Alexandru",
    surname: "Casiean",
    age: 25,
    city: "Valencia",
    hobby: "Gaming",
    favoriteFood: "Hamburger",
    favoriteVideoGame: "Valorant",
    favoriteFilm: "Coco",
    favoriteBook: "Harry Potter el misterio de azkaban",
    petName: "Dog: rocky. Cat:Della",
  },
  {
    name: "Anabel",
    surname: "Castillo",
    age: 27,
    city: "Cádiz",
    hobby: "Crossfit",
    favoriteFood: "Pizza",
    favoriteVideoGame: "Kingdom Hearts",
    favoriteFilm: "Pesadilla antes de Navidad",
    favoriteBook: "Canción de Hielo y Fuego",
    petName: "",
  },

];

  // Print the team in age order (name age). Wilmer

  teamMemmbers.sort((a, b) => a.age - b.age);

  teamMemmbers.forEach(member => {
    console.log(`${member.name} ${member.age}`);
  });



//Print the team middle age. Wilmer

const sumOfAges = teamMemmbers.reduce((sum, member) => sum + member.age, 0);


const averageAge = sumOfAges / teamMemmbers.length;

console.log("La edad promedio del equipo es: " + averageAge);


=======
];
