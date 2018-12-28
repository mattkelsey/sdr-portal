import app from "./App";
const PORT = process.env.PORT || 4600;

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})