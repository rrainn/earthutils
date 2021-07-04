# earthutils

## Summary

This NPM package contains utilities for mapping based applications.

## Install

```
$ npm install earthutils
```

## API

### Direction Abbreviations

```js
const earthutils = require("earthutils");

console.log(earthutils.DirectionAbbreviations.DirectionAbbreviations);
/*
{
	"N": "North",
	"E": "East",
	"S": "South",
	"W": "West"
}
*/

console.log(earthutils.DirectionAbbreviations.DirectionAbbreviationsInverse);
/*
{
	"North": "N",
	"East": "E",
	"South": "S",
	"West": "W"
}
*/
```

### Street Standardize

```js
const earthutils = require("earthutils");

console.log(earthutils.StreetStandardize("S Headquarters Plaza")); // South Headquarters Plaza
console.log(earthutils.StreetStandardize("Headquarters Plaza")); // Headquarters Plaza
```

### Address Parser

```js
const earthutils = require("earthutils");

console.log(earthutils.AddressParser("123 Headquarters Plaza"));
/*
{
	"addr:housenumber": "123",
	"addr:street": "Headquarters Plaza"
}
*/

console.log(earthutils.AddressParser("123 Headquarters Plaza Ste 12"));
/*
{
	"addr:housenumber": "123",
	"addr:street": "Headquarters Plaza",
	"addr:unit": "12",
	"addr:unitname": "Suite"
}
*/

console.log(earthutils.AddressParser("123 S Headquarters Plaza", {"standardizeStreet": true})); // `standardizeStreet` will run `addr:street` through the Street Standardize function automatically
/*
{
	"addr:housenumber": "123",
	"addr:street": "South Headquarters Plaza"
}
*/
```
