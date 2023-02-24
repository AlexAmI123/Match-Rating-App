# Match-Rating-App
An App based on a Ruby Rails API and a React front-end. Created as a way to learn Rails for an internship.

###To start the app up you need two terminals:

First, start the API, run:
```
rails s
```

Second, start the front-end, run:
```
npm start
```

Then open ```http://localhost:4000/``` in a browser of your choosing.

Enjoy adding Reviews and rating Matches!


###Additional info:

As it stands, to add matches into the db, you need to use postman and use post requests like the following:

POST to ```http://localhost:3000/api/v1/matches.json```:

```
{
    "name": "Croatia VS Morocco 2022 WC",
    "c1alpha2": "ar",
    "c2alpha2": "fr"
}
```