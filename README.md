# Builder.IO CMS APP

App that fetches articles from a CMS with user authentication

-Prérequis au projet et installation-

Node.js v21.5.0
npm 10.2.4

Front:
-Next.js par installation automatique via la commande terminal npx create-next-app@latest

Dépendances:

-TailwindCSS
-AutoPrefixer
(Remarque: Tout deux sont proposés par défaut lors de la création d'un projet Node via des prompts y/n)

Back:
Express.js via la commande terminal $ npm init, puis $ npm install express (ou $ npm install express --no-save pour une installation temporaire)

Dépandances:
Body-Parser via la commande terminal $ npm install body-parser

-Structure du projet-

Front:
|
|-.next
|-node_modules
|-public
| |-next.svg
| |-vercel.svg
|
|-src
| |-favicon.ico
| |-globals.css
| |-layout.js
| |-page.js
|
|-env.local
|-.gitignore
|-jsonconfig.json
|-next.config.mjs
|-package-lock.json
|-package.json
|-postcss.config.js
|-tailwind.config.js

Back:
|
|-node_modules
|-public
| |-css
| | |-style.css
| |-js
| | |-login.js
| | |-register.js
| |-login.html
| |-register.html
|-app.js
|package-lock.json
|package.json
|server.js

-Explications du Projet-

Ce projet avait comme objectif de faire communiquer un back-end Express.js et un front-end Next.js afin d'abord d'inviter l'utilisateur à s'inscrire
afin de pouvoir consulter les différents articles du CMS Builder.io récupérés dans la partie front via une requête API get. Les données utilisateurs
sont stockées sur la session active de manière locale et ne sont donc pas uploadées sur une base de données telle que MongoDB ou MySQL par exemple.

-Impressions sur le projet-

Ce projet était la première fois que j'utilisais quelconque framework, donc utiliser deux/trois frameworks différents en un seul projet était un
véritable challenge pour moi. Cependant, malgré la difficulté de ce projet (relativement parlant par rapport à mon niveau), je suis très heureux
d'avoir pu accomplir une très grande partie des tâches demandées, et y ai pris beaucoup de plaisir ! Si je devais pointer du doigt des difficultées particulières que j'ai rencontré,
je dirai d'abord que le temps était la principale difficulté. En formation full-stack intensive de 9h à 17h, il m'était difficile de trouver le temps et la concentration
pour une longue session, sans compter toute la documentation nécéssaire à ma compréhension du fonctionnement des frameworks et des différents procédés à mettre en oeuvre.
Le second soucis est le fait que je n'ai malheureusement pas eu le temps de relier le back-end au front-end. Cependant, avec du temps, j'aurais pu joindre les deux via
du API Routing ainsi que des requêtes API post pour l'authentification des utilisateurs.
En conclusion, j'ai pris beaucoup de plaisir à coder ce projet malgré les différentes difficultés rencontrées, et je sens que j'ai vraiment pu progresser en tant que
développeur grâce a tout les concepts, frameworks, documents et challenges abordés le long de ce projet.
