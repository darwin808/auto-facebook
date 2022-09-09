<div align='center'>

# Automatic Facebook Messaging

</div>

## ⚡ Quickstart

### Install and run the app

```jsx
yarn install && yarn dev
```

### Edit the .env

```jsx
EMAIL=YOUR_EMAIL
PASS=YOUR_PASSWORD
MESSENGER=https://m.facebook.com/messages/read/?tid=cid.c.100*********************
```

### Copy and Past this in address bar of browser

```jsx
localhost:3000/api/messenger?q=your message
```

## 🎯 Features

- Message someone in facebook using rest api

## 💡 Goal of this Project

- Be able to message someone in facebook even AFK / applying CRON jobs

## ⚠️ Limitations

- Loading time approx ~10 seconds
- When deployed to production will error due to ip restriction of facebook (need to confirm first in facebook UI to proceed )

## Deploying to Production

- You can deploy the app to certain endpoint (heroku, aws, gcp, etc )

### Commands

```jsx
yarn build && yarn start
```
