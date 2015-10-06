Learn Forward Website
=====================

This is the repository for Learn Forward's official presentation website.

The team behind it is:
* Paul Balogh - content creator, design
* Leo Budrincă - project coordination, quality assurance
* Cristian Dinu, Iulian Savin - web development

Special thanks to Marius Petcu for his help on setting up proper server rendering.


Installation
------------

```
git clone git@github.com:cdinu/learnfwd-website.git
cd learnfwd-website.git
```

Starting the website
---------

Development mode (includes hot reload)

```
npm start
```

then open http://localhost:3000

**Production**

```
NODE_ENV=production npm run postinstall && npm start
```

