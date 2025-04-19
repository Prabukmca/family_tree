data = {
    "start": "id0",
    "persons": {
        "id0": { "id": "id1", "name": "பரன்-பரை (பரம்பரை)", "own_unions": ["p0"] },
        "id0": { "id": "id2", "name": "சேயோன்-சேயோள்", "own_unions": ["p1"], "parent_union": "p0" },
        "id0": { "id": "id3", "name": "ஓட்டன்-ஓட்டி", "own_unions": ["p2"], "parent_union": "p1" },
        "id0": { "id": "id4", "name": "பூட்டன்-பூட்டி", "own_unions": ["p3"], "parent_union": "p2" },
        "id0": { "id": "id5", "name": "பாட்டன்-பாட்டி (பரம்பரை)", "own_unions": ["p4"], "parent_union": "p3" },
        "id0": { "id": "id6", "name": "தந்தை-தாய் (பரம்பரை)", "own_unions": ["p5"], "parent_union": "p4" },

        "id0": { "id": "id1", "name": "பரன்-பரை (பரம்பரை)", "own_unions": ["u0"] },

        "id1": { "id": "id1", "name": "பூட்டன்", "own_unions": ["p10"], "parent_union": "u0", "birthplace": "Alberta", "deathplace": "Austin" },
        "id2": { "id": "id2", "name": "பூட்டி", "own_unions": ["p10"], "parent_union": "u0", "birthplace": "Berlin", "deathplace": "Bern" },

        "id332": { "id": "id332", "name": "வெங்கடாசலம் செட்டியார்", "own_unions": ["gp1"], "parent_union": "p10" },

        "id333": { "id": "id333", "name": "கந்தப்ப செட்டியார் - குப்பாயம்மாள்", "own_unions": ["p11"], "parent_union": "gp1" },
        "id334": { "id": "id334", "name": "நாராயணசாமி செட்டியார்", "own_unions": ["p12"], "parent_union": "gp1" },
        "id335": { "id": "id335", "name": "--------செட்டியார்", "own_unions": ["p13"], "parent_union": "gp1" },

        "id3": { "id": "id3", "name": "சிவலிங்கம் செட்டியார் - வேதாம்பாள்", "own_unions": ["pootan1"], "parent_union": "p11" },
        "id4": { "id": "id4", "name": "பொன்னுசாமி - பாப்பாயம்மாள்", "own_unions": ["pootan2"], "parent_union": "p11" },
        "id5": { "id": "id5", "name": "ரத்னம் செட்டியார் - அங்காயம்மாள்", "own_unions": ["pootan3"], "parent_union": "p11" },
        "id6": { "id": "id6", "name": "வெங்கடாசலம் செட்டியார் (குஞ்சி பையன்) - சிவபாக்கியம்", "own_unions": ["pootan4"], "parent_union": "p11" },
        "id7": { "id": "id7", "name": "ராஜமாணிக்கம் செட்டியார் - பாக்கியம் ", "own_unions": ["pootan5"], "parent_union": "p11" },
        "id7d": { "id": "id7d", "name": "--- (சிவகாமி பாட்டியின் அம்மா) - செட்டியப்ப சாமியார் (ராமு)", "own_unions": ["pootan6"], "parent_union": "p11" },

        "id7d1": { "id": "id7d1", "name": "சிவகாமி", "own_unions": ["sivagami_paatti"], "parent_union": "pootan6" },
        "id7d2": { "id": "id7d2", "name": "கனகாம்பாள்", "own_unions": ["kanagampal_paatti"], "parent_union": "pootan6" },
        "id7d3": { "id": "id7d3", "name": "முத்துலட்சுமி", "own_unions": ["muthu_paatti"], "parent_union": "pootan6" },

        "id7d21": { "id": "id7d21", "name": "தர்மலிங்கம்", "own_unions": ["kanagampal_paatti_dharmalinkam"], "parent_union": "kanagampal_paatti" },
        "id7d22": { "id": "id7d22", "name": "கந்தசாமி", "own_unions": ["kanagampal_paatti_kandan"], "parent_union": "kanagampal_paatti" },

        "id7d31": { "id": "id7d31", "name": "ஜெய்பால்", "own_unions": ["muthu_paatti_jeyapal"], "parent_union": "muthu_paatti" },
        "id7d32": { "id": "id7d32", "name": "சுப்பு", "own_unions": ["muthu_paatti_subu"], "parent_union": "muthu_paatti" },
        "id7d33": { "id": "id7d33", "name": "மாணிக்கம்", "own_unions": ["muthu_paatti_manikam"], "parent_union": "muthu_paatti" },
        "id7d34": { "id": "id7d34", "name": "நிலா", "own_unions": ["muthu_paatti_nila"], "parent_union": "muthu_paatti" },
        "id7d35": { "id": "id7d35", "name": "பேபி", "own_unions": ["muthu_paatti_baby"], "parent_union": "muthu_paatti" },

        "id8": { "id": "id8", "name": "கோவந்தசாமி செட்டியார் - சிவகாமி", "own_unions": ["paatan1"], "parent_union": "pootan1" },
        "id9": { "id": "id9", "name": "அருணாசலம் செட்டியார் - பாக்கியம்", "own_unions": ["paatan2"], "parent_union": "pootan1" },
        "id10": { "id": "id10", "name": "கிருஷ்ணன் செட்டியார் - அபுரூபம்", "own_unions": ["paatan3"], "parent_union": "pootan1" },
        "id11": { "id": "id11", "name": "தங்காள் - நாராயணன்", "own_unions": ["paatan4"], "parent_union": "pootan1" },
        "id12": { "id": "id12", "name": "சிவகாமி - ஆறுமுகம் - ", "own_unions": ["paatan5"], "parent_union": "pootan1" },

        "id13": { "id": "id13", "name": "தங்கவேலு", "own_unions": ["paatan6"], "parent_union": "pootan2" },
        "id14": { "id": "id14", "name": "வெங்கடாச்சலம் - மொட்டை அண்ணன்", "own_unions": ["paatan7"], "parent_union": "pootan2" },

        "id15": { "id": "id15", "name": "கோவிந்தம்மாள் வெள்ளார் ", "own_unions": ["paatan8"], "parent_union": "pootan3" },
        "id16": { "id": "id16", "name": "கோபால் பெரும்பாலை", "own_unions": ["paatan9"], "parent_union": "pootan3" },
        "id17": { "id": "id17", "name": "சாரதா பாட்டி", "own_unions": ["paatan10"], "parent_union": "pootan3" },
        "id18": { "id": "id18", "name": "மாணிக்கம் தாத்தா வெள்ளார்", "own_unions": ["paatan11"], "parent_union": "pootan3" },
        "id19": { "id": "id19", "name": "லட்சுமி பாட்டி குமாரபாளையம்", "own_unions": ["paatan12"], "parent_union": "pootan3" },

        "id20": { "id": "id20", "name": "சாரதா", "own_unions": ["paatan13"], "parent_union": "pootan4" },
        "id21": { "id": "id21", "name": "வள்ளியம்மாள்", "own_unions": ["paatan14"], "parent_union": "pootan4" },
        "id22": { "id": "id22", "name": "கண்ணம்மாள்", "own_unions": ["paatan15"], "parent_union": "pootan4" },
        "id23": { "id": "id23", "name": "தர்மலிங்கம் காடையாம்பட்டி", "own_unions": ["paatan16"], "parent_union": "pootan4" },

        "id24": { "id": "id24", "name": "நடராஜன்", "own_unions": ["paatan17"], "parent_union": "pootan5" },
        "id25": { "id": "id25", "name": "சுப்பிரமணி", "own_unions": ["paatan18"], "parent_union": "pootan5" },
        "id26": { "id": "id26", "name": "பிரகாஷ்", "own_unions": ["paatan19"], "parent_union": "pootan5" },
        "id27": { "id": "id27", "name": "மோகன்", "own_unions": ["paatan20"], "parent_union": "pootan5" },
        "id28": { "id": "id28", "name": "லட்சுமி", "own_unions": ["paatan21"], "parent_union": "pootan5" },
        "id29": { "id": "id29", "name": "சாரதா", "own_unions": ["paatan22"], "parent_union": "pootan5" },

        "id30": { "id": "id30", "name": "கந்தசாமி - இந்திராணி", "own_unions": ["periyamama"], "parent_union": "paatan1" },
        "id31": { "id": "id31", "name": "சதாசிவம் - ஜோதி", "own_unions": ["sadamama"], "parent_union": "paatan1" },
        "id32": { "id": "id32", "name": "ஜெயபால் - செல்லம்மாள், காளியம்மாள்", "own_unions": ["jayapalmama"], "parent_union": "paatan1" },
        "id33": { "id": "id33", "name": "வடிவேல் - ஜெகதீஸ்வரி", "own_unions": ["vadivelmama"], "parent_union": "paatan1" },
        "id34": { "id": "id34", "name": "ஜானகி (மாயாவதி) - குப்புசாமி", "own_unions": ["mayavathiamma"], "parent_union": "paatan1" },

        "id35": { "id": "id35", "name": "சண்முகம்", "own_unions": [], "parent_union": "paatan2" },
        "id36": { "id": "id36", "name": "ராஜேந்திரன்", "own_unions": [], "parent_union": "paatan2" },
        "id37": { "id": "id37", "name": "முருகன்", "own_unions": [], "parent_union": "paatan2" },

        "id38": { "id": "id38", "name": "கல்யாணி", "own_unions": [], "parent_union": "paatan3" },

        "id39": { "id": "id39", "name": "ரவி", "own_unions": [], "parent_union": "paatan4" },
        "id40": { "id": "id40", "name": "பெயர் தெரியவில்லை", "own_unions": [], "parent_union": "paatan4" },

        "id41": { "id": "id41", "name": "ராணி", "own_unions": [], "parent_union": "paatan6" },
        "id42": { "id": "id42", "name": "முருகன்", "own_unions": [], "parent_union": "paatan6" },
        "id43": { "id": "id43", "name": "கலா பூச்சூர்", "own_unions": [], "parent_union": "paatan6" },

        "id44": { "id": "id44", "name": "ராதா KPM", "own_unions": [], "parent_union": "paatan7" },
        "id45": { "id": "id45", "name": "ருக்குமணி மேட்டூர்", "own_unions": [], "parent_union": "paatan7" },
        "id46": { "id": "id46", "name": "கண்ணன் KPM", "own_unions": [], "parent_union": "paatan7" },

        "id47": { "id": "id47", "name": "விசாலாட்சி - கிருஷ்ணகிரி", "own_unions": [], "parent_union": "paatan8" },
        "id48": { "id": "id48", "name": "நடராஜன் - தர்மபுரி", "own_unions": [], "parent_union": "paatan8" },
        "id49": { "id": "id49", "name": "ராமமூர்த்தி - தர்மபுரி", "own_unions": [], "parent_union": "paatan8" },
        "id50": { "id": "id50", "name": "வளர்மதி - சேலம்", "own_unions": [], "parent_union": "paatan8" },

        "id51": { "id": "id51", "name": "தேவகி - MGR நகர்", "own_unions": [], "parent_union": "paatan9" },
        "id52": { "id": "id52", "name": "ராணி - MGR நகர்", "own_unions": [], "parent_union": "paatan9" },
        "id53": { "id": "id53", "name": "ஆறுமுகம் - பெரும்பாலை", "own_unions": [], "parent_union": "paatan9" },

        "id54": { "id": "id54", "name": "பரிமளா", "own_unions": [], "parent_union": "paatan10" },
        "id55": { "id": "id55", "name": "ராணி", "own_unions": [], "parent_union": "paatan10" },
        "id56": { "id": "id56", "name": "விமலா", "own_unions": [], "parent_union": "paatan10" },
        "id57": { "id": "id57", "name": "பிரேமா", "own_unions": [], "parent_union": "paatan10" },
        "id58": { "id": "id58", "name": "அனிதா", "own_unions": [], "parent_union": "paatan10" },
        "id59": { "id": "id59", "name": "பேபி", "own_unions": [], "parent_union": "paatan10" },
        "id60": { "id": "id60", "name": "எழில்", "own_unions": [], "parent_union": "paatan10" },

        "id61": { "id": "id61", "name": "விஜயா ", "own_unions": [], "parent_union": "paatan11" },
        "id62": { "id": "id62", "name": "செல்வம் - வெள்ளார்", "own_unions": [], "parent_union": "paatan11" },
        "id63": { "id": "id63", "name": "சாந்தி - சின்ன பொண்ணு ", "own_unions": [], "parent_union": "paatan11" },
        "id64": { "id": "id64", "name": "ரேணுகா - ஓலக்கு சித்தி ", "own_unions": [], "parent_union": "paatan11" },

        "id65": { "id": "id65", "name": "கண்ணன் ", "own_unions": [], "parent_union": "paatan12" },
        "id66": { "id": "id66", "name": "குமார் ", "own_unions": [], "parent_union": "paatan12" },
        "id67": { "id": "id67", "name": "கௌரி ", "own_unions": [], "parent_union": "paatan12" },
        "id68": { "id": "id68", "name": "ரவி ", "own_unions": [], "parent_union": "paatan12" },

        "id69": { "id": "id69", "name": "கமலா ", "own_unions": [], "parent_union": "paatan13" },
        "id70": { "id": "id70", "name": "மல்லிகா  ", "own_unions": [], "parent_union": "paatan13" },
        "id71": { "id": "id71", "name": "பெரியசாமி  ", "own_unions": [], "parent_union": "paatan13" },
        "id72": { "id": "id72", "name": "செல்வம்  ", "own_unions": [], "parent_union": "paatan13" },
        "id73": { "id": "id73", "name": "ஆறுமுகம்  ", "own_unions": [], "parent_union": "paatan13" },

        "id74": { "id": "id74", "name": "பெயர் தெரியவில்லை - மேச்சேரி", "own_unions": [], "parent_union": "paatan14" },
        "id75": { "id": "id75", "name": "ரவி - KPM-MGR-நகர்", "own_unions": [], "parent_union": "paatan14" },
        "id76": { "id": "id76", "name": "வெங்கடேஷ் KPM", "own_unions": [], "parent_union": "paatan14" },

        "id77": { "id": "id77", "name": "மனோகரன் KPM-MRG-நகர் ", "own_unions": [], "parent_union": "paatan15" },

        "id78": { "id": "id78", "name": "புஷ்பா - தமிழ்", "own_unions": ["periyamama_pushpa"], "parent_union": "periyamama" },
        "id79": { "id": "id79", "name": "மணி - கண்ணன்", "own_unions": ["periyamama_mani"], "parent_union": "periyamama" },
        "id80": { "id": "id80", "name": "ராமு - வசந்தி", "own_unions": ["periyamama_ramu"], "parent_union": "periyamama" },
        "id81": { "id": "id81", "name": "லட்சுமணன் - கௌரி", "own_unions": ["periyamama_laxmanan"], "parent_union": "periyamama" },

        "id82": { "id": "id82", "name": "அசோக் - ரேவதி ", "own_unions": ["sadamama_ashok"], "parent_union": "sadamama" },
        "id83": { "id": "id83", "name": "குமார் - ராஜீ ", "own_unions": ["sadamama_kumar"], "parent_union": "sadamama" },

        "id84": { "id": "id84", "name": "விவேக் - நந்தினி", "own_unions": ["jayapalmama_vivek"], "parent_union": "jayapalmama" },

        "id85": { "id": "id85", "name": "ஜெயபாரதி - தினேஷ்", "own_unions": ["vadivelmama_bharathi"], "parent_union": "valivelmama" },
        "id86": { "id": "id86", "name": "சக்திவேல் - அர்ச்சனா", "own_unions": ["valivelmama_sakthivel"], "parent_union": "vadivelmama" },

        "id87": {"id":"id87", "name":"சங்கர் - லலிதா", "own_unions": ["sankar_lalitha"], "parent_union": "mayavathiamma"},
        "id88": {"id":"id88", "name":"பிரபு - பிரியா", "own_unions": ["prabu_priya"], "parent_union": "mayavathiamma"},


    },
    // "own_unions": {"id": "own_unions", "partner": ["id of own_union"], "children": ["id of children"] }, 
    "unions": {
        "u0": { "id": "u0", "partner": ["id0"], "children": ["id1", "id2"] },
        "p10": { "id": "p10", "partner": ["id1", "id2"], "children": ["id3"] },
        "gp1": { "id": "gp1", "partner": ["id332"], "children": ["id333, id334, id335"] },
        "p11": { "id": "p11", "partner": ["id3"], "children": ["id3, id4, id5, id6, id7, id7d"] },

        "pootan1": { "id": "pootan1", "partner": ["id3"], "children": ["id8,id9,id10,id11,id12"] },
        "pootan2": { "id": "pootan2", "partner": ["id4"], "children": ["id13,id14"] },
        "pootan3": { "id": "pootan3", "partner": ["id5"], "children": ["id15,id16,id17,id18,id19"] },
        "pootan4": { "id": "pootan4", "partner": ["id6"], "children": ["id20,id21,id22,id23"] },
        "pootan5": { "id": "pootan5", "partner": ["id7"], "children": ["id24,id25,id26,id27,id28,id29"] },
        "pootan6": { "id": "pootan6", "partner": ["id7d"], "children": ["id7d1,id7d2,id7d3"] },

        "paatan1": { "id": "paatan1", "partner": ["id8"], "children": ["id30,id31,id32,id33,id34"] },
        "paatan2": { "id": "paatan2", "partner": [], "children": ["id35,id36,id37"] },
        "paatan3": { "id": "paatan3", "partner": [], "children": ["id38"] },
        "paatan4": { "id": "paatan4", "partner": [], "children": ["id39,id40"] },
        "paatan5": { "id": "paatan5", "partner": [], "children": [] },

        "paatan6": { "id": "paatan6", "partner": [], "children": ["id41,id42,id43"] },
        "paatan7": { "id": "paatan7", "partner": [], "children": ["id44,id45,id46"] },

        "paatan8": { "id": "paatan8", "partner": [], "children": ["id47,id48,id49,id50"] },
        "paatan9": { "id": "paatan9", "partner": [], "children": ["id51,id52,id53"] },
        "paatan10": { "id": "paatan10", "partner": [], "children": ["id54,id55,id56,id57,id58,id59,id60"] },
        "paatan11": { "id": "paatan11", "partner": [], "children": ["id61,id62,id63,id64"] },
        "paatan12": { "id": "paatan12", "partner": [], "children": ["id65,id66,id67,id68"] },
        "paatan13": { "id": "paatan13", "partner": [], "children": ["id69,id70,id71,id72,id73"] },
        "paatan14": { "id": "paatan14", "partner": [], "children": ["id74,id75,id76"] },
        "paatan15": { "id": "paatan15", "partner": [], "children": ["id77"] },
        "paatan16": { "id": "paatan16", "partner": [], "children": ["id78,id79,id80"] },

    // "own_unions": {"id": "own_unions", "partner": ["id of own_union"], "children": ["id of children"] }, 
        "periyamama" : {"id": "periyamama", "partner": ["id30"], "children": ["id78","id79","id80","id81"] },
        "sadamama" : {"id": "sadamama", "partner": ["id31"], "children": ["id82","id83"] },
        "jayapalmama" : {"id": "jayapalmama", "partner": ["id32"], "children": ["id84"] },
        "vadivelmama" : {"id": "vadivelmama", "partner": ["id33"], "children": ["id85","id86"] },

        "mayavathiamma" : {"id": "mayavathiamma", "partner": ["id34"], "children": ["id87","id88"] },

        "sivagami_paatti" : {"id": "sivagami_paatti", "partner": ["id7d1"], "children": [] },
        "kanagampal_paatti" : {"id": "kanagampal_paatti", "partner": ["id7d2"], "children": ["id721", "id722"] },
        "muthu_paatti" : {"id": "muthu_paatti", "partner": ["id7d3"], "children": ["id7d31", "id7d32", "id7d33", "id7d34","id7d35"] },
   
    },

    // ["Id" : "Own Unions"]
    // ["Parent Union" : "Id"]

    "links": [

        ["id0", "u0"],
        ["u0", "id1"],
        ["u0", "id2"],

        ["id1", "p10"],
        ["id2", "p10"],
        ["p10", "id332"],
        ["id332", "gp1"],


        ["gp1", "id333"],
        ["gp1", "id334"],
        ["gp1", "id335"],

        ["id333", "p11"],
        ["id334", "p12"],
        ["id335", "p13"],


        ["p11", "id3"],
        ["p11", "id4"],
        ["p11", "id5"],
        ["p11", "id6"],
        ["p11", "id7"],
        ["p11", "id7d"],


        ["id3", "pootan1"],
        ["id4", "pootan2"],
        ["id5", "pootan3"],
        ["id6", "pootan4"],
        ["id7", "pootan5"],
        ["id7d", "pootan6"],

        ["id8", "paatan1"],
        ["id9", "paatan2"],
        ["id10", "paatan3"],
        ["id11", "paatan4"],
        ["id12", "paatan5"],
        ["id13", "paatan6"],
        ["id14", "paatan7"],
        ["id15", "paatan8"],
        ["id16", "paatan9"],
        ["id17", "paatan10"],
        ["id18", "paatan11"],
        ["id19", "paatan12"],
        ["id20", "paatan13"],
        ["id21", "paatan14"],
        ["id22", "paatan15"],
        ["id23", "paatan16"],

        ["pootan1", "id8"],
        ["pootan1", "id9"],
        ["pootan1", "id10"],
        ["pootan1", "id11"],
        ["pootan1", "id12"],

        ["pootan2", "id13"],
        ["pootan2", "id14"],

        ["pootan3", "id15"],
        ["pootan3", "id16"],
        ["pootan3", "id17"],
        ["pootan3", "id18"],
        ["pootan3", "id19"],

        ["pootan4", "id20"],
        ["pootan4", "id21"],
        ["pootan4", "id22"],
        ["pootan4", "id23"],

        ["pootan5", "id24"],
        ["pootan5", "id25"],
        ["pootan5", "id26"],
        ["pootan5", "id27"],
        ["pootan5", "id28"],
        ["pootan5", "id29"],

        ["pootan6", "id7d1"],
        ["pootan6", "id7d2"],
        ["pootan6", "id7d3"],

        ["id7d2", "kanagampal_paatti"],

        ["kanagampal_paatti", "id7d21"],
        ["kanagampal_paatti", "id7d22"],

        ["id7d3", "muthu_paatti"],

        ["muthu_paatti", "id7d31"],
        ["muthu_paatti", "id7d32"],
        ["muthu_paatti", "id7d33"],
        ["muthu_paatti", "id7d34"],
        ["muthu_paatti", "id7d35"],

        ["paatan1", "id30"],
        ["paatan1", "id31"],
        ["paatan1", "id32"],
        ["paatan1", "id33"],
        ["paatan1", "id34"],       

        ["paatan2", "id35"],
        ["paatan2", "id36"],
        ["paatan2", "id37"],

        ["paatan3", "id38"],

        ["paatan4", "id39"],
        ["paatan4", "id40"],

        ["paatan6", "id41"],
        ["paatan6", "id42"],
        ["paatan6", "id43"],

        ["paatan7", "id44"],
        ["paatan7", "id45"],
        ["paatan7", "id46"],

        ["paatan8", "id47"],
        ["paatan8", "id48"],
        ["paatan8", "id49"],
        ["paatan8", "id50"],

        ["paatan9", "id51"],
        ["paatan9", "id52"],
        ["paatan9", "id53"],

        ["paatan10", "id54"],
        ["paatan10", "id55"],
        ["paatan10", "id56"],
        ["paatan10", "id57"],
        ["paatan10", "id58"],
        ["paatan10", "id59"],
        ["paatan10", "id60"],

        ["paatan11", "id61"],
        ["paatan11", "id62"],
        ["paatan11", "id63"],
        ["paatan11", "id64"],

        ["paatan12", "id65"],
        ["paatan12", "id66"],
        ["paatan12", "id67"],
        ["paatan12", "id68"],

        ["paatan13", "id69"],
        ["paatan13", "id70"],
        ["paatan13", "id71"],
        ["paatan13", "id72"],
        ["paatan13", "id73"],

        ["paatan14", "id74"],
        ["paatan14", "id75"],
        ["paatan14", "id76"],

        ["paatan15", "id77"],

        ["id30", "periyamama"],

        ["periyamama", "id78"],
        ["periyamama", "id79"],
        ["periyamama", "id80"],
        ["periyamama", "id81"],
        
        ["id78", "periyamama_pushpa"],
        ["id79", "periyamama_mani"],
        ["id80", "periyamama_ramu"],
        ["id81", "periyamama_laxmanan"],

        ["id31", "sadamama"],   
        ["sadamama", "id82"],
        ["sadamama", "id83"],
        ["id82", "sadamama_ashok"],
        ["id83", "sadamama_kumar"],

        ["id32", "jayapalmama"],
        ["jayapalmama", "id84"],
        ["id84", "jayapalmama_vivek"],

        ["id33", "vadivelmama"],
        ["vadivelmama", "id85"],
        ["vadivelmama", "id86"],
        ["id85", "vadivelmama_bharathi"],
        ["id86", "vadivelmama_sakthivel"],

        ["id34", "mayavathiamma"],
        ["mayavathiamma", "id87"],
        ["mayavathiamma", "id88"],
        ["id87", "sankar_lalitha"],
        ["id88", "prabu_priya"],



    


    ]
}