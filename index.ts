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
app.get('/countries/name', (req, res) => {
    const countries = Country.getAllCountries().map((country) => country.name);
    res.send(countries);
});
app.get('/countries/:countryId', (req, res) => {
    const country = Country.getCountryByCode(req.params.countryId);
    res.send(country?.name);
});
app.get('/countries/:country', (req, res) => {
    const country = Country.getAllCountries().find((country) => country.name.toLowerCase() === req.params.country.toLowerCase());
    res.send(country?.isoCode);
});



app.get('/states', (req, res) => {
    const states = State.getAllStates();
    res.send(states);
});
app.get('/states/name', (req, res) => {
    const states = State.getAllStates().map((state) => state.name);
    res.send(states);
});
app.get('/states/:stateId', (req, res) => {
    const state = State.getStateByCode(req.params.stateId);
    res.send(state?.name);
});
app.get('/states/:state', (req, res) => {
    const state = State.getAllStates().find((state) => state.name.toLowerCase() === req.params.state.toLowerCase());
    res.send(state?.isoCode);
});

app.get('/states/country/:countryId', (req, res) => {
    const states = State.getStatesOfCountry(req.params.countryId);
    res.send(states);
});


app.get('/cities', (req, res) => {
    const cities = City.getAllCities();
    res.send(cities);
});
app.get('/cities/name', (req, res) => {
    const cities = City.getAllCities().map((city) => city.name);
    res.send(cities);
});


app.get('/cities/:stateId/:countryId', (req, res) => {
    const cities = City.getCitiesOfState(req.params.countryId , req.params.stateId);
    res.send(cities);
});

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});