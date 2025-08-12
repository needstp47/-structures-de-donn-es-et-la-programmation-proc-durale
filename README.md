utils.js – Algorithmes mathématiques

Ce module contient deux algorithmes principaux :

Problème 1 : Somme des éléments distincts

Objectif
Étant donné deux ensembles (tableaux), calculer la somme des éléments présents dans l’un ou l’autre, mais pas dans les deux.

Fonction : `sumOfDistinctElements(set1, set2)`
- Utilise des boucles pour comparer les éléments.
- Additionne les éléments uniques à chaque ensemble.

Exemple :
js
sumOfDistinctElements([3, 1, 7, 9], [2, 4, 1, 9, 3]); // ➞ 13

Problème 2 : Produit scalaire et orthogonalité

Objectif
Déterminer si deux vecteurs sont orthogonaux (produit scalaire nul).

Procédure : dot_product(v1, v2, result)
- Calcule le produit scalaire et stocke le résultat dans result.ps.
  
Fonction : dot_product_function(v1, v2)
- Retourne directement le produit scalaire.
  
Vérification :
- areOrthogonalWithProcedure(v1, v2)
- areOrthogonalWithFunction(v1, v2)
  
Vérification multiple :
- checkOrthogonality(vectors1, vectors2, mode)
- mode peut être "procedure" ou "function"
  
Exemple :
checkOrthogonality([[1, 0], [2, 3]], [[0, 1], [3, -2]], "function");
// ➞ [true, true]

checkOrthogonality([[1, 0], [2, 3]], [[0, 1], [3, -2]], "function");
// ➞ [true, true]



