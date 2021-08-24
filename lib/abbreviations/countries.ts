import * as fs from "fs";
import * as path from "path";

const data = fs.readFileSync(path.join(__dirname, "../data/countries.geojson"), "utf8");
const countries = JSON.parse(data);

export const CountryAbbreviations = countries.features.reduce((acc, country) => {
	const { properties } = country;
	const { NAME, POSTAL } = properties;
	acc[NAME] = POSTAL;
	return acc;
}, {});

export const CountryAbbreviationsInverse = Object.entries(CountryAbbreviations).reduce((obj, current: any) => {
	obj[current[1]] = current[0];

	return obj;
}, {});

export const CountryAbbreviationsCaps = Object.entries(CountryAbbreviations).reduce((obj, current: any) => {
	obj[current[0].toUpperCase()] = current[1];

	return obj;
}, {});
