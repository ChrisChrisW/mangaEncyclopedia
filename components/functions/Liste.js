//Fonction créer la liste de pages
export function ListPage(data) {
  let picker = [];
  // Une page = 10 articles
  for (let i = 0; i < data.meta.count / 10; i++) {
    picker.push({ label: "Page " + (i + 1), value: i * 10 }); // label +1 parce que la page commence à 0
  }
  return picker; // Retourne le tableau de picker
}

export function ListYear(getYear) {
  let years = [];
  for (let i = 1930; i <= getYear + 1; i++) {
    //
    years.push({ label: i + "'s", value: i });
  }
  return years; // Retourne le tableau des années
}

export function ListGenre() {
  let genres = [
    {
      label: "Comedy",
      value: "comedy",
    },
    {
      label: "Fantasy",
      value: "fantasy",
    },
    {
      label: "Romance",
      value: "romance",
    },
    {
      label: "Action",
      value: "action",
    },
    {
      label: "School life",
      value: "school-life",
    },
    {
      label: "Drama",
      value: "drama",
    },
    {
      label: "Adventure",
      value: "adventure",
    },
    {
      label: "Slice of life",
      value: "slice-of-life",
    },
    {
      label: "Shoujo ai",
      value: "shoujo-ai",
    },
    {
      label: "Science fiction",
      value: "science-fiction",
    },
    {
      label: "Yaoi",
      value: "yaoi",
    },
    {
      label: "Ecchi",
      value: "ecchi",
    },
    {
      label: "Sports",
      value: "sports",
    },
    {
      label: "Japan",
      value: "japan",
    },
    {
      label: "Historical",
      value: "historical",
    },
    {
      label: "Earth",
      value: "earth",
    },
    {
      label: "Thriller",
      value: "thriller",
    },
    {
      label: "Harem",
      value: "harem",
    },
    {
      label: "Mystery",
      value: "mystery",
    },
    {
      label: "Magic",
      value: "magic",
    },
    {
      label: "Present",
      value: "present",
    },
    {
      label: "Asia",
      value: "asia",
    },
    {
      label: "Kids",
      value: "kids",
    },
    {
      label: "Music",
      value: "music",
    },
    {
      label: "Horror",
      value: "horror",
    },
    {
      label: "Mecha",
      value: "mecha",
    },
    {
      label: "Psychological",
      value: "psychological",
    },
    {
      label: "Martial arts",
      value: "martial-arts",
    },
    {
      label: "Shounen ai",
      value: "shounen-ai",
    },
    {
      label: "Super power",
      value: "super-power",
    },
    {
      label: "Demon",
      value: "demon",
    },
    {
      label: "Supernatural",
      value: "supernatural",
    },
    {
      label: "Shounen",
      value: "shounen",
    },
    {
      label: "Military",
      value: "military",
    },
    {
      label: "Seinen",
      value: "seinen",
    },
    {
      label: "Fantasy world",
      value: "fantasy-world",
    },
    {
      label: "Plot continuity",
      value: "plot-continuity",
    },
    {
      label: "Violence",
      value: "violence",
    },
    {
      label: "Parody",
      value: "parody",
    },
    {
      label: "Motorsport",
      value: "motorsport",
    },
    {
      label: "Cars",
      value: "cars",
    },
    {
      label: "Samurai",
      value: "samurai",
    },
    {
      label: "Stereotypes",
      value: "stereotypes",
    },
    {
      label: "Battle royale",
      value: "battle-royale",
    },
    {
      label: "GunFights",
      value: "gunfights",
    },
    {
      label: "Space battles",
      value: "space-battles",
    },
    {
      label: "Tone changes",
      value: "tone-changes",
    },
    {
      label: "Swordplay",
      value: "swordplay",
    },
    {
      label: "Angst",
      value: "angst",
    },
    {
      label: "Anthropomorphism",
      value: "anthropomorphism",
    },
    {
      label: "Detective",
      value: "detective",
    },
    {
      label: "Henshin",
      value: "henshin",
    },
    {
      label: "Parasite",
      value: "parasite",
    },
    {
      label: "Vampire",
      value: "vampire",
    },
    {
      label: "Virtual reality",
      value: "virtual-reality",
    },
    {
      label: "Zombie",
      value: "zombie",
    },
    {
      label: "Josei",
      value: "josei",
    },
    {
      label: "Anti war",
      value: "anti-war",
    },
    {
      label: "Conspiracy",
      value: "conspiracy",
    },
    {
      label: "Cooking",
      value: "cooking",
    },
    {
      label: "Crime",
      value: "crime",
    },
    {
      label: "Disaster",
      value: "disaster",
    },
    {
      label: "Family",
      value: "family",
    },
    {
      label: "Friendship",
      value: "friendship",
    },
    {
      label: "Gender Bender",
      value: "gender-bender",
    },
    {
      label: "Politics",
      value: "politics",
    },
    {
      label: "Parental abandonment",
      value: "parental-abandonment",
    },
    {
      label: "Religion",
      value: "religion",
    },
    {
      label: "Revenge",
      value: "revenge",
    },
    {
      label: "Rotten world",
      value: "rotten-world",
    },
    {
      label: "Slavery",
      value: "Slavery",
    },
    {
      label: "The arts",
      value: "the-arts",
    },
  ];
  return genres;
}
