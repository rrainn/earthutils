import * as standardize from "./standardize";

const tests = [
	{
		"input": undefined,
		"output": undefined
	},
	{
		"input": null,
		"output": undefined
	},
	{
		"input": "test",
		"output": undefined
	},
	{
		"input": "+1-123-456-7890",
		"output": "+1-123-456-7890"
	},
	{
		"input": "+1-1234567890",
		"output": "+1-123-456-7890"
	},
	{
		"input": "+11234567890",
		"output": "+1-123-456-7890"
	},
	{
		"input": "+1123-456-7890",
		"output": "+1-123-456-7890"
	},
	{
		"input": "123-456-7890",
		"output": undefined
	},
	{
		"input": "123-456-7890",
		"settings": {},
		"output": undefined
	},
	{
		"input": "1234567890",
		"settings": {"country": "US"},
		"output": "+1-123-456-7890"
	},
	{
		"input": "123-456-7890",
		"settings": {"country": "US"},
		"output": "+1-123-456-7890"
	},
];

tests.forEach((testObj) => {
	let testFunc;
	if (testObj.settings) {
		testFunc = () => standardize.default(testObj.input, testObj.settings);
	} else {
		testFunc = () => standardize.default(testObj.input);
	}

	test(`Should output ${testObj.output} for ${testObj.input}`, () => {
		expect(testFunc()).toEqual(testObj.output);
	});
});
