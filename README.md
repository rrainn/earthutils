# earthutils

## Summary

This NPM package contains utilities for mapping based applications.

## Install

```
$ npm install earthutils
```

## API

```js
const directionAbbreviations = require("earthutils/abbreviations/direction"); // TODO need to verify that this is accurate

console.log(directionAbbreviations.DirectionAbbreviations);
/*
{
	"N": "North",
	"E": "East",
	"S": "South",
	"W": "West"
}
*/

console.log(directionAbbreviations.DirectionAbbreviationsInverse);
/*
{
	"North": "N",
	"East": "E",
	"South": "S",
	"West": "W"
}
*/
```
