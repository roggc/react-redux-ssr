# reactReduxSSR

for production purposes only you run **npm i --production** and then **npm run build** and you are ready to deploy/publish.

for developing you run **npm i** and then **npm run build** and then **npm run dev** and you are ready to develop. when you finish developing you run **npm run build**.

the reason for the first **npm run build** in development it is for having the output folders from **webpack** made. if we don't do that and run **npm run dev** straight ahead the first time it will crash because **nodemon** will not find those folders.

if that happens there is no problem, you run again **npm run dev** and the second time will not crash because the output folders (**dist** and **public**) will be there (with its respective files).

this project has been published to **heroku** and can be accessed (the site) through https://react-redux-ssr.herokuapp.com.

so this **react-redux-ssr** setup development kit it is ready for publishing/deploying on **nodejs** hosting services.
