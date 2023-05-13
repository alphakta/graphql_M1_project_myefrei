# graphql_M1_project_myefrei
Projet : reproduction partiel du back end de la plateforme de My Efrei

# Installation
Pour installer l'application, commencez par cloner le dépôt depuis Github :
```bash
git clone https://github.com/username/nom-de-l-application.git
```

Ensuite, installez les dépendances en utilisant npm :

```bash
cd graphql_M1_project_myefrei
npm install
```

# Configuration
- Base de données SQL
- Initialisation de Prisma avec la db
- Ajout de variables d'environnement comme suit : 
```bash
PROTOCOL=<protocol> // http
HOST=<localhost> //localhost
PORT=<port> //4000
DATABASE_URL=mysql://<username>:<password>@127.0.0.1:3306/<name_db>
ACCESS_TOKEN_SECRET=<token> //4846AZE6Z5AE4ZA52DQS3DSQ
```

# Utilisation
Pour lancer l'application, utilisez la commande suivante :
```bash
npm run start
```
