// https://pe.usps.com/text/pub28/28apc_002.htm
const suffixes = [
	{
		"name": "Alley",
		"abbreviations": [
			"ALLEE",
			"ALLEY",
			"ALLY",
			{"value": "ALY", "primary": true}
		]
	},
	{
		"name": "Anex",
		"abbreviations": [
			"ANEX",
			"ANNEX",
			"ANNX",
			{"value": "ANX", "primary": true}
		]
	},
	{
		"name": "Arcade",
		"abbreviations": [
			"ARCADE",
			{"value": "ARC", "primary": true}
		]
	},
	{
		"name": "Avenue",
		"abbreviations": [
			"AV",
			"AVEN",
			"AVENU",
			"AVENUE",
			"AVN",
			"AVNUE",
			{"value": "AVE", "primary": true}
		]
	},
	{
		"name": "Bayou",
		"abbreviations": [
			"BAYOO",
			"BAYOU",
			{"value": "BYU", "primary": true}
		]
	},
	{
		"name": "Beach",
		"abbreviations": [
			"BEACH",
			{"value": "BCH", "primary": true}
		]
	},
	{
		"name": "Bend",
		"abbreviations": [
			"BEND",
			{"value": "BND", "primary": true}
		]
	},
	{
		"name": "Bluff",
		"abbreviations": [
			"BLUF",
			"BLUFF",
			{"value": "BLF", "primary": true}
		]
	},
	{
		"name": "Bluffs",
		"abbreviations": [
			"BLUFFS",
			{"value": "BLFS", "primary": true}
		]
	},
	{
		"name": "Bottom",
		"abbreviations": [
			"BOT",
			"BOTTM",
			"BOTTOM",
			{"value": "BTM", "primary": true}
		]
	},
	{
		"name": "Boulevard",
		"abbreviations": [
			"BOUL",
			"BOULEVARD",
			"BOULV",
			{"value": "BLVD", "primary": true}
		]
	},
	{
		"name": "Branch",
		"abbreviations": [
			"BRNCH",
			"BRANCH",
			{"value": "BR", "primary": true}
		]
	},
	{
		"name": "Bridge",
		"abbreviations": [
			"BRDGE",
			"BRIDGE",
			{"value": "BRG", "primary": true}
		]
	},
	{
		"name": "Brook",
		"abbreviations": [
			"BROOK",
			{"value": "BRK", "primary": true}
		]
	},
	{
		"name": "Brooks",
		"abbreviations": [
			"BROOKS",
			{"value": "BRKS", "primary": true}
		]
	},
	{
		"name": "Burg",
		"abbreviations": [
			"BURG",
			{"value": "BG", "primary": true}
		]
	},
	{
		"name": "Burgs",
		"abbreviations": [
			"BURGS",
			{"value": "BGS", "primary": true}
		]
	},
	{
		"name": "Bypass",
		"abbreviations": [
			"BYPA",
			"BYPAS",
			"BYPASS",
			"BYPS",
			{"value": "BYP", "primary": true}
		]
	},
	{
		"name": "Camp",
		"abbreviations": [
			"CAMP",
			"CMP",
			{"value": "CP", "primary": true}
		]
	},
	{
		"name": "Canyon",
		"abbreviations": [
			"CANYN",
			"CANYON",
			"CNYN",
			{"value": "CYN", "primary": true}
		]
	},
	{
		"name": "Cape",
		"abbreviations": [
			"CAPE",
			{"value": "CPE", "primary": true}
		]
	},
	{
		"name": "Causeway",
		"abbreviations": [
			"CAUSEWAY",
			"CAUSWA",
			{"value": "CSWY", "primary": true}
		]
	},
	{
		"name": "Center",
		"abbreviations": [
			"CEN",
			"CENT",
			"CENTER",
			"CENTR",
			"CENTRE",
			"CNTER",
			"CNTR",
			{"value": "CTR", "primary": true}
		]
	},
	{
		"name": "Centers",
		"abbreviations": [
			"CENTERS",
			{"value": "CTRS", "primary": true}
		]
	},
	{
		"name": "Circle",
		"abbreviations": [
			"CIRC",
			"CIRCL",
			"CIRCLE",
			"CRCL",
			"CRCLE",
			{"value": "CIR", "primary": true}
		]
	},
	{
		"name": "Circles",
		"abbreviations": [
			"CIRCLES",
			{"value": "CIRS", "primary": true}
		]
	},
	{
		"name": "Cliff",
		"abbreviations": [
			"CLIFF",
			{"value": "CLF", "primary": true}
		]
	},
	{
		"name": "Cliffs",
		"abbreviations": [
			"CLIFFS",
			{"value": "CLFS", "primary": true}
		]
	},
	{
		"name": "Club",
		"abbreviations": [
			"CLUB",
			{"value": "CLB", "primary": true}
		]
	},
	{
		"name": "Common",
		"abbreviations": [
			"COMMON",
			{"value": "CMN", "primary": true}
		]
	},
	{
		"name": "Common",
		"abbreviations": [
			"COMMONS",
			{"value": "CMNS", "primary": true}
		]
	},
	{
		"name": "Corner",
		"abbreviations": [
			"CORNER",
			{"value": "COR", "primary": true}
		]
	},
	{
		"name": "Corners",
		"abbreviations": [
			"CORNERS",
			{"value": "CORS", "primary": true}
		]
	},
	{
		"name": "Course",
		"abbreviations": [
			"COURSE",
			{"value": "CRSE", "primary": true}
		]
	},
	{
		"name": "Court",
		"abbreviations": [
			"COURT",
			{"value": "CT", "primary": true}
		]
	},
	{
		"name": "Courts",
		"abbreviations": [
			"COURTS",
			{"value": "CTS", "primary": true}
		]
	},
	{
		"name": "Cove",
		"abbreviations": [
			"COVE",
			{"value": "CV", "primary": true}
		]
	},
	{
		"name": "Coves",
		"abbreviations": [
			"COVES",
			{"value": "CVS", "primary": true}
		]
	},
	{
		"name": "Creek",
		"abbreviations": [
			"CREEK",
			{"value": "CRK", "primary": true}
		]
	},
	{
		"name": "Crescent",
		"abbreviations": [
			"CRESCENT",
			"CRSENT",
			"CRSNT",
			{"value": "CRES", "primary": true}
		]
	},
	{
		"name": "Crest",
		"abbreviations": [
			"CREST",
			{"value": "CRST", "primary": true}
		]
	},
	{
		"name": "Crossing",
		"abbreviations": [
			"CROSSING",
			"CRSSNG",
			{"value": "XING", "primary": true}
		]
	},
	{
		"name": "Crossroad",
		"abbreviations": [
			"CROSSROAD",
			{"value": "XRD", "primary": true}
		]
	},
	{
		"name": "Crossroads",
		"abbreviations": [
			"CROSSROADS",
			{"value": "XRDS", "primary": true}
		]
	},
	{
		"name": "Curve",
		"abbreviations": [
			"CURVE",
			{"value": "CURV", "primary": true}
		]
	},
	{
		"name": "Dale",
		"abbreviations": [
			"DALE",
			{"value": "DL", "primary": true}
		]
	},
	{
		"name": "Dam",
		"abbreviations": [
			"DAM",
			{"value": "DM", "primary": true}
		]
	},
	{
		"name": "Divide",
		"abbreviations": [
			"DIV",
			"DIVIDE",
			"DVD",
			{"value": "DV", "primary": true}
		]
	},
	{
		"name": "Drive",
		"abbreviations": [
			"DRIV",
			"DRIVE",
			"DRV",
			{"value": "DR", "primary": true}
		]
	},
	{
		"name": "Drives",
		"abbreviations": [
			"DRIVES",
			{"value": "DRS", "primary": true}
		]
	},
	{
		"name": "Estate",
		"abbreviations": [
			"ESTATE",
			{"value": "EST", "primary": true}
		]
	},
	{
		"name": "Estates",
		"abbreviations": [
			"ESTATES",
			{"value": "ESTS", "primary": true}
		]
	},
	{
		"name": "Expressway",
		"abbreviations": [
			"EXP",
			"EXPR",
			"EXPRESS",
			"EXPRESSWAY",
			"EXPW",
			{"value": "EXPY", "primary": true}
		]
	},
	{
		"name": "Extension",
		"abbreviations": [
			"EXTENSION",
			"EXTN",
			"EXTNSN",
			{"value": "EXT", "primary": true}
		]
	},
	{
		"name": "Extensions",
		"abbreviations": [
			{"value": "EXTS", "primary": true}
		]
	},
	{
		"name": "Fall",
		"abbreviations": [
			{"value": "FALL", "primary": true}
		]
	},
	{
		"name": "Falls",
		"abbreviations": [
			"FALLS",
			{"value": "FLS", "primary": true}
		]
	},
	{
		"name": "Ferry",
		"abbreviations": [
			"FERRY",
			"FRRY",
			{"value": "FRY", "primary": true}
		]
	},
	{
		"name": "Field",
		"abbreviations": [
			"FIELD",
			{"value": "FLD", "primary": true}
		]
	},
	{
		"name": "Fields",
		"abbreviations": [
			"FIELDS",
			{"value": "FLDS", "primary": true}
		]
	},
	{
		"name": "Flat",
		"abbreviations": [
			"FLAT",
			{"value": "FLT", "primary": true}
		]
	},
	{
		"name": "Flats",
		"abbreviations": [
			"FLATS",
			{"value": "FLTS", "primary": true}
		]
	},
	{
		"name": "Ford",
		"abbreviations": [
			"FORD",
			{"value": "FRD", "primary": true}
		]
	},
	{
		"name": "Fords",
		"abbreviations": [
			"FORDS",
			{"value": "FRDS", "primary": true}
		]
	},
	{
		"name": "Forest",
		"abbreviations": [
			"FOREST",
			"FORESTS",
			{"value": "FRST", "primary": true}
		]
	},
	{
		"name": "Forge",
		"abbreviations": [
			"FORG",
			"FORGE",
			{"value": "FRG", "primary": true}
		]
	},
	{
		"name": "Forges",
		"abbreviations": [
			"FORGES",
			{"value": "FRGS", "primary": true}
		]
	},
	{
		"name": "Fork",
		"abbreviations": [
			"FORK",
			{"value": "FRK", "primary": true}
		]
	},
	{
		"name": "Forks",
		"abbreviations": [
			"FORKS",
			{"value": "FRKS", "primary": true}
		]
	},
	{
		"name": "Fort",
		"abbreviations": [
			"FORT",
			"FRT",
			{"value": "FT", "primary": true}
		]
	},
	{
		"name": "Freeway",
		"abbreviations": [
			"FREEWAY",
			"FREEWY",
			"FRWAY",
			"FRWY",
			{"value": "FWY", "primary": true}
		]
	},
	{
		"name": "Garden",
		"abbreviations": [
			"GARDEN",
			"GARDN",
			"GRDEN",
			"GRDN",
			{"value": "GDN", "primary": true}
		]
	},
	{
		"name": "Gardens",
		"abbreviations": [
			"GARDENS",
			"GRDNS",
			{"value": "GDNS", "primary": true}
		]
	},
	{
		"name": "Gateway",
		"abbreviations": [
			"GATEWAY",
			"GATEWY",
			"GATWAY",
			"GTWAY",
			{"value": "GTWY", "primary": true}
		]
	},
	{
		"name": "Glen",
		"abbreviations": [
			"GLEN",
			{"value": "GLN", "primary": true}
		]
	},
	{
		"name": "Glens",
		"abbreviations": [
			"GLENS",
			{"value": "GLNS", "primary": true}
		]
	},
	{
		"name": "Green",
		"abbreviations": [
			"GREEN",
			{"value": "GRN", "primary": true}
		]
	},
	{
		"name": "Greens",
		"abbreviations": [
			"GREENS",
			{"value": "GRNS", "primary": true}
		]
	},
	{
		"name": "Grove",
		"abbreviations": [
			"GROV",
			"GROVE",
			{"value": "GRV", "primary": true}
		]
	},
	{
		"name": "Groves",
		"abbreviations": [
			"GROVES",
			{"value": "GRVS", "primary": true}
		]
	},
	{
		"name": "Harbor",
		"abbreviations": [
			"HARB",
			"HARBOR",
			"HARBR",
			"HRBOR",
			{"value": "HBR", "primary": true}
		]
	},
	{
		"name": "Harbors",
		"abbreviations": [
			"HARBORS",
			{"value": "HBRS", "primary": true}
		]
	},
	{
		"name": "Haven",
		"abbreviations": [
			"HAVEN",
			{"value": "HVN", "primary": true}
		]
	},
	{
		"name": "Heights",
		"abbreviations": [
			"HT",
			{"value": "HTS", "primary": true}
		]
	},
	{
		"name": "Highway",
		"abbreviations": [
			"HIGHWAY",
			"HIGHWY",
			"HIWAY",
			"HIWY",
			"HWAY",
			{"value": "HWY", "primary": true}
		]
	},
	{
		"name": "Hill",
		"abbreviations": [
			"HILL",
			{"value": "HL", "primary": true}
		]
	},
	{
		"name": "Hills",
		"abbreviations": [
			"HILLS",
			{"value": "HLS", "primary": true}
		]
	},
	{
		"name": "Hollow",
		"abbreviations": [
			"HLLW",
			"HOLLOW",
			"HOLLOWS",
			"HOLWS",
			{"value": "HOLW", "primary": true}
		]
	},
	{
		"name": "Inlet",
		"abbreviations": [
			{"value": "INLT", "primary": true}
		]
	},
	{
		"name": "Island",
		"abbreviations": [
			"ISLAND",
			"ISLND",
			{"value": "IS", "primary": true}
		]
	},
	{
		"name": "Islands",
		"abbreviations": [
			"ISLANDS",
			"ISLNDS",
			{"value": "ISS", "primary": true}
		]
	},
	{
		"name": "Isle",
		"abbreviations": [
			"ISLES",
			{"value": "ISLE", "primary": true}
		]
	},
	{
		"name": "Junction",
		"abbreviations": [
			"JCTION",
			"JCTN",
			"JUNCTION",
			"JUNCTN",
			"JUNCTON",
			{"value": "JCT", "primary": true}
		]
	},
	{
		"name": "Junctions",
		"abbreviations": [
			"JCTNS",
			"JUNCTIONS",
			{"value": "JCTS", "primary": true}
		]
	},
	{
		"name": "Key",
		"abbreviations": [
			"KEY",
			{"value": "KY", "primary": true}
		]
	},
	{
		"name": "Keys",
		"abbreviations": [
			"KEYS",
			{"value": "KYS", "primary": true}
		]
	},
	{
		"name": "Knoll",
		"abbreviations": [
			"KNOL",
			"KNOLL",
			{"value": "KNL", "primary": true}
		]
	},
	{
		"name": "Knolls",
		"abbreviations": [
			"KNOLLS",
			{"value": "KNLS", "primary": true}
		]
	},
	{
		"name": "Lake",
		"abbreviations": [
			"LAKE",
			{"value": "LK", "primary": true}
		]
	},
	{
		"name": "Lakes",
		"abbreviations": [
			"LAKES",
			{"value": "LKS", "primary": true}
		]
	},
	{
		"name": "Land",
		"abbreviations": [
			{"value": "LAND", "primary": true}
		]
	},
	{
		"name": "Landing",
		"abbreviations": [
			"LANDING",
			"LNDNG",
			{"value": "LNDG", "primary": true}
		]
	},
	{
		"name": "Lane",
		"abbreviations": [
			"LANE",
			{"value": "LN", "primary": true}
		]
	},
	{
		"name": "Light",
		"abbreviations": [
			"LIGHT",
			{"value": "LGT", "primary": true}
		]
	},
	{
		"name": "Lights",
		"abbreviations": [
			"LIGHTS",
			{"value": "LGTS", "primary": true}
		]
	},
	{
		"name": "Loaf",
		"abbreviations": [
			"LOAF",
			{"value": "LF", "primary": true}
		]
	},
	{
		"name": "Lock",
		"abbreviations": [
			"LOCK",
			{"value": "LCK", "primary": true}
		]
	},
	{
		"name": "Locks",
		"abbreviations": [
			"LOCKS",
			{"value": "LCKS", "primary": true}
		]
	},
	{
		"name": "Lodge",
		"abbreviations": [
			"LDGE",
			"LODG",
			"LODGE",
			{"value": "LDG", "primary": true}
		]
	},
	{
		"name": "Loop",
		"abbreviations": [
			"LOOPS",
			{"value": "LOOP", "primary": true}
		]
	},
	{
		"name": "Mall",
		"abbreviations": [
			{"value": "MALL", "primary": true}
		]
	},
	{
		"name": "Manor",
		"abbreviations": [
			"MANOR",
			{"value": "MNR", "primary": true}
		]
	},
	{
		"name": "Manors",
		"abbreviations": [
			"MANORS",
			{"value": "MNRS", "primary": true}
		]
	},
	{
		"name": "Meadow",
		"abbreviations": [
			"MEADOW",
			{"value": "MDW", "primary": true}
		]
	},
	{
		"name": "Meadows",
		"abbreviations": [
			"MDW",
			"MEADOWS",
			"MEDOWS",
			{"value": "MDWS", "primary": true}
		]
	},
	{
		"name": "Mews",
		"abbreviations": [
			{"value": "MEWS", "primary": true}
		]
	},
	{
		"name": "Mill",
		"abbreviations": [
			"MILL",
			{"value": "ML", "primary": true}
		]
	},
	{
		"name": "Mills",
		"abbreviations": [
			"MILLS",
			{"value": "MLS", "primary": true}
		]
	},
	{
		"name": "Mission",
		"abbreviations": [
			"MISSN",
			"MSSN",
			{"value": "MSN", "primary": true}
		]
	},
	{
		"name": "Motorway",
		"abbreviations": [
			"MOTORWAY",
			{"value": "MTWY", "primary": true}
		]
	},
	{
		"name": "Mount",
		"abbreviations": [
			"MOUNT",
			"MNT",
			{"value": "MT", "primary": true}
		]
	},
	{
		"name": "Mountain",
		"abbreviations": [
			"MNTAIN",
			"MNTN",
			"MOUNTAIN",
			"MOUNTIN",
			"MTIN",
			{"value": "MTN", "primary": true}
		]
	},
	{
		"name": "Mountains",
		"abbreviations": [
			"MNTNS",
			"MOUNTAINS",
			{"value": "MTNS", "primary": true}
		]
	},
	{
		"name": "Neck",
		"abbreviations": [
			"NECK",
			{"value": "NCK", "primary": true}
		]
	},
	{
		"name": "Orchard",
		"abbreviations": [
			"ORCHARD",
			"ORCHRD",
			{"value": "ORCH", "primary": true}
		]
	},
	{
		"name": "Oval",
		"abbreviations": [
			"OVL",
			{"value": "OVAL", "primary": true}
		]
	},
	{
		"name": "Overpass",
		"abbreviations": [
			"OVERPASS",
			{"value": "OPAS", "primary": true}
		]
	},
	{
		"name": "Park",
		"abbreviations": [
			"PRK",
			{"value": "PARK", "primary": true}
		]
	},
	{
		"name": "Parks",
		"abbreviations": [
			{"value": "PARKS", "primary": true} // According to USPS this should be "PARK" but having a duplicate here will cause problems
		]
	},
	{
		"name": "Parkway",
		"abbreviations": [
			"PARKWAY",
			"PARKWY",
			"PKWAY",
			"PKY",
			{"value": "PKWY", "primary": true}
		]
	},
	{
		"name": "Parkways",
		"abbreviations": [
			"PARKWAYS",
			{"value": "PKWYS", "primary": true} // According to USPS this should be "PARK" but having a duplicate here will cause problems
		]
	},
	{
		"name": "Pass",
		"abbreviations": [
			{"value": "PASS", "primary": true}
		]
	},
	{
		"name": "Passage",
		"abbreviations": [
			"PASSAGE",
			{"value": "PSGE", "primary": true}
		]
	},
	{
		"name": "Path",
		"abbreviations": [
			"PATHS",
			{"value": "Path", "primary": true}
		]
	},
	{
		"name": "Pike",
		"abbreviations": [
			"PIKES",
			{"value": "PIKE", "primary": true}
		]
	},
	{
		"name": "Pine",
		"abbreviations": [
			"PINE",
			{"value": "PNE", "primary": true}
		]
	},
	{
		"name": "Pines",
		"abbreviations": [
			"PINES",
			{"value": "PNES", "primary": true}
		]
	},
	{
		"name": "Place",
		"abbreviations": [
			{"value": "PL", "primary": true}
		]
	},
	{
		"name": "Plain",
		"abbreviations": [
			"PLAIN",
			{"value": "PLN", "primary": true}
		]
	},
	{
		"name": "Plains",
		"abbreviations": [
			"PLAINS",
			{"value": "PLNS", "primary": true}
		]
	},
	{
		"name": "Plaza",
		"abbreviations": [
			"PLAZA",
			"PLZA",
			{"value": "PLZ", "primary": true}
		]
	},
	{
		"name": "Point",
		"abbreviations": [
			"POINT",
			{"value": "PT", "primary": true}
		]
	},
	{
		"name": "Points",
		"abbreviations": [
			"POINTS",
			{"value": "PTS", "primary": true}
		]
	},
	{
		"name": "Port",
		"abbreviations": [
			"PORT",
			{"value": "PRT", "primary": true}
		]
	},
	{
		"name": "Ports",
		"abbreviations": [
			"PORTS",
			{"value": "PRTS", "primary": true}
		]
	},
	{
		"name": "Prairie",
		"abbreviations": [
			"PRAIRIE",
			"PRR",
			{"value": "PR", "primary": true}
		]
	},
	{
		"name": "Radial",
		"abbreviations": [
			"RAD",
			"RADIAL",
			"RADIEL",
			{"value": "RADL", "primary": true}
		]
	},
	{
		"name": "Ramp",
		"abbreviations": [
			{"value": "RAMP", "primary": true}
		]
	},
	{
		"name": "Ranch",
		"abbreviations": [
			"RANCH",
			"RANCHES",
			{"value": "RNCH", "primary": true}
		]
	},
	{
		"name": "Rapid",
		"abbreviations": [
			"RAPID",
			{"value": "RPD", "primary": true}
		]
	},
	{
		"name": "Rapids",
		"abbreviations": [
			"RAPIDS",
			{"value": "RPDS", "primary": true}
		]
	},
	{
		"name": "Rest",
		"abbreviations": [
			"REST",
			{"value": "RST", "primary": true}
		]
	},
	{
		"name": "Ridge",
		"abbreviations": [
			"RIDGE",
			"RDGE",
			{"value": "RDG", "primary": true}
		]
	},
	{
		"name": "Ridges",
		"abbreviations": [
			"RIDGES",
			{"value": "RDGS", "primary": true}
		]
	},
	{
		"name": "River",
		"abbreviations": [
			"RIVER",
			"RVR",
			"RIVR",
			{"value": "RIV", "primary": true}
		]
	},
	{
		"name": "Road",
		"abbreviations": [
			"ROAD",
			{"value": "RD", "primary": true}
		]
	},
	{
		"name": "Roads",
		"abbreviations": [
			"ROADS",
			{"value": "RDS", "primary": true}
		]
	},
	{
		"name": "Route",
		"abbreviations": [
			"ROUTE",
			{"value": "RTE", "primary": true}
		]
	},
	{
		"name": "Row",
		"abbreviations": [
			{"value": "ROW", "primary": true}
		]
	},
	{
		"name": "Rue",
		"abbreviations": [
			{"value": "RUE", "primary": true}
		]
	},
	{
		"name": "Run",
		"abbreviations": [
			{"value": "RUN", "primary": true}
		]
	},
	{
		"name": "Shoal",
		"abbreviations": [
			"SHOAL",
			{"value": "SHL", "primary": true}
		]
	},
	{
		"name": "Shoals",
		"abbreviations": [
			"SHOALS",
			{"value": "SHLS", "primary": true}
		]
	},
	{
		"name": "Shore",
		"abbreviations": [
			"SHOAR",
			"SHORE",
			{"value": "SHR", "primary": true}
		]
	},
	{
		"name": "Shores",
		"abbreviations": [
			"SHOARS",
			"SHORES",
			{"value": "SHRS", "primary": true}
		]
	},
	{
		"name": "Skyway",
		"abbreviations": [
			"SKYWAY",
			{"value": "SKWY", "primary": true}
		]
	},
	{
		"name": "Spring",
		"abbreviations": [
			"SPNG",
			"SPRING",
			"SPRNG",
			{"value": "SPG", "primary": true}
		]
	},
	{
		"name": "Springs",
		"abbreviations": [
			"SPNGS",
			"SPRINGS",
			"SPRNGS",
			{"value": "SPGS", "primary": true}
		]
	},
	{
		"name": "Spur",
		"abbreviations": [
			{"value": "SPUR", "primary": true}
		]
	},
	{
		"name": "Spurs",
		"abbreviations": [
			{"value": "SPURS", "primary": true} // According to USPS this should be "SPUR" but having a duplicate here will cause problems
		]
	},
	{
		"name": "Square",
		"abbreviations": [
			"SQR",
			"SQRE",
			"SQU",
			"SQUARE",
			{"value": "SQ", "primary": true}
		]
	},
	{
		"name": "Squares",
		"abbreviations": [
			"SQRS",
			"SQUARES",
			{"value": "SQS", "primary": true}
		]
	},
	{
		"name": "Station",
		"abbreviations": [
			"STATION",
			"STATN",
			"STN",
			{"value": "STA", "primary": true}
		]
	},
	{
		"name": "Stravenue",
		"abbreviations": [
			"STRAV",
			"STRAVEN",
			"STRAVENUE",
			"STRAVN",
			"STRVN",
			"STRVNUE",
			{"value": "STRA", "primary": true}
		]
	},
	{
		"name": "Stream",
		"abbreviations": [
			"STREAM",
			"STREME",
			{"value": "STRM", "primary": true}
		]
	},
	{
		"name": "Street",
		"abbreviations": [
			"STREET",
			"STRT",
			"STR",
			{"value": "ST", "primary": true}
		]
	},
	{
		"name": "Streets",
		"abbreviations": [
			"STREETS",
			{"value": "STS", "primary": true}
		]
	},
	{
		"name": "Summit",
		"abbreviations": [
			"SUMIT",
			"SUMITT",
			"SUMMIT",
			{"value": "SMT", "primary": true}
		]
	},
	{
		"name": "Terrace",
		"abbreviations": [
			"TERR",
			"TERRACE",
			{"value": "TER", "primary": true}
		]
	},
	{
		"name": "Throughway",
		"abbreviations": [
			"THROUGHWAY",
			{"value": "TRWY", "primary": true}
		]
	},
	{
		"name": "Trace",
		"abbreviations": [
			"TRACE",
			"TRACES",
			{"value": "TRCE", "primary": true}
		]
	},
	{
		"name": "Track",
		"abbreviations": [
			"TRACK",
			"TRACKS",
			"TRK",
			"TRKS",
			{"value": "TRAK", "primary": true}
		]
	},
	{
		"name": "Trafficway",
		"abbreviations": [
			"TRAFFICWAY",
			{"value": "TRFY", "primary": true}
		]
	},
	{
		"name": "Trail",
		"abbreviations": [
			"TRAIL",
			"TRAILS",
			"TRLS",
			{"value": "TRL", "primary": true}
		]
	},
	{
		"name": "Trailer",
		"abbreviations": [
			"TRAILER",
			"TRLRS",
			{"value": "TRLR", "primary": true}
		]
	},
	{
		"name": "Tunnel",
		"abbreviations": [
			"TUNEL",
			"TUNLS",
			"TUNNEL",
			"TUNNELS",
			"TUNNL",
			{"value": "TUNL", "primary": true}
		]
	},
	{
		"name": "Turnpike",
		"abbreviations": [
			"TRNPK",
			"TURNPIKE",
			"TURNPK",
			{"value": "TPKE", "primary": true}
		]
	},
	{
		"name": "Underpass",
		"abbreviations": [
			"UNDERPASS",
			{"value": "UPAS", "primary": true}
		]
	},
	{
		"name": "Union",
		"abbreviations": [
			"UNION",
			{"value": "UN", "primary": true}
		]
	},
	{
		"name": "Unions",
		"abbreviations": [
			"UNIONS",
			{"value": "UNS", "primary": true}
		]
	},
	{
		"name": "Valley",
		"abbreviations": [
			"VALLEY",
			"VALLY",
			"VLLY",
			{"value": "VLY", "primary": true}
		]
	},
	{
		"name": "Valleys",
		"abbreviations": [
			"VALLEYS",
			{"value": "VLYS", "primary": true}
		]
	},
	{
		"name": "Viaduct",
		"abbreviations": [
			"VDCT",
			"VIADCT",
			"VIADUCT",
			{"value": "VIA", "primary": true}
		]
	},
	{
		"name": "View",
		"abbreviations": [
			"VIEW",
			{"value": "VW", "primary": true}
		]
	},
	{
		"name": "Views",
		"abbreviations": [
			"VIEWS",
			{"value": "VWS", "primary": true}
		]
	},
	{
		"name": "Village",
		"abbreviations": [
			"VILL",
			"VILLAG",
			"VILLAGE",
			"VILLG",
			"VILLIAGE",
			{"value": "VLG", "primary": true}
		]
	},
	{
		"name": "Villages",
		"abbreviations": [
			"VILLAGES",
			{"value": "VLGS", "primary": true}
		]
	},
	{
		"name": "Ville",
		"abbreviations": [
			"VILLE",
			{"value": "VL", "primary": true}
		]
	},
	{
		"name": "Vista",
		"abbreviations": [
			"VIST",
			"VISTA",
			"VST",
			"VSTA",
			{"value": "VIS", "primary": true}
		]
	},
	{
		"name": "Walk",
		"abbreviations": [
			{"value": "WALK", "primary": true}
		]
	},
	{
		"name": "Walks",
		"abbreviations": [
			{"value": "WALKS", "primary": true} // According to USPS this should be "WALK" but having a duplicate here will cause problems
		]
	},
	{
		"name": "Wall",
		"abbreviations": [
			{"value": "WALL", "primary": true}
		]
	},
	{
		"name": "Way",
		"abbreviations": [
			"WY",
			{"value": "WAY", "primary": true}
		]
	},
	{
		"name": "Ways",
		"abbreviations": [
			{"value": "WAYS", "primary": true}
		]
	},
	{
		"name": "Well",
		"abbreviations": [
			"WELL",
			{"value": "WL", "primary": true}
		]
	},
	{
		"name": "Wells",
		"abbreviations": [
			"WELLS",
			{"value": "WLS", "primary": true}
		]
	}
];

export function toName(abbreviation: string): string | undefined {
	const suffix = suffixes.find((suffix) => {
		const abbreviations = suffix.abbreviations.map((val) => typeof val === "string" ? val : val.value);
		return abbreviations.includes(abbreviation);
	});

	if (suffix) {
		return suffix.name;
	}
}
