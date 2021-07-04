# earthutils

## Summary

This NPM package contains utilities for mapping based applications.

## Install

```
$ npm install earthutils
```

## API

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
