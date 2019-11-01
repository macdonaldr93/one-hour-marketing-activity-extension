# 1 Hour Marketing Activity Extension Workshop

Build a Shopify marketing activity extension in 1 hour.

## Workshop

### Introduction

#### Tools

You’ll use several frameworks, tools, and libraries to build your app. You should need only a general knowledge and understanding of them to complete this tutorial. We use many of these tools at Shopify to build our own apps and we believe this technology stack will help you get up and running fast.

##### Node.js

Node.js is an open-source, cross-platform JavaScript run-time environment. You’ll use it to create a server to host your app.

##### Koa

Koa is a framework for quickly setting up web applications and APIs.

##### ngrok

[ngrok](https://ngrok.com/) is a command-line tool for secure introspectable tunnels to localhost. You’ll use it to expose your local web server publicly.

##### Postman

[Postman](https://www.getpostman.com/) is a tool for API development. It provides a UI to quickly and easily send REST, SOAP, and GraphQL requests.

### Part 1 - Setup a Koa web application

1. `npm init`
2. entry point: server.js
3. `npm install --save koa dotenv isomorphic-fetch`
4. Create server.js file
5. Fill in the [server.js file](part-1-setup-koa-web-app/server.js)
6. Make a GET request using Postman

### Part 2 - Connect your app with Shopify

1. Create a partners account with Shopify at https://www.shopify.com/partners
2. Setup and run ngrok: `npm install ngrok -g` and `ngrok http 3000`
3. Create a Shopify app: URL is from ngrok and `https://YOUR_NGROK_ADDRESS.io/auth/callback` for whitelist
4. Create `.env` file:

```
SHOPIFY_API_KEY='YOUR API KEY FROM SHOPIFY PARTNERS DASHBOARD'
SHOPIFY_API_SECRET_KEY='YOUR API SECRET KEY FROM SHOPIFY PARTNERS DASHBOARD'
```

5. Setup app for oauth: `npm install --save @shopify/koa-shopify-auth koa-session`
6. Fill in the [server.js file](part-2-connect-app-shopify/server.js)
7. Auth your app `https://YOUR_NGROK_ADDRESS.io/auth?shop=YOUR_SHOPIFY_STORE.myshopify.com`

### Part 3 - Add the marketing activity extension to your app

1. Add marketing activities extension to your app in partners dashboard

> NOTE: We need to approve your actvity before it will show up

2. Add a router to Koa `npm install --save @koa/router`

3. Fill in the [server.js file](part-3-marketing-activity-extension/server.js)

### Part 4 - Bonus stuff

1. Verify webhooks
2. Save a marketing activity
3. Update a marketing activity status

## Resources

### Help docs

- [Marketing activities](https://help.shopify.com/en/api/embedded-apps/app-extensions/shopify-admin/marketing-activities)

### Tutorials

- [Build a Shopify App with Node.js and React](https://developers.shopify.com/tutorials/build-a-shopify-app-with-node-and-react)

### Blog posts

- [Shopify Marketing: How and Why You Should Integrate Your App](https://www.shopify.com/partners/blog/shopify-marketing)
