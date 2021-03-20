export const fetchCategories = () => {
  return fetchWrapper("https://apirestaurant.mvlabs.it/api/categories", "GET");
};
export const fetchCategory = (id) => {
  return fetchWrapper(
    `https://apirestaurant.mvlabs.it/api/categories/${id}`,
    "GET"
  );
};
// chiamando così fetchCategorie e fetchCategory ti assicuri di essere autenticata, perchè passi attraverso il controllo della autorizzazione
export const fetchEveryItem = () => {
  return fetchWrapper("https://apirestaurant.mvlabs.it/api/products", "GET");
};
export const postLogin = (body) => {
  return fetchWrapper(
    "https://apirestaurant.mvlabs.it/api/login",
    "POST",
    body
  );
};
// postLogin fa una chimata di tipo POST e passa all'endpoit username e password
// quando facciamo la chiamata e gli passiamo i valori di usrn e pswd, gli passiamo i valori di this.state (da login.js)
// che contengono username e password.
// se corretti ci restiuisce un jwt con il quale possiamo allegramente visitare il sito
/**
@param{*}url
@param{*}method
@param{*}body
@returns
*/
export const fetchWrapper = (url, method, body) => {
  const jwt = localStorage.getItem("jwt");
  return fetch(url, {
    method: method,
    ...(body ? { body: JSON.stringify(body) } : null),
    headers: {
      ...(jwt ? { Authorization: "Bearer " + jwt } : null),
      ...(body ? { "Content-Type": "application/json" } : null),
    },
  }).then((response) => {
    if (response.headers.get("jwt")) {
      localStorage.setItem("jwt", response.headers.get("jwt"));
    }
    if (response.ok) {
      return response
        .clone()
        .json()
        .catch(() => response.text());
    } else {
      if (response.status == 401) {
        localStorage.removeItem("jwt");
      }
      throw new Error("Errore");
    }
  });
};
