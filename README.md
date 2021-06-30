
# Next.js Fullstack Boilerplate

A boilerplate with Next.js, NextAuth and Prisma.

## 🚀  Tech Stack

This project is currently using the following technologies:

- React, Next.js
- Chakra UI
- Prisma
- NextAuth
- Typescript

  
## ⚙️ Environment Variables

Required to connect with Prisma

`DATABASE_URL` 

Canonical URL of the website required for NextAuth.

`NEXTAUTH_URL`

Google Auth Setup

`GOOGLE_CLIENT_ID`
`GOOGLE_CLIENT_SECRET`

Magic Link Auth Setup 

`EMAIL_SERVER_USER`
`EMAIL_SERVER_PASSWORD`
`EMAIL_SERVER_HOST`
`MAIL_SERVER_PORT`
`EMAIL_FROM`
## ℹ️ How to use 

Installing with npm

```bash 
# Clone this repository
$ git clone https://github.com/rafaelmuttoni/next-auth-prisma

# Go into the repository
$ cd next-auth-prisma

# Install dependencies
$ npm i

# You have to setup a database and connect with Prisma to run the migrations. I recommend following Prisma's documentation.

# Run development server
$ npm run dev
```
    
## 📚 Documentation

[Next Auth Docs](https://next-auth.js.org/getting-started/introduction)

[Prisma Docs](https://www.prisma.io/docs/getting-started/)

  