import * as parser from "./parser";

const tests = [
	{
		"input": "123 South Washington Street",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "South Washington Street"
		}
	},
	{
		"input": "123 S Washington Street",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "South Washington Street"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "123 Washington Parkway Ste 14",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "Washington Parkway",
			"addr:unit": "14",
			"addr:unitname": "Suite"
		}
	},
	{
		"input": "123 Washington Parkway Ste #14",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "Washington Parkway",
			"addr:unit": "14",
			"addr:unitname": "Suite"
		}
	},
	{
		"input": "123 Washington Parkway - Ste #14",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "Washington Parkway",
			"addr:unit": "14",
			"addr:unitname": "Suite"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "123 Washington Parkway, Ste #14",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "Washington Parkway",
			"addr:unit": "14",
			"addr:unitname": "Suite"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "123 Washington Parkway #14",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "Washington Parkway",
			"addr:unit": "14",
			"addr:unitname": ""
		}
	},
	{
		"input": "123 WASHINGTON PARKWAY",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "Washington Parkway"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "123 WASHINGTON PKWY",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "Washington Parkway"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "",
		"output": {
		}
	},
	{
		"input": "",
		"output": {
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "6200 20th Street  Room 600",
		"output": {
			"addr:housenumber": "6200",
			"addr:street": "20th Street",
			"addr:unit": "600",
			"addr:unitname": "Room"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "6200 20th Street  ROOM 600",
		"output": {
			"addr:housenumber": "6200",
			"addr:street": "20th Street",
			"addr:unit": "600",
			"addr:unitname": "Room"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "6200 20th Street  RM 600",
		"output": {
			"addr:housenumber": "6200",
			"addr:street": "20th Street",
			"addr:unit": "600",
			"addr:unitname": "Room"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "6200 20th Street  RM. 600",
		"output": {
			"addr:housenumber": "6200",
			"addr:street": "20th Street",
			"addr:unit": "600",
			"addr:unitname": "Room"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "6200 20th Street  Rm. 600",
		"output": {
			"addr:housenumber": "6200",
			"addr:street": "20th Street",
			"addr:unit": "600",
			"addr:unitname": "Room"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "601 N. Martingale Rd. Ste. 105",
		"output": {
			"addr:housenumber": "601",
			"addr:street": "North Martingale Road",
			"addr:unit": "105",
			"addr:unitname": "Suite"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "19200 E 39th St S",
		"output": {
			"addr:housenumber": "19200",
			"addr:street": "East 39th Street S"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "11801 S Sam Houston Pkwy E",
		"output": {
			"addr:housenumber": "11801",
			"addr:street": "South Sam Houston Parkway E"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "601 N. Martingale Rd. PH #105",
		"output": {
			"addr:housenumber": "601",
			"addr:street": "North Martingale Road",
			"addr:unit": "105",
			"addr:unitname": "Penthouse"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "601 N. Martingale Rd. BLDG #105",
		"output": {
			"addr:housenumber": "601",
			"addr:street": "North Martingale Road",
			"addr:unit": "105",
			"addr:unitname": "Building"
		},
		"options": {
			"standardizeStreet": true
		}
	},
];

tests.forEach((testObj) => {
	test("Should have correct direction abbreviations", () => {
		expect(parser.default(testObj.input, testObj.options || {})).toMatchObject(testObj.output);
	});
});
