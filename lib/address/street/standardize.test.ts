import * as parser from "./standardize";

const tests = [
	{
		"input": "Headquarters Plaza",
		"output": "Headquarters Plaza"
	},
	{
		"input": "S Headquarters Plaza",
		"output": "South Headquarters Plaza"
	},
	{
		"input": "S. Headquarters Plaza",
		"output": "South Headquarters Plaza"
	},
	{
		"input": "Headquarters Ave",
		"output": "Headquarters Avenue"
	},
	{
		"input": "Headquarters AVE",
		"output": "Headquarters Avenue"
	},
	{
		"input": "Headquarters AVEN",
		"output": "Headquarters Avenue"
	},
	{
		"input": "S Headquarters Ave",
		"output": "South Headquarters Avenue"
	},
	{
		"input": "S HEADQUARTERS AVE",
		"output": "South Headquarters Avenue"
	},
	{
		"input": "S HEADQUARTERS AVE.",
		"output": "South Headquarters Avenue"
	},
	{
		"input": "S HEADQUARTERS Ave.",
		"output": "South Headquarters Avenue"
	},
	{
		"input": "S HEADQUARTERS AVE -",
		"output": "South Headquarters Avenue"
	},
	{
		"input": "S HEADQUARTERS AVE-",
		"output": "South Headquarters Avenue"
	},
	{
		"input": "S HEADQUARTERS AVE ,",
		"output": "South Headquarters Avenue"
	},
	{
		"input": "S HEADQUARTERS AVE,",
		"output": "South Headquarters Avenue"
	},
	{
		"input": "McKinley Ave",
		"output": "McKinley Avenue"
	},
	{
		"input": "McKinley NW",
		"output": "McKinley NW"
	},
	{
		"input": "US-1",
		"output": "US-1"
	},
	{
		"input": "NJ-18",
		"output": "NJ-18"
	},
	{
		"input": "Meriden-Waterbury Turnpike",
		"output": "Meriden-Waterbury Turnpike"
	},
	{
		"input": "E  Montclair",
		"output": "East Montclair"
	}
];

tests.forEach((testObj) => {
	test(`Should output ${testObj.output} for ${testObj.input}`, () => {
		expect(parser.default(testObj.input)).toBe(testObj.output);
	});
});
