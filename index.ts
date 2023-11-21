import express from 'express';
import { Country, State, City} from 'country-state-city';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());


app.get('/countries', (req, res) => {
    console.log("countries");
    const countries = Country.getAllCountries();
    res.send(countries);
});

app.get('/states', (req, res) => {
    const states = State.getAllStates();
    res.send(states);
});

app.get('/cities', (req, res) => {
    const cities = City.getAllCities();
    res.send(cities);
});

app.get('/states/:countryId', (req, res) => {
    const states = State.getStatesOfCountry(req.params.countryId);
    res.send(states);
});

app.get('/cities/:stateId/:countryId', (req, res) => {
    const cities = City.getCitiesOfState(req.params.countryId , req.params.stateId);
    res.send(cities);
});

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});