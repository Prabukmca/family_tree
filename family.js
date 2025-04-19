data = {
    "start":"id0",
    "persons": {
        "id0": { "id": "id1", "name": "பரன்-பரை (பரம்பரை)", "own_unions": ["u0"]},
        "id1": { "id": "id1", "name": "பரன்", "own_unions": ["u1"], "parent_union": "u0", "birthplace":"Alberta", "deathplace":"Austin"},
        "id2": { "id": "id2", "name": "பரை", "own_unions": ["u1"], "parent_union": "u0", "birthplace":"Berlin", "deathplace":"Bern" },


        "id3": { "id": "id3", "name": "சேயோன்", "own_unions": ["u2"], "parent_union": "u1"},
        "id4": { "id": "id4", "name": "சேயோள்", "own_unions": ["u2"]},

        "id5": { "id": "id5", "name": "ஓட்டன்", "own_unions": ["u3"], "parent_union": "u2"},
        "id6": { "id": "id6", "name": "ஓட்டி", "own_unions": ["u3"]},

        "id7": { "id": "id7", "name": "பூட்டன்", "own_unions": ["u4"], "parent_union": "u3"},
        "id8": { "id": "id8", "name": "பூட்டி", "own_unions": ["u4"]},

        "id9": { "id": "id9", "name": "பாட்டன்", "own_unions": ["u5"], "parent_union": "u4"},
        "id10": { "id": "id10", "name": "பாட்டி", "own_unions": ["u5"]},

        "id11": { "id": "id11", "name": "தந்தை", "own_unions": ["u6"], "parent_union": "u5"},
        "id12": { "id": "id12", "name": "தாய்", "own_unions": ["u6"]},

        /* "id11": { "id": "id11", "name": "Klaus", "birthyear": 1933, "deathyear": 2013, "own_unions": [], "parent_union": "u1" }, */

        /*"id5": { "id": "id5", "name": "Eric", "own_unions": ["u3"], "parent_union": "u2", "birthplace":"Essen", "deathplace":"Edinburgh" },
        "id6": { "id": "id6", "name": "Francis", "own_unions": ["u2"], "birthplace":"Firenze", "deathplace":"Faizabad" },
        "id7": { "id": "id7", "name": "Greta", "own_unions": ["u2"] },
        "id8": { "id": "id8", "name": "Heinz", "own_unions": ["u5"], "parent_union": "u3" },
        "id9": { "id": "id9", "name": "Iver", "own_unions": ["u4"] },
        "id10": { "id": "id10", "name": "Jennifer", "birthyear": 1950, "own_unions": [], "parent_union": "u4" },
        "id11": { "id": "id11", "name": "Klaus", "birthyear": 1933, "deathyear": 2013, "own_unions": [], "parent_union": "u1" },
        "id12": { "id": "id12", "name": "Lennart", "birthyear": 1999, "own_unions": [], "parent_union": "u5" }, */
    },
    "unions": {
        "u0": { "id": "u0", "partner": ["id0"], "children": ["id1", "id2"] },
        "u1": { "id": "u1", "partner": ["id1", "id2"], "children": ["id3"] },
        "u2": { "id": "u2", "partner": ["id3", "id4"], "children": ["id5"] },
        "u3": { "id": "u3", "partner": ["id5", "id6"], "children": ["id7"] },
        "u4": { "id": "u4", "partner": ["id7", "id8"], "children": ["id9"] },
        "u5": { "id": "u5", "partner": ["id9", "id10"], "children": ["id11"] },
        "u6": { "id": "u6", "partner": ["id11", "id12"], "children": [] },
        /* "u2": { "id": "u2", "partner": ["id6", "id7"], "children": ["id5"] },
        "u3": { "id": "u3", "partner": ["id3", "id5"], "children": ["id8"] },
        "u4": { "id": "u4", "partner": ["id3", "id9"], "children": ["id10"] },
        "u5": { "id": "u5", "partner": ["id8"], "children": ["id12"] }, */
    },
    "links": [
        ["id0", "u0"],
        ["u0", "id1"],
        ["u0", "id2"],
        ["id1", "u1"],
        ["id2", "u1"],
        ["u1", "id3"],
        ["id3", "u2"],
        ["id4", "u2"],
        ["u2", "id5"],
        ["id5", "u3"],
        ["id6", "u3"],
        ["u3", "id7"],
        ["id7", "u4"],
        ["id8", "u4"],
        ["u4", "id9"],
        ["id9", "u5"],
        ["id10", "u5"],
        ["u5", "id11"],
        ["id11", "u6"],
        ["id12", "u6"],
        /* ["u1", "id4"], */
        /* ["u1", "id11"], */

        /* ["id6", "u2"],
        ["id7", "u2"],
        ["u2", "id5"],
        ["id3", "u3"],
        ["id5", "u3"],
        ["u3", "id8"],
        ["id3", "u4"],
        ["id9", "u4"],
        ["u4", "id10"],
        ["id8", "u5"],
        ["u5", "id12"], */
    ]
}