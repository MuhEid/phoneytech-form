This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This form was created for phone repair shop, the aim is register every phone repair operation in a database and send an email confirmation for it.

on the server it is run using pm2
`pm2 list` to get the app name nextjs-app
`npm run build` to re-build the frontend
`pm2 restart 0` to restart it by id
