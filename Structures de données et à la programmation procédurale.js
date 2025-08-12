// Contient deux algorithmes :
// 1. Somme des éléments distincts entre deux ensembles
// 2. Produit scalaire et vérification d’orthogonalité

// Problème 1 : Somme des éléments distincts

/**
 * Calcule la somme des éléments présents dans l’un ou l’autre des deux ensembles,
 * mais pas dans les deux (éléments distincts).
 * @param {number[]} set1 - Premier tableau d'entiers.
 * @param {number[]} set2 - Deuxième tableau d'entiers.
 * @returns {number} - Somme des éléments distincts.
 */
function sumOfDistinctElements(set1, set2) {
  let sum = 0;

  // Ajouter les éléments de set1 qui ne sont pas dans set2
  for (let i = 0; i < set1.length; i++) {
    if (!set2.includes(set1[i])) {
      sum += set1[i];
    }
  }

  // Ajouter les éléments de set2 qui ne sont pas dans set1
  for (let j = 0; j < set2.length; j++) {
    if (!set1.includes(set2[j])) {
      sum += set2[j];
    }
  }

  return sum;
}

// Exemple :
// sumOfDistinctElements([3, 1, 7, 9], [2, 4, 1, 9, 3]) ➞ 13


// Problème 2 : Produit scalaire et orthogonalité

/**
 * Procédure : Calcule le produit scalaire de deux vecteurs.
 * Le résultat est stocké dans une variable externe ps.
 * @param {number[]} v1 - Premier vecteur.
 * @param {number[]} v2 - Deuxième vecteur.
 * @param {object} result - Objet contenant la variable ps.
 */
function dot_product(v1, v2, result) {
  result.ps = 0;
  for (let i = 0; i < v1.length; i++) {
    result.ps += v1[i] * v2[i];
  }
}

/**
 * Vérifie si deux vecteurs sont orthogonaux en utilisant une procédure.
 * @param {number[]} v1 - Premier vecteur.
 * @param {number[]} v2 - Deuxième vecteur.
 * @returns {boolean} - true si orthogonaux, false sinon.
 */
function areOrthogonalWithProcedure(v1, v2) {
  const result = { ps: 0 };
  dot_product(v1, v2, result);
  return result.ps === 0;
}

/**
 * Fonction : Calcule et retourne le produit scalaire de deux vecteurs.
 * @param {number[]} v1 - Premier vecteur.
 * @param {number[]} v2 - Deuxième vecteur.
 * @returns {number} - Produit scalaire.
 */
function dot_product_function(v1, v2) {
  let ps = 0;
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}

/**
 * Vérifie si deux vecteurs sont orthogonaux en utilisant une fonction.
 * @param {number[]} v1 - Premier vecteur.
 * @param {number[]} v2 - Deuxième vecteur.
 * @returns {boolean} - true si orthogonaux, false sinon.
 */
function areOrthogonalWithFunction(v1, v2) {
  return dot_product_function(v1, v2) === 0;
}

/**
 * Vérifie l’orthogonalité pour n paires de vecteurs.
 * Utilise une boucle imbriquée et permet de choisir entre procédure ou fonction.
 * @param {Array<Array<number>>} vectors1 - Tableau contenant n vecteurs.
 * @param {Array<Array<number>>} vectors2 - Tableau contenant n vecteurs.
 * @param {string} mode - "procedure" ou "function"
 * @returns {boolean[]} - Tableau de booléens indiquant l’orthogonalité de chaque paire.
 */
function checkOrthogonality(vectors1, vectors2, mode = "function") {
  const results = [];

  for (let i = 0; i < vectors1.length; i++) {
    const v1 = vectors1[i];
    const v2 = vectors2[i];

    if (mode === "procedure") {
      results.push(areOrthogonalWithProcedure(v1, v2));
    } else {
      results.push(areOrthogonalWithFunction(v1, v2));
    }
  }

  return results;
}

//  Exemple :
// const list1 = [[1, 0], [2, 3], [0, 1]];
// const list2 = [[0, 1], [3, -2], [1, 0]];
// console.log(checkOrthogonality(list1, list2, "function")); // ➞ [true, true, true]
