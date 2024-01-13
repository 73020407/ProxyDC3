# ProxyDC

Le projet se base sur NodeJS (Express) et VueJs 3.

Base de données: **Postgresql** qui permet de sauvegarder le dossier de compétence au format JSON et avoir la flexibilité d'ajouter simplement de nouvelles sections. Les informations lié au dossier (nom, prénom, etc) sont dans des colonnes spécifiques.

## Installation

```sh
npm install
```

### Lancement en local

Permet de relancer le serveur pour VueJS à chaque modification de fichier:
```sh
npm run dev
```

Pour lancer le serveur NodeJS-Express
```sh
nodejs server.js
```

Note: actuellement la partie Node-backoffice n'est pas reliée à VueJS a cause du blocage sur vue-router.

### Compilation pour la production (minify)

```sh
npm run build
```
