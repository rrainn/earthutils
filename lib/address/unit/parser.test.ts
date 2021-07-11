import * as parser from "./parser";

const tests = [
	{
		"input": "Unit 123",
		"output": {
			"addr:unit": "123",
			"addr:unitname": "Unit"
		}
	},
	{
		"input": "UNIT 123",
		"output": {
			"addr:unit": "123",
			"addr:unitname": "Unit"
		}
	},
	{
		"input": "Unit 123 A",
		"output": {
			"addr:unit": "123 A",
			"addr:unitname": "Unit"
		}
	},
	{
		"input": "APT 123",
		"output": {
			"addr:unit": "123",
			"addr:unitname": "Apartment"
		}
	},
	{
		"input": "Apartment 123",
		"output": {
			"addr:unit": "123",
			"addr:unitname": "Apartment"
		}
	},
	{
		"input": "APARTMENT 123",
		"output": {
			"addr:unit": "123",
			"addr:unitname": "Apartment"
		}
	},
	{
		"input": "Bldg 3",
		"output": {
			"addr:unit": "3",
			"addr:unitname": "Building"
		}
	},
	{
		"input": "Spc 2",
		"output": {
			"addr:unit": "2",
			"addr:unitname": "Space"
		}
	},
	{
		"input": "Unit D",
		"output": {
			"addr:unit": "D",
			"addr:unitname": "Unit"
		}
	},
	{
		"input": "Apt 1-108",
		"output": {
			"addr:unit": "1-108",
			"addr:unitname": "Apartment"
		}
	},
	{
		"input": "unit 676",
		"output": {
			"addr:unit": "676",
			"addr:unitname": "Unit"
		}
	},
	{
		"input": "Ste 120",
		"output": {
			"addr:unit": "120",
			"addr:unitname": "Suite"
		}
	},
	{
		"input": "Bldg 2",
		"output": {
			"addr:unit": "2",
			"addr:unitname": "Building"
		}
	},
	{
		"input": "# 9",
		"output": {
			"addr:unit": "9",
			"addr:unitname": ""
		}
	},
	{
		"input": "# 5",
		"output": {
			"addr:unit": "5",
			"addr:unitname": ""
		}
	},
	{
		"input": "#5",
		"output": {
			"addr:unit": "5",
			"addr:unitname": ""
		}
	},
	{
		"input": "# B",
		"output": {
			"addr:unit": "B",
			"addr:unitname": ""
		}
	},
	{
		"input": "#B",
		"output": {
			"addr:unit": "B",
			"addr:unitname": ""
		}
	},
	{
		"input": "Apt F-24",
		"output": {
			"addr:unit": "F-24",
			"addr:unitname": "Apartment"
		}
	},
	{
		"input": "Spc 1",
		"output": {
			"addr:unit": "1",
			"addr:unitname": "Space"
		}
	},
	{
		"input": "# 6-26",
		"output": {
			"addr:unit": "6-26",
			"addr:unitname": ""
		}
	},
	{
		"input": "#6-26",
		"output": {
			"addr:unit": "6-26",
			"addr:unitname": ""
		}
	},
	{
		"input": "Unit 2-PH 1",
		"output": {
			"addr:unit": "2-PH 1",
			"addr:unitname": "Unit"
		}
	},
	{
		"input": "Bldg 2 Unit 227",
		"output": [
			{
				"addr:unit": "2",
				"addr:unitname": "Building"
			},
			{
				"addr:unit": "227",
				"addr:unitname": "Unit"
			}
		]
	},
	{
		"input": "Spc 4",
		"output": {
			"addr:unit": "4",
			"addr:unitname": "Space"
		}
	},
	{
		"input": "Spc GAR02",
		"output": {
			"addr:unit": "GAR02",
			"addr:unitname": "Space"
		}
	},
	{
		"input": "Spc PK61",
		"output": {
			"addr:unit": "PK61",
			"addr:unitname": "Space"
		}
	},
	{
		"input": "Ste 60",
		"output": {
			"addr:unit": "60",
			"addr:unitname": "Suite"
		}
	},
	{
		"input": "60",
		"output": {
			"addr:unit": "60",
			"addr:unitname": ""
		}
	},
	{
		"input": "Rear 1",
		"output": {
			"addr:unit": "1",
			"addr:unitname": "Rear"
		}
	},
	{
		"input": "Rear",
		"output": {
			"addr:unit": "",
			"addr:unitname": "Rear"
		}
	},
	{
		"input": "# L5-IMG-2",
		"output": {
			"addr:unit": "L5-IMG-2",
			"addr:unitname": ""
		}
	},
	{
		"input": "Spc PK3311",
		"output": {
			"addr:unit": "PK3311",
			"addr:unitname": "Space"
		}
	},
	{
		"input": "Bldg PARKING ST",
		"output": {
			"addr:unit": "PARKING ST",
			"addr:unitname": "Building"
		}
	},
	{
		"input": "Rear 1",
		"output": {
			"addr:unit": "1",
			"addr:unitname": "Rear"
		}
	},
	{
		"input": "Unit III-3-100",
		"output": {
			"addr:unit": "III-3-100",
			"addr:unitname": "Unit"
		}
	},
	{
		"input": "# 1/2",
		"output": {
			"addr:unit": "1/2",
			"addr:unitname": ""
		}
	},
	{
		"input": "# parking",
		"output": {
			"addr:unit": "parking",
			"addr:unitname": ""
		}
	},
	{
		"input": "# TRACT B",
		"output": {
			"addr:unit": "TRACT B",
			"addr:unitname": ""
		}
	},
	{
		"input": "# Parcel S",
		"output": {
			"addr:unit": "Parcel S",
			"addr:unitname": ""
		}
	},
	{
		"input": "# Unit T",
		"output": {
			"addr:unit": "T",
			"addr:unitname": "Unit"
		}
	},
	{
		"input": "# unit T",
		"output": {
			"addr:unit": "T",
			"addr:unitname": "Unit"
		}
	},

	// THE TESTS BELOW ARE NOT QUITE RIGHT. I THINK WE SHOULD FIND WHAT THE ABBRIVATIONS SHOULD BE AND FIX IT. THESE CONTAIN ELEMENTS NOT FOUND IN USPS DOCUMENTATION.
	{
		"input": "Pk 1",
		"output": {
			// "addr:unit": "1",
			// "addr:unitname": " " // NOT SURE WHAT TO PUT HERE
			"addr:unit": "Pk 1",
			"addr:unitname": ""
		}
	},
	{
		"input": "Gar #1",
		"output": {
			// "addr:unit": "1",
			// "addr:unitname": " " // NOT SURE WHAT TO PUT HERE
			"addr:unit": "Gar #1",
			"addr:unitname": ""
		}
	},
	{
		"input": "# area T",
		"output": {
			// "addr:unit": "T",
			// "addr:unitname": "Area"
			"addr:unit": "area T",
			"addr:unitname": ""
		}
	},
	{
		"input": "# Area T",
		"output": {
			// "addr:unit": "T",
			// "addr:unitname": "Area"
			"addr:unit": "Area T",
			"addr:unitname": ""
		}
	},
	{
		"input": "Tract K",
		"output": {
			// "addr:unit": "K",
			// "addr:unitname": " " // NOT SURE WHAT TO PUT HERE
			"addr:unit": "Tract K",
			"addr:unitname": ""
		}
	},
	{
		"input": "Util 1",
		"output": {
			// "addr:unit": "1",
			// "addr:unitname": " " // NOT SURE WHAT TO PUT HERE
			"addr:unit": "Util 1",
			"addr:unitname": ""
		}
	},
	{
		"input": "Gar 5",
		"output": {
			// "addr:unit": "5",
			// "addr:unitname": " " // NOT SURE WHAT TO PUT HERE
			"addr:unit": "Gar 5",
			"addr:unitname": ""
		}
	},
];

tests.forEach((testObj) => {
	test(`Should output ${JSON.stringify(testObj.output)} for ${testObj.input}`, () => {
		expect(parser.default(testObj.input)).toEqual(testObj.output);
	});
});
