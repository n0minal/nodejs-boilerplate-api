import app from "./app";

app.listen(process.env.PORT || 4200);

console.log(`Application started in port ${process.env.PORT || 4200}, enjoy your development!`)