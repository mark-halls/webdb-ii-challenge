exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { vin: "WBAWV135X8P276632", make: "Volvo", model: "S60", mileage: 1 },
        { vin: "2LNBL8CV1AX057912", make: "Honda", model: "Civic", mileage: 2 },
        {
          vin: "1D4PU5GK4BW455993",
          make: "Honda",
          model: "Accord Crosstour",
          mileage: 3
        },
        {
          vin: "5N1AA0ND9EN184969",
          make: "Mitsubishi",
          model: "Galant",
          mileage: 4
        },
        { vin: "JN8AZ2KR7ET288840", make: "GMC", model: "Canyon", mileage: 5 },
        { vin: "WBAEN33422P963996", make: "Nissan", model: "GT-R", mileage: 6 },
        {
          vin: "5UXFE83517L362931",
          make: "Chevrolet",
          model: "Cavalier",
          mileage: 7
        },
        {
          vin: "1N4AL2AP1AN754151",
          make: "Honda",
          model: "Passport",
          mileage: 8
        },
        {
          vin: "3VW4A7AT2DM809032",
          make: "Dodge",
          model: "Dakota Club",
          mileage: 9
        },
        { vin: "19UUA65584A777405", make: "Volvo", model: "XC90", mileage: 10 },
        { vin: "SCBBR53W76C347041", make: "BMW", model: "M3", mileage: 11 },
        {
          vin: "1GYFC66838R941218",
          make: "Mercury",
          model: "Mariner",
          mileage: 12
        },
        { vin: "JH4DC538X3S998639", make: "BMW", model: "M5", mileage: 13 },
        { vin: "2HNYD18243H442406", make: "Ford", model: "ZX2", mileage: 14 },
        {
          vin: "WAUVFAFR0DA044223",
          make: "Chrysler",
          model: "Town & Country",
          mileage: 15
        },
        {
          vin: "WAUDF78E08A744547",
          make: "Chevrolet",
          model: "Astro",
          mileage: 16
        },
        {
          vin: "19VDE3F78DE562338",
          make: "Honda",
          model: "Civic",
          mileage: 17
        },
        {
          vin: "WAUEKAFB7BN638490",
          make: "Ford",
          model: "Thunderbird",
          mileage: 18
        },
        {
          vin: "4A31K5DF5CE986530",
          make: "GMC",
          model: "Savana 1500",
          mileage: 19
        },
        {
          vin: "1GYS3HEF7ER536324",
          make: "Toyota",
          model: "Previa",
          mileage: 20
        },
        {
          vin: "JH4NA21674T676255",
          make: "Mercedes-Benz",
          model: "SLS-Class",
          mileage: 21
        },
        {
          vin: "JTJHY7AX3A4859784",
          make: "Ford",
          model: "Econoline E150",
          mileage: 22
        },
        {
          vin: "JTEBU5JR0E5284436",
          make: "Foose",
          model: "Hemisfear",
          mileage: 23
        },
        {
          vin: "JH4CW2H57DC060870",
          make: "GMC",
          model: "Savana 1500",
          mileage: 24
        },
        {
          vin: "WDDEJ7KB1CA764115",
          make: "Nissan",
          model: "Cube",
          mileage: 25
        },
        {
          vin: "WDDLJ7DB9CA801089",
          make: "Mercedes-Benz",
          model: "M-Class",
          mileage: 26
        },
        {
          vin: "2B3CA7CW3AH879141",
          make: "Mitsubishi",
          model: "Galant",
          mileage: 27
        },
        { vin: "JTHBB1BA8C2206446", make: "Volvo", model: "S60", mileage: 28 },
        { vin: "WBAPK7C56BF838300", make: "Lexus", model: "ES", mileage: 29 },
        {
          vin: "3D7TT2HT2BG330130",
          make: "Maserati",
          model: "GranTurismo",
          mileage: 30
        },
        { vin: "1G6KD54Y33U346764", make: "BMW", model: "545", mileage: 31 },
        { vin: "WBAWB335X8P482523", make: "Ford", model: "Tempo", mileage: 32 },
        {
          vin: "WBAVM5C59DV550415",
          make: "Suzuki",
          model: "Swift",
          mileage: 33
        },
        {
          vin: "WBAYE0C5XDD076204",
          make: "Mercedes-Benz",
          model: "C-Class",
          mileage: 34
        },
        {
          vin: "1N6AA0CA6AN795580",
          make: "GMC",
          model: "Yukon Denali",
          mileage: 35
        },
        {
          vin: "WAUBNBFB6BN627223",
          make: "Mitsubishi",
          model: "Truck",
          mileage: 36
        },
        { vin: "KL4CJCSB9FB078911", make: "Mazda", model: "626", mileage: 37 },
        {
          vin: "19UUA65615A036183",
          make: "Morgan",
          model: "Aero 8",
          mileage: 38
        },
        {
          vin: "1C6RD6FKXCS984491",
          make: "Mitsubishi",
          model: "Truck",
          mileage: 39
        },
        {
          vin: "WBA3B9C56DJ051812",
          make: "Chevrolet",
          model: "Colorado",
          mileage: 40
        },
        { vin: "2G4WC552071734656", make: "Mazda", model: "626", mileage: 41 },
        {
          vin: "1N6AA0CA5FN046468",
          make: "Suzuki",
          model: "Daewoo Magnus",
          mileage: 42
        },
        {
          vin: "3N1AB6AP1CL988848",
          make: "Chevrolet",
          model: "Monte Carlo",
          mileage: 43
        },
        {
          vin: "2G4G15GV5B9631518",
          make: "Ford",
          model: "Fiesta",
          mileage: 44
        },
        { vin: "WDDEJ7KB0AA999716", make: "Ford", model: "F350", mileage: 45 },
        { vin: "WP0AA2A80EK752147", make: "Audi", model: "A4", mileage: 46 },
        {
          vin: "1GKS2GEJ8DR464799",
          make: "Jaguar",
          model: "XJ Series",
          mileage: 47
        },
        {
          vin: "5N1AA0NC6EN477493",
          make: "Plymouth",
          model: "Acclaim",
          mileage: 48
        },
        {
          vin: "SCBBB7ZH2CC981314",
          make: "Chevrolet",
          model: "Tahoe",
          mileage: 49
        },
        {
          vin: "1G4GG5E32DF612483",
          make: "Nissan",
          model: "370Z",
          mileage: 50
        },
        {
          vin: "JN1CV6EL6FM292360",
          make: "Ford",
          model: "Taurus",
          mileage: 51
        },
        {
          vin: "3LN6L2LUXFR733432",
          make: "Porsche",
          model: "944",
          mileage: 52
        },
        {
          vin: "1N6AF0KX9FN173652",
          make: "Mercedes-Benz",
          model: "M-Class",
          mileage: 53
        },
        {
          vin: "3C63DPAL4CG580122",
          make: "Mercedes-Benz",
          model: "500SEC",
          mileage: 54
        },
        {
          vin: "5N1CR2MM5EC201177",
          make: "Dodge",
          model: "Nitro",
          mileage: 55
        },
        {
          vin: "WA1YD54B73N983387",
          make: "Jaguar",
          model: "XK Series",
          mileage: 56
        },
        {
          vin: "WVWED7AJ3CW690855",
          make: "Lincoln",
          model: "MKX",
          mileage: 57
        },
        { vin: "WBA3B9C58EJ908052", make: "Ford", model: "F350", mileage: 58 },
        {
          vin: "5LMJJ3J5XDE192820",
          make: "Mitsubishi",
          model: "Mighty Max",
          mileage: 59
        },
        {
          vin: "KMHHT6KD1BU723540",
          make: "Pontiac",
          model: "Firebird",
          mileage: 60
        },
        {
          vin: "WAUBF78E86A141771",
          make: "Mercury",
          model: "Sable",
          mileage: 61
        },
        {
          vin: "19XFB2F51DE398979",
          make: "Volkswagen",
          model: "Jetta",
          mileage: 62
        },
        { vin: "1G6AA5RX5D0813633", make: "Acura", model: "ZDX", mileage: 63 },
        {
          vin: "WAU2MAFCXEN359111",
          make: "Chevrolet",
          model: "Tracker",
          mileage: 64
        },
        {
          vin: "KL4CJCSB0FB992450",
          make: "Ford",
          model: "Mustang",
          mileage: 65
        },
        {
          vin: "WAUHE98PX9A562714",
          make: "Dodge",
          model: "Ram Wagon B250",
          mileage: 66
        },
        {
          vin: "3D7TP2CT6BG311866",
          make: "Mercedes-Benz",
          model: "G55 AMG",
          mileage: 67
        },
        { vin: "1G4HP54K024997208", make: "Honda", model: "CR-X", mileage: 68 },
        {
          vin: "WAUGFBFC5EN465908",
          make: "Land Rover",
          model: "Range Rover Sport",
          mileage: 69
        },
        {
          vin: "JN1CV6FE6BM689920",
          make: "Pontiac",
          model: "Firebird",
          mileage: 70
        },
        {
          vin: "WAU2GBFC9CN154759",
          make: "Chevrolet",
          model: "Tahoe",
          mileage: 71
        },
        { vin: "3C4PDDDGXDT561106", make: "Saturn", model: "Ion", mileage: 72 },
        {
          vin: "WBSBR93471E404220",
          make: "Lincoln",
          model: "Continental",
          mileage: 73
        },
        {
          vin: "WAUCVAFR2CA781593",
          make: "Dodge",
          model: "Durango",
          mileage: 74
        },
        {
          vin: "1GYS3CEF9ER368317",
          make: "GMC",
          model: "Yukon XL 1500",
          mileage: 75
        },
        {
          vin: "1G6AX5SX9E0492786",
          make: "Mitsubishi",
          model: "GTO",
          mileage: 76
        },
        { vin: "WAULD64B14N637999", make: "Ford", model: "F150", mileage: 77 },
        {
          vin: "JN8AZ1MU8CW923250",
          make: "Honda",
          model: "Ridgeline",
          mileage: 78
        },
        { vin: "WBA3B1C54FP341015", make: "Hummer", model: "H1", mileage: 79 },
        { vin: "5N1AN0NW7FN540357", make: "BMW", model: "530", mileage: 80 },
        {
          vin: "YV1612FH8E1831726",
          make: "GMC",
          model: "2500 Club Coupe",
          mileage: 81
        },
        {
          vin: "3VWKZ7AJ9BM854707",
          make: "Pontiac",
          model: "Grand Prix",
          mileage: 82
        },
        {
          vin: "1GYEK63N76R990606",
          make: "Mercedes-Benz",
          model: "C-Class",
          mileage: 83
        },
        {
          vin: "5J8TB3H35FL891452",
          make: "Nissan",
          model: "Titan",
          mileage: 84
        },
        {
          vin: "1G6DM1E35C0418110",
          make: "Chevrolet",
          model: "Corvette",
          mileage: 85
        },
        {
          vin: "1FMJK1JTXFE174062",
          make: "Chevrolet",
          model: "Camaro",
          mileage: 86
        },
        { vin: "WBAUU33589A781742", make: "Dodge", model: "Neon", mileage: 87 },
        {
          vin: "KL4CJFSB8EB483366",
          make: "Ford",
          model: "Ranger",
          mileage: 88
        },
        {
          vin: "2HNYD18635H715972",
          make: "Ford",
          model: "Ranger",
          mileage: 89
        },
        {
          vin: "5GAKVCED9CJ128714",
          make: "GMC",
          model: "Sonoma Club Coupe",
          mileage: 90
        },
        {
          vin: "1G6DS8E30D0394637",
          make: "Dodge",
          model: "Dynasty",
          mileage: 91
        },
        { vin: "WAUPFAFM5BA024611", make: "Ford", model: "Laser", mileage: 92 },
        {
          vin: "JH4KB16347C610436",
          make: "GMC",
          model: "Terrain",
          mileage: 93
        },
        {
          vin: "JM3TB2CV0F0754347",
          make: "Toyota",
          model: "Matrix",
          mileage: 94
        },
        {
          vin: "JH4CU2F88EC415629",
          make: "Aston Martin",
          model: "V8 Vantage",
          mileage: 95
        },
        { vin: "JM1NC2JF3B0001934", make: "BMW", model: "Z4", mileage: 96 },
        {
          vin: "SCBBP93W89C272917",
          make: "Mazda",
          model: "B-Series",
          mileage: 97
        },
        {
          vin: "JH4DC44611S437573",
          make: "Chevrolet",
          model: "Monte Carlo",
          mileage: 98
        },
        {
          vin: "WAUJF78K99N159212",
          make: "Ford",
          model: "Mustang",
          mileage: 99
        },
        {
          vin: "KMHHU6KJ8FU580014",
          make: "Toyota",
          model: "Camry Solara",
          mileage: 100
        },
        {
          vin: "5YMGZ0C55DL814782",
          make: "Chevrolet",
          model: "Camaro",
          mileage: 101
        },
        {
          vin: "WBANF73506C697968",
          make: "Honda",
          model: "S2000",
          mileage: 102
        },
        {
          vin: "3C3CFFCR8DT144286",
          make: "Subaru",
          model: "Outback",
          mileage: 103
        },
        {
          vin: "3VWKX7AJ4DM295754",
          make: "Lotus",
          model: "Esprit",
          mileage: 104
        },
        {
          vin: "WDDGF5EBXAR780595",
          make: "Chevrolet",
          model: "Cruze",
          mileage: 105
        },
        {
          vin: "5FPYK1F24BB986544",
          make: "Toyota",
          model: "MR2",
          mileage: 106
        },
        { vin: "5J6YH1H39BL170000", make: "GMC", model: "Envoy", mileage: 107 },
        { vin: "1G6KH5E66BU592451", make: "Ford", model: "ZX2", mileage: 108 },
        {
          vin: "WBAVA335X8K095627",
          make: "GMC",
          model: "Savana 3500",
          mileage: 109
        },
        {
          vin: "WA1WGBFP6EA090322",
          make: "Ford",
          model: "Taurus",
          mileage: 110
        },
        { vin: "KNDMG4C73C6667658", make: "BMW", model: "X5", mileage: 111 },
        {
          vin: "1J4AA2D18BL683321",
          make: "Dodge",
          model: "Caravan",
          mileage: 112
        },
        {
          vin: "5N1AN0NW5EN834578",
          make: "Chevrolet",
          model: "Camaro",
          mileage: 113
        },
        {
          vin: "WBAUP735X8V287730",
          make: "Lincoln",
          model: "Mark VIII",
          mileage: 114
        },
        {
          vin: "TRUSC28NX21096735",
          make: "Toyota",
          model: "Land Cruiser",
          mileage: 115
        },
        {
          vin: "WBA3C1G57DN841668",
          make: "Volkswagen",
          model: "rio",
          mileage: 116
        },
        {
          vin: "1GYEE53A090997081",
          make: "Pontiac",
          model: "LeMans",
          mileage: 117
        },
        {
          vin: "TRUWX28N511965777",
          make: "Ford",
          model: "Festiva",
          mileage: 118
        },
        { vin: "1FMJU1H5XAE866218", make: "Ford", model: "E150", mileage: 119 },
        {
          vin: "JH4CL96804C116548",
          make: "GMC",
          model: "Suburban 1500",
          mileage: 120
        },
        {
          vin: "WAULT68E32A992698",
          make: "Mercedes-Benz",
          model: "SL-Class",
          mileage: 121
        },
        {
          vin: "1N6AA0EC8FN495660",
          make: "Jaguar",
          model: "S-Type",
          mileage: 122
        },
        {
          vin: "3D73Y3HLXAG959382",
          make: "Nissan",
          model: "Pathfinder",
          mileage: 123
        },
        {
          vin: "WBAVS13598F151552",
          make: "Mazda",
          model: "Navajo",
          mileage: 124
        },
        {
          vin: "WAUDFAFLXDN939458",
          make: "Cadillac",
          model: "Escalade ESV",
          mileage: 125
        },
        {
          vin: "1G6KE54Y35U766315",
          make: "Chevrolet",
          model: "Astro",
          mileage: 126
        },
        {
          vin: "1GYFC26249R939094",
          make: "Tesla",
          model: "Roadster",
          mileage: 127
        },
        {
          vin: "1GYS3JEF3CR862612",
          make: "Ford",
          model: "Mustang",
          mileage: 128
        },
        {
          vin: "1FTWW3A5XAE627584",
          make: "GMC",
          model: "2500 Club Coupe",
          mileage: 129
        },
        {
          vin: "WP0AA2A80AU129609",
          make: "GMC",
          model: "Savana 2500",
          mileage: 130
        },
        {
          vin: "5N1AA0ND6EN428898",
          make: "Lincoln",
          model: "Town Car",
          mileage: 131
        },
        {
          vin: "TRUWT28N931291048",
          make: "Porsche",
          model: "Boxster",
          mileage: 132
        },
        {
          vin: "WUAW2BFC4FN908287",
          make: "Chevrolet",
          model: "Express 3500",
          mileage: 133
        },
        { vin: "JTDKTUD30ED172640", make: "Lexus", model: "ES", mileage: 134 },
        {
          vin: "JN1AJ0HP4BM007552",
          make: "Ford",
          model: "Explorer",
          mileage: 135
        },
        {
          vin: "WAUKG78E26A425345",
          make: "Chevrolet",
          model: "Monte Carlo",
          mileage: 136
        },
        {
          vin: "1G6KD54Y43U335627",
          make: "Jeep",
          model: "Wrangler",
          mileage: 137
        },
        {
          vin: "1G6DM1ED3B0784932",
          make: "Hyundai",
          model: "Accent",
          mileage: 138
        },
        {
          vin: "2G4WY55J221910012",
          make: "Dodge",
          model: "Caravan",
          mileage: 139
        },
        {
          vin: "1FAHP3FN6AW631746",
          make: "Mercury",
          model: "Villager",
          mileage: 140
        },
        {
          vin: "1G6DC5EY7B0031322",
          make: "Chevrolet",
          model: "Cruze",
          mileage: 141
        },
        {
          vin: "1FTEW1CW8AK122540",
          make: "Dodge",
          model: "Durango",
          mileage: 142
        },
        {
          vin: "3D7JV1EP5BG838515",
          make: "Kia",
          model: "Optima",
          mileage: 143
        },
        {
          vin: "1G4GF5E39CF145404",
          make: "Chevrolet",
          model: "Prizm",
          mileage: 144
        },
        {
          vin: "1D7RE5GK0BS940308",
          make: "Chevrolet",
          model: "Suburban 1500",
          mileage: 145
        },
        { vin: "WAU4FBFL3CA990716", make: "Audi", model: "TT", mileage: 146 },
        {
          vin: "WP1AA2A24CL857403",
          make: "Mazda",
          model: "Protege",
          mileage: 147
        },
        {
          vin: "2T2BK1BAXEC102882",
          make: "Kia",
          model: "Sorento",
          mileage: 148
        },
        {
          vin: "WAUEF98E57A702728",
          make: "Honda",
          model: "Accord",
          mileage: 149
        },
        {
          vin: "1G4GJ5E33CF732728",
          make: "Chevrolet",
          model: "S10",
          mileage: 150
        },
        {
          vin: "WAUFFAFL0CN126850",
          make: "Pontiac",
          model: "Bonneville",
          mileage: 151
        },
        { vin: "JN1AZ4EHXFM115080", make: "Hummer", model: "H1", mileage: 152 },
        {
          vin: "4T1BB3EK7AU226637",
          make: "Toyota",
          model: "T100",
          mileage: 153
        },
        { vin: "WVWGU7AN5CE401363", make: "GMC", model: "1500", mileage: 154 },
        {
          vin: "WDDHF8JB9DA813553",
          make: "Subaru",
          model: "Outback",
          mileage: 155
        },
        { vin: "KMHHT6KD6AU084439", make: "Acura", model: "TL", mileage: 156 },
        { vin: "1FTMF1EW1AF021776", make: "Scion", model: "xA", mileage: 157 },
        {
          vin: "WA1CFBFP2DA886151",
          make: "Dodge",
          model: "Nitro",
          mileage: 158
        },
        {
          vin: "JTJBM7FX1B5346068",
          make: "Ferrari",
          model: "612 Scaglietti",
          mileage: 159
        },
        {
          vin: "WAUBF48H17K777470",
          make: "Chevrolet",
          model: "Express 1500",
          mileage: 160
        },
        {
          vin: "WAUGVAFR1AA850840",
          make: "Kia",
          model: "Sephia",
          mileage: 161
        },
        {
          vin: "WAUHF78P28A827173",
          make: "Volkswagen",
          model: "Eurovan",
          mileage: 162
        },
        {
          vin: "WAUVT58E05A820474",
          make: "Ford",
          model: "Thunderbird",
          mileage: 163
        },
        {
          vin: "WAUCFAFC1DN832360",
          make: "Volkswagen",
          model: "Golf",
          mileage: 164
        },
        { vin: "1G6DP5ED5B0018781", make: "Kia", model: "Rio", mileage: 165 },
        {
          vin: "SCBFU7ZA9DC453737",
          make: "Buick",
          model: "LaCrosse",
          mileage: 166
        },
        {
          vin: "WVWED7AJ9BW010861",
          make: "Mitsubishi",
          model: "Galant",
          mileage: 167
        },
        {
          vin: "JA4AP3AU7BZ695590",
          make: "Lexus",
          model: "IS-F",
          mileage: 168
        },
        {
          vin: "KNADN5A38F6864631",
          make: "Cadillac",
          model: "Brougham",
          mileage: 169
        },
        {
          vin: "KM8JT3AB7BU112735",
          make: "Chrysler",
          model: "200",
          mileage: 170
        },
        {
          vin: "3D73M4CL5BG849561",
          make: "Pontiac",
          model: "Firebird",
          mileage: 171
        },
        { vin: "1G4HD572X8U259879", make: "GMC", model: "Yukon", mileage: 172 },
        {
          vin: "WAUFFAFL2FA404420",
          make: "Ford",
          model: "Falcon",
          mileage: 173
        },
        {
          vin: "4USBT53414L187792",
          make: "Bentley",
          model: "Continental",
          mileage: 174
        },
        {
          vin: "1N4AA5AP6BC261988",
          make: "Ford",
          model: "Bronco II",
          mileage: 175
        },
        {
          vin: "1FTNF2B58AE895828",
          make: "Subaru",
          model: "SVX",
          mileage: 176
        },
        {
          vin: "WAUML64BX2N545892",
          make: "Mercedes-Benz",
          model: "300CE",
          mileage: 177
        },
        {
          vin: "1J4NF1GB8BD901026",
          make: "Mitsubishi",
          model: "Eclipse",
          mileage: 178
        },
        {
          vin: "WBAGL63494D368714",
          make: "Pontiac",
          model: "Firebird Trans Am",
          mileage: 179
        },
        {
          vin: "1FT7W2A67EE718275",
          make: "BMW",
          model: "7 Series",
          mileage: 180
        },
        {
          vin: "1D7CE2GK8AS730235",
          make: "Chevrolet",
          model: "Silverado",
          mileage: 181
        },
        {
          vin: "WAULC58E32A607781",
          make: "Oldsmobile",
          model: "88",
          mileage: 182
        },
        {
          vin: "JN1AZ4EH9CM118838",
          make: "Ford",
          model: "Explorer",
          mileage: 183
        },
        {
          vin: "WBANE73537B330038",
          make: "Porsche",
          model: "944",
          mileage: 184
        },
        {
          vin: "2C4RDGBG2FR471838",
          make: "Toyota",
          model: "Tundra",
          mileage: 185
        },
        {
          vin: "1GYFK46888R204085",
          make: "Porsche",
          model: "Boxster",
          mileage: 186
        },
        { vin: "19UUA65555A936799", make: "Acura", model: "TL", mileage: 187 },
        { vin: "WBANE73566C771817", make: "BMW", model: "645", mileage: 188 },
        { vin: "1GYEC63807R956273", make: "Audi", model: "S4", mileage: 189 },
        {
          vin: "1G6KF579X4U148845",
          make: "Buick",
          model: "Skyhawk",
          mileage: 190
        },
        { vin: "WAUJC58E84A923008", make: "Ford", model: "F150", mileage: 191 },
        {
          vin: "WBA3C3C55EP029308",
          make: "Aston Martin",
          model: "DBS",
          mileage: 192
        },
        {
          vin: "1G6KE54Y05U206493",
          make: "Ford",
          model: "F-Series",
          mileage: 193
        },
        {
          vin: "WAUBNAFB5BN508993",
          make: "BMW",
          model: "8 Series",
          mileage: 194
        },
        {
          vin: "1GKUKGEJXAR648291",
          make: "Mitsubishi",
          model: "3000GT",
          mileage: 195
        },
        {
          vin: "JH4CL95808C956837",
          make: "Toyota",
          model: "Corolla",
          mileage: 196
        },
        {
          vin: "1C3BC4FB7BN354303",
          make: "Pontiac",
          model: "Grand Am",
          mileage: 197
        },
        {
          vin: "5UXZV4C54BL931558",
          make: "Mitsubishi",
          model: "Pajero",
          mileage: 198
        },
        {
          vin: "1GYS4JKJ4FR790152",
          make: "Spyker",
          model: "C8 Spyder Wide Body",
          mileage: 199
        },
        {
          vin: "2T1KU4EE6CC023060",
          make: "GMC",
          model: "Canyon",
          mileage: 200
        },
        {
          vin: "1GYEC638X8R284885",
          make: "Chevrolet",
          model: "Corvette",
          mileage: 201
        },
        {
          vin: "5TDBK3EH9AS167121",
          make: "GMC",
          model: "Safari",
          mileage: 202
        },
        {
          vin: "WAULT58EX2A651339",
          make: "Mercury",
          model: "Sable",
          mileage: 203
        },
        {
          vin: "WAUMR44E16N678754",
          make: "Ford",
          model: "Expedition",
          mileage: 204
        },
        {
          vin: "1GYEE637660734874",
          make: "Toyota",
          model: "Tacoma",
          mileage: 205
        },
        {
          vin: "KL4CJASB6FB645189",
          make: "Ford",
          model: "Econoline E250",
          mileage: 206
        },
        {
          vin: "WAUGVAFR6CA839481",
          make: "Mazda",
          model: "Mazda6",
          mileage: 207
        },
        {
          vin: "2FMGK5BC3CB932394",
          make: "GMC",
          model: "Savana 2500",
          mileage: 208
        },
        {
          vin: "WBAEA5C59AC045118",
          make: "GMC",
          model: "Sierra 1500",
          mileage: 209
        },
        {
          vin: "WVGEF9BP5DD797097",
          make: "Honda",
          model: "Accord",
          mileage: 210
        },
        {
          vin: "WDDGF4HB6CA172368",
          make: "Toyota",
          model: "Sienna",
          mileage: 211
        },
        { vin: "WAULF78K29N473678", make: "BMW", model: "X5", mileage: 212 },
        {
          vin: "1GTN1TEH0FZ606860",
          make: "Cadillac",
          model: "DeVille",
          mileage: 213
        },
        {
          vin: "1G4GD5ED3BF195731",
          make: "GMC",
          model: "Sierra 3500",
          mileage: 214
        },
        {
          vin: "SCFFBCBD5AG751059",
          make: "Kia",
          model: "Carens",
          mileage: 215
        },
        {
          vin: "WAUWFAFH4EN442055",
          make: "Ford",
          model: "Fairlane",
          mileage: 216
        },
        { vin: "WBA3N5C56EK283015", make: "Mazda", model: "626", mileage: 217 },
        {
          vin: "KNAFX6A89E5942553",
          make: "GMC",
          model: "Savana 1500",
          mileage: 218
        },
        {
          vin: "JTMHY7AJ5A5887403",
          make: "Lotus",
          model: "Exige",
          mileage: 219
        },
        {
          vin: "WAUAC48H95K372118",
          make: "Chevrolet",
          model: "S10",
          mileage: 220
        },
        {
          vin: "3VWKZ8AJ8BM575335",
          make: "Ford",
          model: "Thunderbird",
          mileage: 221
        },
        {
          vin: "5GALVBED5AJ234203",
          make: "Pontiac",
          model: "Gemini",
          mileage: 222
        },
        {
          vin: "1GT01ZCG3CF622555",
          make: "Acura",
          model: "Integra",
          mileage: 223
        },
        { vin: "2C3CDXJG7DH644638", make: "Lexus", model: "RX", mileage: 224 },
        {
          vin: "WAUEF98E27A273953",
          make: "GMC",
          model: "Suburban 2500",
          mileage: 225
        },
        {
          vin: "1D7RW3BK8AS748559",
          make: "Mitsubishi",
          model: "RVR",
          mileage: 226
        },
        {
          vin: "WBAPK535X9A584263",
          make: "Hyundai",
          model: "Sonata",
          mileage: 227
        },
        {
          vin: "KL4CJHSB9FB033643",
          make: "Ford",
          model: "Festiva",
          mileage: 228
        },
        {
          vin: "WBANF33506C012957",
          make: "Chevrolet",
          model: "S10",
          mileage: 229
        },
        {
          vin: "1G4GE5G33FF914984",
          make: "Mitsubishi",
          model: "Cordia",
          mileage: 230
        },
        {
          vin: "WAULFAFH2EN198697",
          make: "Ford",
          model: "Ranger",
          mileage: 231
        },
        {
          vin: "3D7TT2HT4AG103407",
          make: "Chevrolet",
          model: "Lumina",
          mileage: 232
        }
      ]);
    });
};
