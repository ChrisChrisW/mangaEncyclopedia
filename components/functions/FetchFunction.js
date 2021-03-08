// stocker l'API dans getData
// Exporter la fonction permettant d'obtenir l'API sous forme JSON
export async function getData(url, setData, setIsLoading) {
  await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
  })
    .then((response) => response.json()) // Convertir le contenu en Json
    .then(
      function (response) {
        setData(response);
        setIsLoading(false); // Chargement faux
      },
      function (error) {
        console.log("Error => " + error);
      }
    );
  //console.log("Result response => " + result);
}
