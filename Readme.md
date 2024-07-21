
# Email Classifier

this application allow user to authenticate and allow then to access and classify their email with the labels using openai api.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Agastya18/Email-Classifier.git
```

Go to the project directory

```bash
  cd Email-Classifier
```

Install dependencies in both frondend and backend

```bash
  npm install
```

replace the .env-sample with .env 

```bash
NODE_ENV=development
PORT=8001
SESSION_SECRET=***
GOOGLE_CLIENT_ID=***
GOOGLE_CLIENT_SECRET=***
GOOGLE_REDIRECT_URI=***
```

Go to root and run

```bash
  npm run dev
```

Go to frondend and run 

```bash
  npm run dev
```


## API Reference

#### Get all emails

```http
  GET /emails/get-email
```


#### Get all classified email

```http
  GET /emails/classify
  ```

  #### Logout

```http
  GET /logout
  ```



## Features

- acces mail on your website
- limit the number of mail
- label their priority



## Screenshots

- Auth page

![App Screenshot](https://i.ibb.co/p1ZGBBD/1ec.png)

![App Screenshot](https://i.ibb.co/r376vR5/2ec.png)


- all email page

![App Screenshot](https://i.ibb.co/rv1rszZ/3ec.png)

- specific email page

![App Screenshot](https://i.ibb.co/s1sfSKQ/4ec.png)


## Deployment Artical (by me)

[Documentation](https://medium.com/@agastyagaur/deploying-a-mern-stack-application-on-a-unified-server-a-step-by-step-guide-to-cost-free-hosting-a9c2eb0e23a1)














