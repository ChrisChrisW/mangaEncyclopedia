import { AlertMsg } from "./Alerte";

// Fonction interne qui permet de revenir sur la page 1 (c-a-d page = 0)
function GoFirstPage(setPage, setFirstPage, setLastPage) {
  setPage(0); // Revenir à la première page
  setFirstPage(true);
  setLastPage(false);
}
// Fonction interne changer de page lorsque ce n'est pas la première ou dernière page
function ChangePage(setFirstPage, setLastPage) {
  setFirstPage(false);
  setLastPage(false);
}

// Fonction pour choisir la saison dans Upcoming
export function DifferentSeason(
  value,
  setSelectedIndex,
  setSeason,
  setPage,
  setFirstPage,
  setLastPage
) {
  setSelectedIndex(value);
  switch (value) {
    case 0:
      setSeason("spring");
      break;
    case 1:
      setSeason("summer");
      break;
    case 2:
      setSeason("fall");
      break;
    default:
      setSeason("winter");
      break;
  }
  GoFirstPage(setPage, setFirstPage, setLastPage);
}
// Fonction pourt transmettre l'année dans upcoming
export function ChangeYear(value, setYear, setPage, setFirstPage, setLastPage) {
  setYear(parseInt(value)); // Convertir value string to int
  GoFirstPage(setPage, setFirstPage, setLastPage);
}
// Fonction pour ajouter du texte dans la balise SearchBar
export function ChangeText(
  text,
  setPage,
  setFirstPage,
  setLastPage,
  setSearch
) {
  // Condition modifiant le contenu de la variable search
  if (text) {
    GoFirstPage(setPage, setFirstPage, setLastPage);
    setSearch(text);
  } else {
    setSearch("");
  }
}
// Fonction pour aller à la page précédente
export function LimitFirstPage(page, setPage, setFirstPage, setLastPage) {
  // Vérifier si l'user n'est pas sur la première page
  if (page == 10) {
    setPage((previousPage) => previousPage - 10);
    setFirstPage(true); // Disabled le button previous
    AlertMsg("This is a first page.");
  } else if (page > 0) {
    setPage((previousPage) => previousPage - 10);
    ChangePage(setFirstPage, setLastPage);
  } else {
    setFirstPage(true); // Disabled le button previous
    AlertMsg("This is a first page.");
  }
}
// Fonction pour aller à la page suivante
export function LimitLastPage(page, setPage, data, setFirstPage, setLastPage) {
  // Vérifier si l'user n'est pas sur la dernière page
  if (page + 10 > data.meta.count - 10) {
    setPage((nextPage) => nextPage + 10);
    setLastPage(true); // Disabled le button next
    AlertMsg("This is a last page.");
  } else if (page >= 0) {
    setPage((nextPage) => nextPage + 10);
    ChangePage(setFirstPage, setLastPage);
  } else {
    setLastPage(true);
    AlertMsg("This is a last page.");
  }
}
// Fonction pour transmettre le numéro de page
export function SelectPage(value, setPage, data, setFirstPage, setLastPage) {
  setPage(parseInt(value)); // Convertir value string to int
  if (parseInt(value) > data.meta.count - 10) {
    setLastPage(true); // Disabled le button suivant si la page > max page
    setFirstPage(false);
  } else if (parseInt(value) <= 0) {
    setFirstPage(true); // Disabled le button précédent si la page = 0
    setLastPage(false);
  } else {
    ChangePage(setFirstPage, setLastPage);
  }
}
// Fonction pour chercher par genre
export function SelectGenre(
  value,
  setSearch,
  setPage,
  setFirstPage,
  setLastPage
) {
  setSearch(value); // Convertir value string to int
  GoFirstPage(setPage, setFirstPage, setLastPage);
}
