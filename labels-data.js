/* ============================================================
   LABEL CATALOG DATA, single source of truth.
   ------------------------------------------------------------
   Every row is a POPULAR STARTING SPEC, not a stocked SKU and
   not a price list. We print custom, so a customer picks the
   closest row and changes anything before we quote it.
   grounding: 'grounded' = the site or a real printed sample
   already backs this. 'standard' = a genuine label-industry
   standard we offer as a starting point, not a site claim.
   Regenerate the category pages after editing:
     node build-label-pages.js
   ============================================================ */
window.MSS_LABELS = [
 {
  "id": "product-labels",
  "name": "Product & Brand Labels",
  "intro": "These are the specs product and brand customers start from, for jars, bottles, tins, boxes, and pouches. Every label is printed to order, so a row is a starting point and not a stocked item, change the size, material, or finish and add it to your quote list.",
  "use_cases": [
   "Candle and soap jars",
   "Hot sauce, syrup, and small-batch bottles",
   "Coffee, granola, and pet treat pouches",
   "Salve, balm, and candle tins",
   "Gift box and carton seals",
   "Skincare and beauty containers",
   "Supplement bottles and tubs"
  ],
  "variants": [
   {
    "label": "Jar Front Label",
    "size": "2\" x 3\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "The front panel on a candle, honey, salsa, or spice jar, where the brand does the work.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1.5\" x 2\"",
      "detail": "Small salve and sample jars"
     },
     {
      "label": "2\" x 3\"",
      "detail": "Standard candle and honey jars"
     },
     {
      "label": "2.25\" x 1.25\"",
      "detail": "Narrow brand strip, small jars"
     },
     {
      "label": "2.5\" x 2.5\"",
      "detail": "Square face on wide jars"
     },
     {
      "label": "3\" x 2\"",
      "detail": "Wider face on short jars"
     },
     {
      "label": "3\" x 4\"",
      "detail": "Tall face on quart jars"
     },
     {
      "label": "4\" x 3\"",
      "detail": "Wide face on large jars"
     }
    ]
   },
   {
    "label": "Bottle & Jar Wrap",
    "size": "4\" x 3\"",
    "format": "Roll, 3\" core",
    "material": "Clear film",
    "adhesive": "Permanent",
    "typical_use": "Wraps the body of a bottle or jar for sauces, syrups, and cold press, with the no-label look on clear glass and plastic.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "3\" x 2\"",
      "detail": "Short wrap, small sauce bottles"
     },
     {
      "label": "4\" x 3\"",
      "detail": "Standard wrap for 8 oz"
     },
     {
      "label": "5\" x 3\"",
      "detail": "Wrap for 12 oz bottles"
     },
     {
      "label": "6\" x 4\"",
      "detail": "Wrap for 16 oz bottles"
     },
     {
      "label": "8\" x 3\"",
      "detail": "Full wrap on tall bottles"
     },
     {
      "label": "8.5\" x 4\"",
      "detail": "Growler and large bottle wrap"
     }
    ]
   },
   {
    "label": "Tin & Metal Label",
    "size": "2\" x 2\"",
    "format": "Sheet",
    "material": "Metal",
    "adhesive": "Permanent",
    "typical_use": "Durable tin and metal labels, the kind most printers will not handle. We run them.",
    "grounding": "grounded",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1.5\" circle",
      "detail": "Lip balm and small tins"
     },
     {
      "label": "2\" circle",
      "detail": "Salve and candle tin lids"
     },
     {
      "label": "2.5\" circle",
      "detail": "Four ounce tin lids"
     },
     {
      "label": "3\" circle",
      "detail": "Eight ounce tin lids"
     },
     {
      "label": "2\" x 2\"",
      "detail": "Square face on metal cans"
     },
     {
      "label": "3\" x 2\"",
      "detail": "Side band on larger tins"
     }
    ]
   },
   {
    "label": "Foil Crest Seal",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Permanent",
    "typical_use": "A foil seal or crest on a lid, box, or carton when the package needs to feel finished.",
    "grounding": "grounded",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1\" circle",
      "detail": "Small envelope and pouch seals"
     },
     {
      "label": "1.25\" circle",
      "detail": "Tight seal on narrow flaps"
     },
     {
      "label": "1.5\" circle",
      "detail": "Common carton and box seal"
     },
     {
      "label": "2\" circle",
      "detail": "Lid crest on jars, boxes"
     },
     {
      "label": "2.5\" circle",
      "detail": "Larger crest on gift boxes"
     },
     {
      "label": "3\" circle",
      "detail": "Statement seal on big cartons"
     }
    ]
   },
   {
    "label": "Cap & Lid Seal",
    "size": "1.5\" circle",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Puts the logo, flavor, or scent name on a jar lid or a bottle cap.",
    "grounding": "standard",
    "sub_axis": "Finish",
    "subs": [
     {
      "label": "Gloss",
      "detail": "Bright, high contrast lid seal"
     },
     {
      "label": "Matte",
      "detail": "Soft, low glare lid seal"
     },
     {
      "label": "Spot UV",
      "detail": "Raised shine on the logo"
     },
     {
      "label": "Gloss overlaminate",
      "detail": "Adds scuff and moisture protection"
     },
     {
      "label": "Matte overlaminate",
      "detail": "Soft look plus added durability"
     }
    ]
   },
   {
    "label": "Scent & Batch Dot",
    "size": "0.75\" circle",
    "format": "Roll, 1\" core",
    "material": "White film",
    "adhesive": "Removable",
    "typical_use": "Marks scent, batch, or variant on the bottom of a jar and peels clean.",
    "grounding": "standard",
    "sub_axis": "Adhesive",
    "subs": [
     {
      "label": "Removable",
      "detail": "Peels clean off finished jars"
     },
     {
      "label": "Permanent",
      "detail": "Stays put on shipped goods"
     },
     {
      "label": "High tack",
      "detail": "Grips textured or curved bottoms"
     },
     {
      "label": "Freezer grade",
      "detail": "Holds through cold storage"
     },
     {
      "label": "All-temperature",
      "detail": "Applies inside a cold room"
     }
    ]
   },
   {
    "label": "Box Seal Band",
    "size": "1\" x 2.625\"",
    "format": "Roll, 1\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Closes a folded carton or gift box so it arrives the way you packed it.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "0.5\" x 1.75\"",
      "detail": "Slim seal on tissue wrap"
     },
     {
      "label": "0.75\" x 2\"",
      "detail": "Short band, small gift boxes"
     },
     {
      "label": "1\" x 2.625\"",
      "detail": "Standard band on folded cartons"
     },
     {
      "label": "1\" x 3\"",
      "detail": "Longer reach across wider flaps"
     },
     {
      "label": "1.5\" x 4\"",
      "detail": "Wide band on shipper cartons"
     },
     {
      "label": "2\" x 4\"",
      "detail": "Broad seal across big lids"
     }
    ]
   },
   {
    "label": "Back Panel Label",
    "size": "3\" x 5\"",
    "format": "Roll, 3\" core",
    "material": "Matte paper",
    "adhesive": "Permanent",
    "typical_use": "Directions, the story behind the product, and the fine print on the back of a jar or box.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "2\" x 3\"",
      "detail": "Short copy on small jars"
     },
     {
      "label": "2.25\" x 4\"",
      "detail": "Narrow panel on slim bottles"
     },
     {
      "label": "3\" x 4\"",
      "detail": "Directions on standard bottles"
     },
     {
      "label": "3\" x 5\"",
      "detail": "Full story plus fine print"
     },
     {
      "label": "4\" x 4\"",
      "detail": "Square back panel on tubs"
     },
     {
      "label": "4\" x 6\"",
      "detail": "Long copy on large containers"
     }
    ]
   },
   {
    "label": "Pouch Front Label",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "High tack",
    "typical_use": "Covers the face of a stand-up pouch for coffee, granola, or pet treats. High tack helps on textured pouch film.",
    "grounding": "standard",
    "sub_axis": "Adhesive",
    "subs": [
     {
      "label": "High tack",
      "detail": "Grips textured stand-up pouch film"
     },
     {
      "label": "Permanent",
      "detail": "Smooth, coated pouch surfaces"
     },
     {
      "label": "All-temperature",
      "detail": "Applies inside a cool room"
     },
     {
      "label": "Freezer grade",
      "detail": "Frozen pouch goods"
     },
     {
      "label": "Removable",
      "detail": "Trial runs and seasonal swaps"
     }
    ]
   },
   {
    "label": "Kraft Small-Batch Label",
    "size": "3\" x 2\"",
    "format": "Roll, 3\" core",
    "material": "Kraft paper",
    "adhesive": "Permanent",
    "typical_use": "The natural, unbleached look for soap bars, candles, and handmade goods.",
    "grounding": "standard",
    "sub_axis": "Finish",
    "subs": [
     {
      "label": "Uncoated natural",
      "detail": "Bare kraft, matte and tactile"
     },
     {
      "label": "Matte",
      "detail": "Soft finish, keeps the natural look"
     },
     {
      "label": "Gloss",
      "detail": "Adds contrast over kraft brown"
     },
     {
      "label": "Spot UV",
      "detail": "Shine on the logo only"
     },
     {
      "label": "Matte overlaminate",
      "detail": "Protects kraft from oils, scuffing"
     }
    ]
   },
   {
    "label": "Cold Case Label",
    "size": "2\" x 4\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Freezer grade",
    "typical_use": "Frozen and refrigerated retail items, where a paper label can lift. Tell us how cold it gets and we will spec the adhesive.",
    "grounding": "standard",
    "sub_axis": "Adhesive",
    "subs": [
     {
      "label": "Freezer grade",
      "detail": "Applied before the product freezes"
     },
     {
      "label": "All-temperature",
      "detail": "Applies onto already cold containers"
     },
     {
      "label": "Permanent",
      "detail": "Refrigerated items, not frozen"
     },
     {
      "label": "High tack",
      "detail": "Textured or curved cold packaging"
     },
     {
      "label": "Removable",
      "detail": "Seasonal or promotional cold items"
     }
    ]
   },
   {
    "label": "First Run Sample Label",
    "size": "3.5\" x 2\"",
    "format": "Sheet",
    "material": "Matte paper",
    "adhesive": "Permanent",
    "typical_use": "A short first run or a trade show batch, printed on sheets instead of a roll.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "2\" x 1\"",
      "detail": "Small sample and tester bottles"
     },
     {
      "label": "2\" x 2\"",
      "detail": "Square sample on small tins"
     },
     {
      "label": "3.5\" x 2\"",
      "detail": "Standard sheet label size"
     },
     {
      "label": "4\" x 2\"",
      "detail": "Wider face for short runs"
     },
     {
      "label": "4\" x 3\"",
      "detail": "Trade show sample jars"
     },
     {
      "label": "3\" x 5\"",
      "detail": "Back panel on samples"
     }
    ]
   },
   {
    "label": "Line-Run Product Label",
    "size": "4\" x 3\"",
    "format": "Fan-fold",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Fan-fold feeds a print and apply line without roll changes.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "3\" x 2\"",
      "detail": "Small containers on the line"
     },
     {
      "label": "2\" x 4\"",
      "detail": "Tall narrow bottles"
     },
     {
      "label": "4\" x 3\"",
      "detail": "Standard fan-fold product label"
     },
     {
      "label": "4\" x 4\"",
      "detail": "Square face on tubs"
     },
     {
      "label": "4\" x 6\"",
      "detail": "Large containers and pouches"
     },
     {
      "label": "6\" x 4\"",
      "detail": "Wide face on cases"
     }
    ]
   }
  ],
  "art": "images/labels-stock/uncoated-paper-stock-tile.webp",
  "seo": "Custom Product & Brand Labels"
 },
 {
  "id": "food-beverage",
  "name": "Food & Beverage Labels",
  "intro": "Coffee, cocoa, candy, sauces, and bottled drinks each ask something different from a label, from a sealed foil pod lid to a clear wrap on a cold bottle. These are the specs food and beverage brands start from most often, and you can change any part of any one of them before we quote it.",
  "use_cases": [
   "Single-serve coffee and cocoa pod lids",
   "Roasted coffee bags, from a first short run to full production",
   "Chocolate, brittle, and boxed candy",
   "Hot sauce, salsa, and jarred sauces",
   "Cold brew, kombucha, and bottled juice",
   "Frozen and refrigerated grab-and-go items",
   "Nutrition, ingredient, and allergen panels"
  ],
  "variants": [
   {
    "label": "Single-serve pod lid",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil lidstock",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Keurig-compatible coffee and cocoa cups. We print pod lids for Crazy Cups, Brooklyn Bean Roastery, Mucho Gusto, and Green Mountain. Foil lids are our one product with a minimum, at 5,000 lids.",
    "grounding": "grounded",
    "sub_axis": "Pod format",
    "subs": [
     {
      "label": "Standard 2\" coffee cup",
      "detail": "Everyday K-Cup coffee lid, 5,000 minimum"
     },
     {
      "label": "Cocoa and cider cup",
      "detail": "Hot cocoa pods, 5,000 minimum"
     },
     {
      "label": "Tea and chai pod",
      "detail": "Tea and chai cups, 5,000 minimum"
     },
     {
      "label": "Wide-mouth 2.25\" cup",
      "detail": "Bowl-style cups, 5,000 lid minimum"
     },
     {
      "label": "Espresso capsule, 1.5\" cup",
      "detail": "Small capsules, 5,000 lid minimum"
     },
     {
      "label": "Variety pack, one per flavor",
      "detail": "Own lid per flavor, 5,000 minimum"
     },
     {
      "label": "Private label co-pack run",
      "detail": "One spec per customer, 5,000 minimum"
     },
     {
      "label": "Seasonal or limited edition",
      "detail": "Short holiday run, 5,000 minimum"
     },
     {
      "label": "Die-cut lids, stacked flat",
      "detail": "Hand sealing, 5,000 lid minimum"
     }
    ]
   },
   {
    "label": "Coffee bag front label",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Roast name, origin, and brand on a 12 oz or 5 lb coffee bag.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "2\" x 3\"",
      "detail": "Sample and 2 oz bags"
     },
     {
      "label": "3\" x 4\"",
      "detail": "4 oz single-origin bags"
     },
     {
      "label": "3\" x 5\"",
      "detail": "8 oz retail bags"
     },
     {
      "label": "4\" x 6\"",
      "detail": "12 oz standard coffee bags"
     },
     {
      "label": "5\" x 7\"",
      "detail": "2 lb and 5 lb bags"
     },
     {
      "label": "4\" circle",
      "detail": "Round front label, any bag"
     }
    ]
   },
   {
    "label": "Nutrition and ingredient panel",
    "size": "3\" x 5\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Nutrition, ingredient, and allergen copy on the back of a jar or bag. Send us your panel and our design team will set it.",
    "grounding": "grounded",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1.5\" x 2\"",
      "detail": "Short panel for small jars"
     },
     {
      "label": "2\" x 3\"",
      "detail": "Standard back panel, small bags"
     },
     {
      "label": "2\" x 5\"",
      "detail": "Tall panel for woozy bottles"
     },
     {
      "label": "3\" x 4\"",
      "detail": "Jars and mid-size bags"
     },
     {
      "label": "3\" x 5\"",
      "detail": "Full panel with allergen copy"
     },
     {
      "label": "4\" x 6\"",
      "detail": "Large panel, long ingredient lists"
     }
    ]
   },
   {
    "label": "Candy bar wrap label",
    "size": "2\" x 3\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Chocolate bars, brittle, and boxed confections that have to look appetizing on a crowded shelf.",
    "grounding": "grounded",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1.5\" x 2\"",
      "detail": "Mini and fun-size bars"
     },
     {
      "label": "2\" x 3\"",
      "detail": "Standard chocolate bar front"
     },
     {
      "label": "2.5\" x 4\"",
      "detail": "Large bar and brittle slab"
     },
     {
      "label": "1.75\" x 6\"",
      "detail": "Belly band around a bar"
     },
     {
      "label": "3\" x 5\"",
      "detail": "Boxed confection top label"
     },
     {
      "label": "4\" x 6\"",
      "detail": "Gift box and multipack front"
     }
    ]
   },
   {
    "label": "Candy bag seal",
    "size": "1.5\" circle",
    "format": "Roll, 1\" core",
    "material": "Matte paper",
    "adhesive": "Permanent",
    "typical_use": "Closing the fold on a poly bag of bulk candy and putting your name on it.",
    "grounding": "standard",
    "sub_axis": "Finish",
    "subs": [
     {
      "label": "Matte paper",
      "detail": "Soft non-glare, takes pen marks"
     },
     {
      "label": "Semi-gloss paper",
      "detail": "Everyday finish, sharp color"
     },
     {
      "label": "High gloss paper",
      "detail": "Shiny finish for candy color"
     },
     {
      "label": "Uncoated paper",
      "detail": "Natural look for rustic brands"
     },
     {
      "label": "Clear film",
      "detail": "Disappears on a clear bag"
     },
     {
      "label": "White film",
      "detail": "Moisture resistant on poly bags"
     },
     {
      "label": "Foil",
      "detail": "Metallic seal for gift bags"
     }
    ]
   },
   {
    "label": "Sauce and condiment bottle",
    "size": "2\" x 4\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Woozy bottles of hot sauce, plus salsa, dressings, marinades, and jam jars. Film is the usual starting pick when the container gets handled wet.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1.5\" x 3\"",
      "detail": "5 oz woozy hot sauce"
     },
     {
      "label": "2\" x 4\"",
      "detail": "Standard woozy bottle front"
     },
     {
      "label": "2.5\" x 4\"",
      "detail": "12 oz sauce bottles"
     },
     {
      "label": "3\" x 4\"",
      "detail": "16 oz salsa jars"
     },
     {
      "label": "2\" x 6\"",
      "detail": "Wrap for a tall bottle"
     },
     {
      "label": "3\" circle",
      "detail": "Jar lid top label"
     }
    ]
   },
   {
    "label": "Clear bottled drink label",
    "size": "4\" x 5\"",
    "format": "Roll, 3\" core",
    "material": "Clear film",
    "adhesive": "Permanent",
    "typical_use": "Cold brew, kombucha, and juice bottles where you want the drink itself to show through.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "2\" x 2\"",
      "detail": "Neck and cap seal"
     },
     {
      "label": "2\" x 3\"",
      "detail": "8 oz juice bottles"
     },
     {
      "label": "3\" x 4\"",
      "detail": "12 oz cold brew bottles"
     },
     {
      "label": "4\" x 5\"",
      "detail": "16 oz kombucha bottles"
     },
     {
      "label": "2.5\" x 8\"",
      "detail": "Full wrap around a bottle"
     },
     {
      "label": "5\" x 7\"",
      "detail": "32 oz growlers and jugs"
     }
    ]
   },
   {
    "label": "Frozen and refrigerated item",
    "size": "2\" x 3\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Freezer grade",
    "typical_use": "Pints, trays, and vacuum packs that go into a freezer or cooler case. Tell us the fill and storage temperature and we will spec the adhesive with you on the quote.",
    "grounding": "standard",
    "sub_axis": "Adhesive",
    "subs": [
     {
      "label": "Freezer grade",
      "detail": "Applied cold, stays on frozen"
     },
     {
      "label": "All-temperature permanent",
      "detail": "Applied cool, holds through the case"
     },
     {
      "label": "Standard permanent",
      "detail": "Applied warm, then chilled"
     },
     {
      "label": "Removable",
      "detail": "Peels clean off reused containers"
     },
     {
      "label": "High tack",
      "detail": "Rough trays and vacuum packs"
     }
    ]
   },
   {
    "label": "Tamper-evident seal dot",
    "size": "0.75\" circle",
    "format": "Roll, 1\" core",
    "material": "Clear film",
    "adhesive": "High tack",
    "typical_use": "Sealing a lid or a takeout container so the customer can see it was not opened.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "0.5\" circle",
      "detail": "Small cap and pouch seal"
     },
     {
      "label": "0.75\" circle",
      "detail": "Standard takeout container seal"
     },
     {
      "label": "1\" circle",
      "detail": "Jar lid and clamshell seal"
     },
     {
      "label": "1.25\" circle",
      "detail": "Wider seal across a lid"
     },
     {
      "label": "1.5\" circle",
      "detail": "Bag fold and box flap"
     },
     {
      "label": "2\" circle",
      "detail": "Large lids and catering pans"
     }
    ]
   },
   {
    "label": "Retail UPC barcode",
    "size": "2.25\" x 1.25\"",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Scannable barcodes for grocery buyers and distributor requirements, plain or branded.",
    "grounding": "grounded",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1\" x 2\"",
      "detail": "Small barcode for tight panels"
     },
     {
      "label": "1.25\" x 2.25\"",
      "detail": "Standard retail barcode size"
     },
     {
      "label": "1.5\" x 2\"",
      "detail": "Barcode with a lot line"
     },
     {
      "label": "1.5\" x 3\"",
      "detail": "Barcode with distributor copy"
     },
     {
      "label": "2\" x 3\"",
      "detail": "Barcode plus brand and weight"
     },
     {
      "label": "2\" x 4\"",
      "detail": "Barcode with full retail copy"
     }
    ]
   },
   {
    "label": "Shipping and case label",
    "size": "4\" x 6\"",
    "format": "Fan-fold",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Outer case and carton labels so product moves cleanly through the warehouse and out on the truck.",
    "grounding": "grounded",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "4\" x 2\"",
      "detail": "Lot and date on cases"
     },
     {
      "label": "4\" x 3\"",
      "detail": "Small carton and inner pack"
     },
     {
      "label": "4\" x 4\"",
      "detail": "Case contents and count"
     },
     {
      "label": "4\" x 6\"",
      "detail": "Standard carrier shipping label"
     },
     {
      "label": "3\" x 5\"",
      "detail": "Smaller cartons and mailers"
     },
     {
      "label": "5\" x 7\"",
      "detail": "Large pallet and skid placard"
     }
    ]
   },
   {
    "label": "Date code and lot label",
    "size": "2\" x 1\"",
    "format": "Roll, 1\" core",
    "material": "Matte paper",
    "adhesive": "Removable",
    "typical_use": "Batch, lot, and use-by dates that need to peel off clean when a container gets reused.",
    "grounding": "standard",
    "sub_axis": "Adhesive",
    "subs": [
     {
      "label": "Removable",
      "detail": "Peels clean from reused containers"
     },
     {
      "label": "Permanent",
      "detail": "Stays put through distribution"
     },
     {
      "label": "Freezer grade",
      "detail": "Cold storage and frozen cases"
     },
     {
      "label": "All-temperature permanent",
      "detail": "Cooler to room temperature moves"
     },
     {
      "label": "High tack",
      "detail": "Corrugated cases and rough surfaces"
     }
    ]
   },
   {
    "label": "Gift tin and metal lid label",
    "size": "3\" x 3\"",
    "format": "Sheet",
    "material": "Metal and foil",
    "adhesive": "Permanent",
    "typical_use": "Holiday coffee tins, cocoa tins, and gift sets. We print on metal and tin, which most label shops will not touch.",
    "grounding": "grounded",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "2\" circle",
      "detail": "Small sample tin lid"
     },
     {
      "label": "2.5\" circle",
      "detail": "Cocoa and candy tin lid"
     },
     {
      "label": "3\" circle",
      "detail": "Standard coffee tin lid"
     },
     {
      "label": "4\" circle",
      "detail": "Large gift tin lid"
     },
     {
      "label": "3\" x 3\"",
      "detail": "Square tin and box top"
     },
     {
      "label": "4\" x 4\"",
      "detail": "Large square gift tin"
     },
     {
      "label": "2\" x 4\"",
      "detail": "Side label wrapping a tin"
     }
    ]
   }
  ],
  "art": "images/labels-stock/face-stock-rolls-tile.webp",
  "seo": "Custom Food & Beverage Labels"
 },
 {
  "id": "foil-lids",
  "name": "Keurig-Compatible Foil Lids",
  "intro": "We print on foil, so the lid that seals your single-serve cup can carry your own brand. Foil lids are the one product we run with a minimum, 5,000 lids, and like everything else here they run on a turnaround of 10 days or less. Every spec below is a starting point, and every line is quoted by one of our labeling specialists.",
  "use_cases": [
   "Single-serve coffee pods for a roaster going into retail",
   "Hot cocoa, cider, and chai cups",
   "Tea and functional-drink pods",
   "Private label runs printed for a co-packer's customers",
   "Variety packs with a different lid per flavor",
   "Seasonal and limited-edition flavor releases",
   "Subscription and club-box pod programs"
  ],
  "variants": [
   {
    "label": "Standard Coffee Pod Lid",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "The everyday single-serve coffee lid, printed with your brand and blend for a roll-fed filling line. First runs start at the 5,000 lid minimum.",
    "grounding": "grounded",
    "sub_axis": "Coffee type",
    "subs": [
     {
      "label": "Light Roast",
      "detail": "Everyday light roast single serve"
     },
     {
      "label": "Medium Roast",
      "detail": "The core seller for most roasters"
     },
     {
      "label": "Dark Roast",
      "detail": "Bold roast, high contrast artwork"
     },
     {
      "label": "Decaf",
      "detail": "Clearly marked so shoppers can tell"
     },
     {
      "label": "Half Caff",
      "detail": "Blend of regular and decaf"
     },
     {
      "label": "Espresso Roast",
      "detail": "Short strong pour in a pod"
     },
     {
      "label": "Flavored Coffee",
      "detail": "Vanilla, hazelnut, caramel and similar"
     },
     {
      "label": "Single Origin",
      "detail": "Farm or region named on lid"
     },
     {
      "label": "House Blend",
      "detail": "Signature blend for a retail box"
     }
    ]
   },
   {
    "label": "Cocoa, Cider, and Tea Pod Lid",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Cocoa, cider, chai, tea, and other hot cups where the flavor name has to read clearly at arm's length.",
    "grounding": "standard",
    "sub_axis": "Beverage",
    "subs": [
     {
      "label": "Hot Cocoa",
      "detail": "Classic cocoa cup for cold months"
     },
     {
      "label": "Apple Cider",
      "detail": "Spiced cider for fall programs"
     },
     {
      "label": "Chai Latte",
      "detail": "Spiced chai, flavor name reads big"
     },
     {
      "label": "Black Tea",
      "detail": "Breakfast and orange pekoe style cups"
     },
     {
      "label": "Green Tea",
      "detail": "Lighter cup, softer color palette"
     },
     {
      "label": "Herbal Tea",
      "detail": "Caffeine free blends for evening"
     },
     {
      "label": "Matcha",
      "detail": "Green powder cup for cafe lines"
     },
     {
      "label": "Peppermint Tea",
      "detail": "Mint cup, often a holiday item"
     }
    ]
   },
   {
    "label": "Variety Pack Lid Set",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Several flavors printed in one order so every cup in a variety box gets its own lid.",
    "grounding": "standard",
    "sub_axis": "Set size",
    "subs": [
     {
      "label": "2 Flavor Set",
      "detail": "Two lid designs, one order"
     },
     {
      "label": "3 Flavor Set",
      "detail": "Three designs for a starter box"
     },
     {
      "label": "4 Flavor Set",
      "detail": "Four designs, the common sampler"
     },
     {
      "label": "5 Flavor Set",
      "detail": "Five designs across one box"
     },
     {
      "label": "6 Flavor Set",
      "detail": "Six designs for a larger carton"
     },
     {
      "label": "8 Flavor Set",
      "detail": "Eight designs for a wide sampler"
     },
     {
      "label": "10 Flavor Set",
      "detail": "Ten designs across a club box"
     },
     {
      "label": "12 Flavor Set",
      "detail": "Twelve designs, full range in one"
     }
    ]
   },
   {
    "label": "Private Label and Co-Pack Lid",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Roasters and co-packers filling for other brands, one lid spec per customer on the same line.",
    "grounding": "standard",
    "sub_axis": "Finish",
    "subs": [
     {
      "label": "Bright Foil",
      "detail": "Foil left bright around the art"
     },
     {
      "label": "Matte Finish",
      "detail": "Softer look, less glare on shelf"
     },
     {
      "label": "White Flood Coat",
      "detail": "White base so colors read true"
     },
     {
      "label": "Full Coverage Print",
      "detail": "Color edge to edge, no bare foil"
     },
     {
      "label": "One Color On Foil",
      "detail": "Single color over the plain foil"
     }
    ]
   },
   {
    "label": "Seasonal and Limited Edition Lid",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Holiday and short-run flavors that need a fresh lid without touching your core program.",
    "grounding": "standard",
    "sub_axis": "Season",
    "subs": [
     {
      "label": "Pumpkin Spice",
      "detail": "Early fall release, short window"
     },
     {
      "label": "Harvest And Fall",
      "detail": "Cider and spice flavors for autumn"
     },
     {
      "label": "Holiday Peppermint",
      "detail": "December cup for gift sets"
     },
     {
      "label": "Gingerbread",
      "detail": "Holiday flavor with warm artwork"
     },
     {
      "label": "Winter Blend",
      "detail": "Post holiday cold weather roast"
     },
     {
      "label": "Valentine And Mocha",
      "detail": "February chocolate leaning release"
     },
     {
      "label": "Spring Release",
      "detail": "Lighter flavors and brighter color"
     },
     {
      "label": "Summer Limited Run",
      "detail": "Short summer flavor, small quantity"
     }
    ]
   },
   {
    "label": "Die-Cut Lids, Stacked",
    "size": "2\" circle",
    "format": "Sheet",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Pre-cut lids delivered flat for hand sealing and small semi-automatic sealers instead of a roll-fed line.",
    "grounding": "standard",
    "sub_axis": "Stack count",
    "subs": [
     {
      "label": "250 Per Stack",
      "detail": "Small stacks for hand sealing"
     },
     {
      "label": "500 Per Stack",
      "detail": "Easy to hold and count"
     },
     {
      "label": "1,000 Per Stack",
      "detail": "Common size for semi automatic sealers"
     },
     {
      "label": "2,500 Per Stack",
      "detail": "Fewer stacks to open per shift"
     },
     {
      "label": "5,000 Per Case",
      "detail": "Full case of flat lids"
     }
    ]
   },
   {
    "label": "Wide-Mouth Pod Lid",
    "size": "2.25\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Larger cup and bowl-style formats that need a wider seal area than a standard pod.",
    "grounding": "standard",
    "sub_axis": "Diameter",
    "subs": [
     {
      "label": "2.25\" Circle",
      "detail": "Smallest wide mouth seal area"
     },
     {
      "label": "2.5\" Circle",
      "detail": "Common wider cup format"
     },
     {
      "label": "2.75\" Circle",
      "detail": "Larger cup with room to seal"
     },
     {
      "label": "3\" Circle",
      "detail": "Bowl style single serve format"
     },
     {
      "label": "3.25\" Circle",
      "detail": "Widest bowl format we run"
     }
    ]
   },
   {
    "label": "Small-Format Capsule Lid",
    "size": "1.5\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Espresso-size capsules and other small single-serve cups. Send us the cup you fill and we will match the lid to it.",
    "grounding": "standard",
    "sub_axis": "Diameter",
    "subs": [
     {
      "label": "1.25\" Circle",
      "detail": "Smallest espresso capsule seal"
     },
     {
      "label": "1.375\" Circle",
      "detail": "Half step up from smallest"
     },
     {
      "label": "1.5\" Circle",
      "detail": "Standard small capsule diameter"
     },
     {
      "label": "1.625\" Circle",
      "detail": "Slightly wider capsule rim"
     },
     {
      "label": "1.75\" Circle",
      "detail": "Largest of the small formats"
     }
    ]
   },
   {
    "label": "Pod Carton Front Label",
    "size": "3\" x 5\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "The retail box that holds the pods. This is a standard label, so no minimum applies.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "2.5\" x 4\"",
      "detail": "Narrow front panel on small cartons"
     },
     {
      "label": "3\" x 5\"",
      "detail": "The everyday carton front size"
     },
     {
      "label": "4\" x 4\"",
      "detail": "Square panel for a wider box"
     },
     {
      "label": "4\" x 6\"",
      "detail": "Larger front with room for copy"
     },
     {
      "label": "5\" x 7\"",
      "detail": "Club and multipack carton front"
     },
     {
      "label": "6\" x 4\"",
      "detail": "Wide landscape panel on cartons"
     }
    ]
   },
   {
    "label": "Case and Shipper Label",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Outer cases of pods heading to a distributor or a retail DC, barcode included. No minimum.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "3\" x 5\"",
      "detail": "Small case marking on cartons"
     },
     {
      "label": "4\" x 4\"",
      "detail": "Square case label with barcode"
     },
     {
      "label": "4\" x 6\"",
      "detail": "The workhorse case and shipper size"
     },
     {
      "label": "6\" x 4\"",
      "detail": "Landscape layout for wide cases"
     },
     {
      "label": "4\" x 8\"",
      "detail": "Long panel for extra case detail"
     },
     {
      "label": "5.5\" x 8.5\"",
      "detail": "Large format for pallet facing cases"
     }
    ]
   },
   {
    "label": "Retail Barcode Label",
    "size": "2.25\" x 1.25\"",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "UPC and lot coding applied to pod cartons so they scan cleanly at the register. No minimum.",
    "grounding": "standard",
    "sub_axis": "Barcode format",
    "subs": [
     {
      "label": "UPC-A",
      "detail": "Standard retail code in the States"
     },
     {
      "label": "UPC-E",
      "detail": "Compressed code for small cartons"
     },
     {
      "label": "EAN-13",
      "detail": "International retail scanning code"
     },
     {
      "label": "EAN-8",
      "detail": "Short international code, tight space"
     },
     {
      "label": "GS1-128",
      "detail": "Carries lot and date fields"
     },
     {
      "label": "ITF-14",
      "detail": "Case level code for distribution"
     },
     {
      "label": "Code 128",
      "detail": "General purpose internal tracking code"
     },
     {
      "label": "Code 39",
      "detail": "Older format some warehouses still use"
     },
     {
      "label": "QR Code",
      "detail": "Links a shopper to your page"
     },
     {
      "label": "Data Matrix",
      "detail": "Dense square code for small areas"
     }
    ]
   },
   {
    "label": "Lot and Date Dot",
    "size": "1\" circle",
    "format": "Roll, 1\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Roast date, lot, and best-by coding added to pod cartons after packing. No minimum.",
    "grounding": "standard",
    "sub_axis": "Coded field",
    "subs": [
     {
      "label": "Roast Date",
      "detail": "Day the coffee came off roaster"
     },
     {
      "label": "Lot Number",
      "detail": "Traceability back to a production run"
     },
     {
      "label": "Best By Date",
      "detail": "Freshness date for retail shelves"
     },
     {
      "label": "Packed On Date",
      "detail": "Day the cartons were filled"
     },
     {
      "label": "Batch Code",
      "detail": "Internal batch tracking for quality"
     },
     {
      "label": "Julian Date",
      "detail": "Day of year numeric coding"
     },
     {
      "label": "Shift Code",
      "detail": "Which crew packed the cartons"
     },
     {
      "label": "Blank Write-On Dot",
      "detail": "Left open for your own marker"
     }
    ]
   }
  ],
  "art": "images/customers/lake-lodge.webp",
  "seo": "Keurig-Compatible Foil Lids"
 },
 {
  "id": "shipping-labels",
  "name": "Shipping & Handling Labels",
  "intro": "Scannable, durable labels for cartons, pallets, and parcels, printed to your spec and proofed for your approval before anything goes to press, in 10 days or less. The 4 x 6 is the workhorse, and every row below is a starting point you can change before you ask for a quote.",
  "use_cases": [
   "Carrier labels for parcels going out through the major national carriers",
   "Case and carton marking for retail distribution centers",
   "UPC and GS1 format barcodes on retail-bound cases",
   "Pallet and skid identification on the dock and in the warehouse",
   "Cold storage and frozen food case labeling",
   "Handling instructions like Fragile and This Side Up",
   "Branded shipping labels that put your logo on the box"
  ],
  "variants": [
   {
    "label": "4 x 6 Shipping Label, Thermal Transfer",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "The everyday carrier label, printed on a thermal transfer machine with a wax or wax-resin ribbon.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "4\" x 6\"",
      "detail": "The standard carrier label size"
     },
     {
      "label": "4\" x 5\"",
      "detail": "Shorter label, less liner waste"
     },
     {
      "label": "4\" x 4\"",
      "detail": "Square format for case marking"
     },
     {
      "label": "4\" x 3\"",
      "detail": "Address block and one barcode"
     },
     {
      "label": "4\" x 2\"",
      "detail": "Routing and short address blocks"
     },
     {
      "label": "3\" x 5\"",
      "detail": "Narrower carton and mailer faces"
     },
     {
      "label": "3\" x 2\"",
      "detail": "Small parcels and inner packs"
     }
    ]
   },
   {
    "label": "4 x 6 Shipping Label, Direct Thermal",
    "size": "4\" x 6\"",
    "format": "Roll, 1\" core",
    "material": "Direct thermal paper",
    "adhesive": "Permanent",
    "typical_use": "Ecommerce order fulfillment on a desktop printer, with no ribbon to load.",
    "grounding": "standard",
    "sub_axis": "Format",
    "subs": [
     {
      "label": "Roll, 1\" core",
      "detail": "Desktop printers at a pack station"
     },
     {
      "label": "Roll, 1.5\" core",
      "detail": "Mid range desktop and mobile printers"
     },
     {
      "label": "Roll, 3\" core",
      "detail": "Industrial printers, longer runs per roll"
     },
     {
      "label": "Fan-fold stack",
      "detail": "High volume stations, no roll changes"
     }
    ]
   },
   {
    "label": "4 x 6 Fan-Fold Shipping Label",
    "size": "4\" x 6\"",
    "format": "Fan-fold",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Busy pick and pack stations, where stopping to change a roll slows the line.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "4\" x 6\"",
      "detail": "The workhorse carrier label, stacked"
     },
     {
      "label": "4\" x 5\"",
      "detail": "Shorter face for compact cartons"
     },
     {
      "label": "4\" x 4\"",
      "detail": "Square case and contents marking"
     },
     {
      "label": "4\" x 3\"",
      "detail": "Address block and one barcode"
     },
     {
      "label": "4\" x 2\"",
      "detail": "Routing, lane, and door numbers"
     }
    ]
   },
   {
    "label": "4 x 6.5 Shipping Label with Tear-Off Stub",
    "size": "4\" x 6.5\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "A ship label with a detachable stub for a packing slip or a file copy. Tell us where you want the perforation.",
    "grounding": "standard",
    "sub_axis": "Stub depth",
    "subs": [
     {
      "label": "0.5\" stub",
      "detail": "Overall 4 x 6.5, order number only"
     },
     {
      "label": "0.75\" stub",
      "detail": "Overall 4 x 6.75, number plus date"
     },
     {
      "label": "1\" stub",
      "detail": "Overall 4 x 7, short file copy"
     },
     {
      "label": "1.5\" stub",
      "detail": "Overall 4 x 7.5, packing detail"
     },
     {
      "label": "2\" stub",
      "detail": "Overall 4 x 8, full packing slip"
     }
    ]
   },
   {
    "label": "4 x 4 Carton Label",
    "size": "4\" x 4\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Case contents, item counts, and UPC or GS1 format barcodes on outbound cartons.",
    "grounding": "standard",
    "sub_axis": "Barcode",
    "subs": [
     {
      "label": "UPC-A",
      "detail": "Retail unit codes, twelve digits"
     },
     {
      "label": "EAN-13",
      "detail": "International retail codes, thirteen digits"
     },
     {
      "label": "ITF-14",
      "detail": "Case and inner pack codes"
     },
     {
      "label": "GS1-128",
      "detail": "Case data with application identifiers"
     },
     {
      "label": "Code 128",
      "detail": "General purpose alphanumeric internal codes"
     },
     {
      "label": "Code 39",
      "detail": "Legacy systems and parts numbering"
     },
     {
      "label": "GS1 DataMatrix",
      "detail": "Two dimensional code, small footprint"
     },
     {
      "label": "QR Code",
      "detail": "Links a scan to your page"
     }
    ]
   },
   {
    "label": "4 x 6 Pallet Placard, Film",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "High tack",
    "typical_use": "Pallet and skid identification on rough corrugated, plus outdoor staging and humid transit.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "4\" x 6\"",
      "detail": "Standard pallet placard on corrugated"
     },
     {
      "label": "4\" x 8\"",
      "detail": "Taller stack for extra data zones"
     },
     {
      "label": "6\" x 4\"",
      "detail": "Wide layout for long barcodes"
     },
     {
      "label": "6\" x 8\"",
      "detail": "Full logistics placard, readable across dock"
     },
     {
      "label": "8.5\" x 11\"",
      "detail": "Largest placard, read from distance"
     }
    ]
   },
   {
    "label": "4 x 6 Freezer Grade Shipping Label",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Freezer grade",
    "typical_use": "Cold storage and frozen food cases, where a standard adhesive lets go at the corner.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "4\" x 6\"",
      "detail": "Carrier label on frozen cases"
     },
     {
      "label": "4\" x 4\"",
      "detail": "Square case marking in cold storage"
     },
     {
      "label": "4\" x 3\"",
      "detail": "Contents and lot on frozen cartons"
     },
     {
      "label": "4\" x 2\"",
      "detail": "Date and lot coding only"
     },
     {
      "label": "3\" x 2\"",
      "detail": "Inner packs and retail freezer units"
     },
     {
      "label": "2\" x 1\"",
      "detail": "Small barcode on frozen items"
     }
    ]
   },
   {
    "label": "3 x 5 Handling and Warning Label",
    "size": "3\" x 5\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Fragile, This Side Up, and other handling instructions applied at the pack station.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "FRAGILE",
      "detail": "Glass, ceramics, and breakable goods"
     },
     {
      "label": "THIS SIDE UP",
      "detail": "Orientation for liquids and packed trays"
     },
     {
      "label": "HANDLE WITH CARE",
      "detail": "General caution on the outer carton"
     },
     {
      "label": "DO NOT STACK",
      "detail": "Crush risk on light cartons"
     },
     {
      "label": "KEEP DRY",
      "detail": "Moisture sensitive contents in transit"
     },
     {
      "label": "HEAVY",
      "detail": "Warns the handler before the lift"
     },
     {
      "label": "RUSH",
      "detail": "Priority orders on the dock"
     },
     {
      "label": "PERISHABLE",
      "detail": "Food and short shelf life goods"
     },
     {
      "label": "KEEP FROZEN",
      "detail": "Frozen freight moving through cold chain"
     },
     {
      "label": "KEEP REFRIGERATED",
      "detail": "Chilled goods that cannot freeze"
     },
     {
      "label": "TEAM LIFT",
      "detail": "Two person lift on the carton"
     },
     {
      "label": "GLASS",
      "detail": "Names the contents at a glance"
     }
    ]
   },
   {
    "label": "2.25 x 1.25 Small Carton Barcode",
    "size": "2.25\" x 1.25\"",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Inner packs, parts bins, and totes that only need a barcode and a part number.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "2.25\" x 1.25\"",
      "detail": "Barcode with a part number"
     },
     {
      "label": "2\" x 1\"",
      "detail": "Common inner pack barcode size"
     },
     {
      "label": "1.5\" x 1\"",
      "detail": "Small parts bins and totes"
     },
     {
      "label": "3\" x 1\"",
      "detail": "Longer codes on a narrow strip"
     },
     {
      "label": "2\" x 1.5\"",
      "detail": "Barcode plus a short description"
     },
     {
      "label": "3\" x 2\"",
      "detail": "Barcode, part number, and count"
     },
     {
      "label": "1\" x 0.5\"",
      "detail": "Smallest code for tiny components"
     }
    ]
   },
   {
    "label": "4 x 6 Branded Shipping Label",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Your logo in full color, with a blank zone left open for the carrier data.",
    "grounding": "standard",
    "sub_axis": "Finish",
    "subs": [
     {
      "label": "Gloss paper",
      "detail": "Bright finish, strong color pop"
     },
     {
      "label": "Semi-gloss paper",
      "detail": "The everyday shipping label finish"
     },
     {
      "label": "Matte paper",
      "detail": "Flat look, easy to write on"
     },
     {
      "label": "White gloss film",
      "detail": "Durable film for rough handling"
     },
     {
      "label": "Matte film",
      "detail": "Soft look with film durability"
     },
     {
      "label": "Foil",
      "detail": "Metallic accent on the brand zone"
     }
    ]
   },
   {
    "label": "3 x 2 Removable Tote Label",
    "size": "3\" x 2\"",
    "format": "Roll, 1\" core",
    "material": "Matte paper",
    "adhesive": "Removable",
    "typical_use": "Routing and staging notes on returnable totes, so the tote can be relabeled next trip.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "3\" x 2\"",
      "detail": "Routing note on a returnable tote"
     },
     {
      "label": "2\" x 1\"",
      "detail": "Small code on bins and trays"
     },
     {
      "label": "2.25\" x 1.25\"",
      "detail": "Barcode and a short staging note"
     },
     {
      "label": "4\" x 2\"",
      "detail": "Longer routing and lane detail"
     },
     {
      "label": "4\" x 3\"",
      "detail": "Contents plus destination on totes"
     },
     {
      "label": "4\" x 6\"",
      "detail": "Full face label on large containers"
     }
    ]
   },
   {
    "label": "1 x 2.625 Return Address Label",
    "size": "1\" x 2.625\"",
    "format": "Sheet",
    "material": "Matte paper",
    "adhesive": "Permanent",
    "typical_use": "Return address and mailer labels, 30 up on a letter sheet.",
    "grounding": "standard",
    "sub_axis": "Sheet layout",
    "subs": [
     {
      "label": "30 up, 1\" x 2.625\"",
      "detail": "Standard return address on letter sheet"
     },
     {
      "label": "20 up, 1\" x 4\"",
      "detail": "Wider address block, same height"
     },
     {
      "label": "14 up, 1.33\" x 4\"",
      "detail": "Room for a logo line"
     },
     {
      "label": "10 up, 2\" x 4\"",
      "detail": "Full shipping address on sheets"
     },
     {
      "label": "6 up, 3.33\" x 4\"",
      "detail": "Large mailer and parcel addressing"
     },
     {
      "label": "4 up, 3.5\" x 5\"",
      "detail": "Big block for cartons"
     },
     {
      "label": "2 up, 5.5\" x 8.5\"",
      "detail": "Half sheet label per page"
     },
     {
      "label": "1 up, 8.5\" x 11\"",
      "detail": "Full sheet label, one piece"
     },
     {
      "label": "80 up, 0.5\" x 1.75\"",
      "detail": "Small return address and asset tags"
     }
    ]
   }
  ],
  "art": "images/labels-stock/linerless-rolls-tile.webp",
  "seo": "Custom Shipping & Handling Labels"
 },
 {
  "id": "barcode-labels",
  "name": "Barcode & Inventory Labels",
  "intro": "We print barcode and inventory labels on paper and film stocks in a range of finishes, plus metal and foil, so the code stays readable from the loading dock to the retail shelf. Send print ready barcode artwork or work with our in house design team on the label around it, and treat every spec below as a starting point you can change.",
  "use_cases": [
   "UPC codes for retail and grocery shelves",
   "Case and pallet labels going into a distributor",
   "Warehouse rack, bay, and bin location labels",
   "Cycle counts and inventory audits",
   "Serial, lot, and date tracking on manufactured parts",
   "Cold storage and freezer inventory",
   "Blank stock feeding a print and apply line"
  ],
  "variants": [
   {
    "label": "Retail UPC Barcode",
    "size": "2\" x 1\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "The everyday UPC on retail packaging. Send us the code you already have and we print it on the label.",
    "grounding": "standard",
    "sub_axis": "Symbology",
    "subs": [
     {
      "label": "UPC-A",
      "detail": "Standard US retail grocery code"
     },
     {
      "label": "UPC-E",
      "detail": "Compressed code for small packages"
     },
     {
      "label": "EAN-13",
      "detail": "International retail code outside the US"
     },
     {
      "label": "EAN-8",
      "detail": "Short international code, small packs"
     },
     {
      "label": "GS1 DataBar Omnidirectional",
      "detail": "Fresh produce and small items"
     },
     {
      "label": "QR Code",
      "detail": "Links shoppers to a page"
     }
    ]
   },
   {
    "label": "Case and Pallet Barcode",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Cases and pallets headed into a distributor or a retail distribution center. Printed with your data, or blank for a print and apply line to fill in.",
    "grounding": "standard",
    "sub_axis": "Symbology",
    "subs": [
     {
      "label": "GS1-128",
      "detail": "Carries lot, date, quantity data"
     },
     {
      "label": "ITF-14",
      "detail": "Outer case code for cartons"
     },
     {
      "label": "Code 128",
      "detail": "Dense general purpose case code"
     },
     {
      "label": "Code 39",
      "detail": "Older code most scanners read"
     },
     {
      "label": "GS1 DataMatrix",
      "detail": "Two dimensional, small footprint"
     },
     {
      "label": "QR Code",
      "detail": "Two dimensional, scans from phones"
     }
    ]
   },
   {
    "label": "Branded Shipping and Barcode",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "One label that carries the scan data and your logo, so the box still looks like your brand when it lands.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "3\" x 5\"",
      "detail": "Smaller cartons and poly mailers"
     },
     {
      "label": "4\" x 4\"",
      "detail": "Square format for compact boxes"
     },
     {
      "label": "4\" x 6\"",
      "detail": "The common shipping label size"
     },
     {
      "label": "4\" x 6.5\"",
      "detail": "Extra room under the barcode"
     },
     {
      "label": "4\" x 8\"",
      "detail": "Longer label with more text"
     },
     {
      "label": "6\" x 4\"",
      "detail": "Landscape layout on wide cartons"
     }
    ]
   },
   {
    "label": "Desktop Thermal Barcode",
    "size": "2.25\" x 1.25\"",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "The common small format for desktop label printers at a pack station or a back counter.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1.5\" x 1\"",
      "detail": "Small parts at a bench"
     },
     {
      "label": "2\" x 1\"",
      "detail": "Everyday desktop printer label"
     },
     {
      "label": "2.25\" x 1.25\"",
      "detail": "Common desktop barcode format"
     },
     {
      "label": "2.25\" x 2\"",
      "detail": "Room for extra text lines"
     },
     {
      "label": "3\" x 1\"",
      "detail": "Longer codes on narrow items"
     },
     {
      "label": "3\" x 2\"",
      "detail": "Barcode plus a short description"
     },
     {
      "label": "4\" x 2\"",
      "detail": "Widest common desktop roll size"
     }
    ]
   },
   {
    "label": "Small Item Barcode",
    "size": "1\" x 2.625\"",
    "format": "Sheet",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Small parts, boxed goods, and anything where a full case label will not fit. The standard 30 up sheet size.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "0.5\" x 1\"",
      "detail": "Very small parts and vials"
     },
     {
      "label": "1\" x 1\"",
      "detail": "Square mark on small boxes"
     },
     {
      "label": "1\" x 2\"",
      "detail": "Short code on small cartons"
     },
     {
      "label": "1\" x 2.625\"",
      "detail": "Standard thirty up sheet size"
     },
     {
      "label": "1.5\" x 1\"",
      "detail": "Small boxes needing a wider code"
     },
     {
      "label": "2\" x 1\"",
      "detail": "Common small retail item size"
     }
    ]
   },
   {
    "label": "Carton ID Barcode",
    "size": "4\" x 2\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Part number, lot, or SKU on a shipper carton, with room for a barcode and a line or two of text.",
    "grounding": "standard",
    "sub_axis": "Symbology",
    "subs": [
     {
      "label": "Code 128",
      "detail": "Dense code for part numbers"
     },
     {
      "label": "Code 39",
      "detail": "Widely read, letters and numbers"
     },
     {
      "label": "Code 93",
      "detail": "Compact version of Code 39"
     },
     {
      "label": "GS1-128",
      "detail": "Adds lot and date fields"
     },
     {
      "label": "Data Matrix",
      "detail": "Square code for small areas"
     },
     {
      "label": "QR Code",
      "detail": "Scans from phones and readers"
     }
    ]
   },
   {
    "label": "Warehouse Rack and Location",
    "size": "3\" x 1\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "High tack",
    "typical_use": "Aisle, bay, and level markers on steel racking, where a standard adhesive tends to lift over time.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "2\" x 1\"",
      "detail": "Bin level markers read close"
     },
     {
      "label": "3\" x 1\"",
      "detail": "Standard bay and level marker"
     },
     {
      "label": "4\" x 1\"",
      "detail": "Longer location codes on beams"
     },
     {
      "label": "4\" x 2\"",
      "detail": "Larger digits for aisle reads"
     },
     {
      "label": "6\" x 2\"",
      "detail": "Reads from a lift truck"
     },
     {
      "label": "6\" x 4\"",
      "detail": "Overhead aisle and zone markers"
     },
     {
      "label": "8\" x 2\"",
      "detail": "Long aisle signs, distance scanning"
     }
    ]
   },
   {
    "label": "Bin and Shelf Label",
    "size": "3\" x 5\"",
    "format": "Sheet",
    "material": "White film",
    "adhesive": "Removable",
    "typical_use": "Bin fronts and shelf edges that get relabeled when the slotting changes.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1\" x 3\"",
      "detail": "Narrow shelf edge strip"
     },
     {
      "label": "1.25\" x 4\"",
      "detail": "Shelf edge with a barcode"
     },
     {
      "label": "2\" x 3\"",
      "detail": "Small bin fronts"
     },
     {
      "label": "2\" x 4\"",
      "detail": "Standard bin front label"
     },
     {
      "label": "3\" x 4\"",
      "detail": "Bin label with description text"
     },
     {
      "label": "3\" x 5\"",
      "detail": "Large bin fronts and totes"
     },
     {
      "label": "4\" x 6\"",
      "detail": "Full tote and gaylord fronts"
     }
    ]
   },
   {
    "label": "Cycle Count and Audit",
    "size": "2\" x 4\"",
    "format": "Roll, 3\" core",
    "material": "Matte paper",
    "adhesive": "Removable",
    "typical_use": "Counted, staged, or on hold tags that come off clean when the count is closed.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1\" x 2\"",
      "detail": "Small parts and bin counts"
     },
     {
      "label": "2\" x 2\"",
      "detail": "Square mark on cartons"
     },
     {
      "label": "2\" x 3\"",
      "detail": "Room for a count date"
     },
     {
      "label": "2\" x 4\"",
      "detail": "Standard count and status label"
     },
     {
      "label": "3\" x 5\"",
      "detail": "Large hold and staged marks"
     },
     {
      "label": "4\" x 6\"",
      "detail": "Pallet level count and hold"
     }
    ]
   },
   {
    "label": "Freezer and Cold Storage",
    "size": "4\" x 2\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Freezer grade",
    "typical_use": "Inventory going straight into cold storage, where the label has to stick on a cold, damp surface.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1\" x 2\"",
      "detail": "Small packs and portion bags"
     },
     {
      "label": "2\" x 3\"",
      "detail": "Cases going into the freezer"
     },
     {
      "label": "2\" x 4\"",
      "detail": "Case labels with lot data"
     },
     {
      "label": "3\" x 2\"",
      "detail": "Totes and lugs in cold"
     },
     {
      "label": "4\" x 2\"",
      "detail": "Standard cold storage carton label"
     },
     {
      "label": "4\" x 6\"",
      "detail": "Pallet loads entering cold storage"
     }
    ]
   },
   {
    "label": "Pallet License Plate",
    "size": "4\" x 6.5\"",
    "format": "Fan-fold",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "The pallet level barcode that ties a full load to one scan. Fan-fold stacks feed a printer without a rewind.",
    "grounding": "standard",
    "sub_axis": "Symbology",
    "subs": [
     {
      "label": "GS1-128 (SSCC-18)",
      "detail": "The standard pallet license plate"
     },
     {
      "label": "Code 128",
      "detail": "General purpose pallet identifier"
     },
     {
      "label": "Code 39",
      "detail": "Older readers still scan it"
     },
     {
      "label": "GS1 DataMatrix",
      "detail": "Two dimensional, holds more data"
     },
     {
      "label": "QR Code",
      "detail": "Scans from handhelds and phones"
     },
     {
      "label": "Sequential number only",
      "detail": "Plain numbering, no scan code"
     }
    ]
   },
   {
    "label": "Durable Asset Tag",
    "size": "2\" x 1\"",
    "format": "Sheet",
    "material": "Metal or foil",
    "adhesive": "Permanent",
    "typical_use": "Equipment, tooling, and fixed assets that need to stay readable for years. Metal and foil are part of what we print.",
    "grounding": "grounded",
    "sub_axis": "Symbology",
    "subs": [
     {
      "label": "Code 39",
      "detail": "Long standing asset tag code"
     },
     {
      "label": "Code 128",
      "detail": "Dense code for longer serials"
     },
     {
      "label": "QR Code",
      "detail": "Scans with a phone camera"
     },
     {
      "label": "Data Matrix",
      "detail": "Tiny square code on tools"
     },
     {
      "label": "Sequential number only",
      "detail": "Plain serial numbers, no code"
     }
    ]
   },
   {
    "label": "Inventory Status Dot",
    "size": "0.75\" circle",
    "format": "Roll, 1\" core",
    "material": "Matte paper",
    "adhesive": "Removable",
    "typical_use": "Color coded dots for received, counted, quarantined, or first in first out rotation.",
    "grounding": "standard",
    "sub_axis": "Diameter",
    "subs": [
     {
      "label": "0.5\" circle",
      "detail": "Small parts and file tabs"
     },
     {
      "label": "0.75\" circle",
      "detail": "The everyday status dot"
     },
     {
      "label": "1\" circle",
      "detail": "Totes, folders, and cartons"
     },
     {
      "label": "1.25\" circle",
      "detail": "Reads across a work bench"
     },
     {
      "label": "1.5\" circle",
      "detail": "Cases and larger cartons"
     },
     {
      "label": "2\" circle",
      "detail": "Reads across the aisle"
     },
     {
      "label": "3\" circle",
      "detail": "Pallet loads and bulk stock"
     }
    ]
   }
  ],
  "art": "images/labels-stock/gloss-film-rolls-tile.webp",
  "seo": "Custom Barcode & Inventory Labels"
 },
 {
  "id": "inventory-dots",
  "name": "Inventory & Color-Code Labels",
  "intro": "Color dots, date and rotation labels, numbered tags, and bin markers for keeping track of what you have and where it sits. Each row below is a popular starting spec, not a stocked item, so change the size, color, material, or adhesive and add it to your quote list.",
  "use_cases": [
   "Color-coding bins, totes, and file boxes by department or product line",
   "Marking prep dates and use-by dates on food containers",
   "Numbering assets in sequence during a physical inventory count",
   "Bin and shelf labels with a barcode for your pick path",
   "Aisle, rack, and location markers in a warehouse",
   "Equipment tags on tools, machines, and IT gear",
   "Status marks like hold, sold, or QC passed on a removable adhesive"
  ],
  "variants": [
   {
    "label": "Color dot, 3/4 inch",
    "size": "0.75\" circle",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Sorting small parts, files, and drawer bins by color at a glance.",
    "grounding": "standard",
    "sub_axis": "Color",
    "subs": [
     {
      "label": "Red",
      "detail": "Stops the eye, holds and rejects"
     },
     {
      "label": "Orange",
      "detail": "Warm mid tone, easy to spot"
     },
     {
      "label": "Yellow",
      "detail": "Brightest paper color under shop lighting"
     },
     {
      "label": "Green",
      "detail": "Passed, released, or good to go"
     },
     {
      "label": "Blue",
      "detail": "Cool tone that reads across aisles"
     },
     {
      "label": "Purple",
      "detail": "Distinct from red and blue families"
     },
     {
      "label": "Black",
      "detail": "Neutral mark for finished or closed"
     },
     {
      "label": "White",
      "detail": "Blank dot for handwriting on site"
     },
     {
      "label": "Brown",
      "detail": "Earth tone for low frequency codes"
     },
     {
      "label": "Pink",
      "detail": "Softer than red, separates a category"
     },
     {
      "label": "Fluorescent Red",
      "detail": "Glows under low warehouse light"
     },
     {
      "label": "Fluorescent Orange",
      "detail": "Highest visibility for priority pulls"
     },
     {
      "label": "Fluorescent Yellow",
      "detail": "Brightest option for dim storage areas"
     },
     {
      "label": "Fluorescent Green",
      "detail": "Bright green that reads at distance"
     }
    ]
   },
   {
    "label": "Color dot, 1 inch",
    "size": "1\" circle",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "The everyday color-code dot for totes, folders, and cartons.",
    "grounding": "standard",
    "sub_axis": "Color",
    "subs": [
     {
      "label": "Red",
      "detail": "Everyday hold and reject color code"
     },
     {
      "label": "Orange",
      "detail": "Warm mid tone, easy to spot"
     },
     {
      "label": "Yellow",
      "detail": "Brightest paper color under shop lighting"
     },
     {
      "label": "Green",
      "detail": "Passed, released, or good to go"
     },
     {
      "label": "Blue",
      "detail": "Cool tone that reads across aisles"
     },
     {
      "label": "Purple",
      "detail": "Distinct from red and blue families"
     },
     {
      "label": "Black",
      "detail": "Neutral mark for finished or closed"
     },
     {
      "label": "White",
      "detail": "Blank dot for handwriting on site"
     },
     {
      "label": "Brown",
      "detail": "Earth tone for low frequency codes"
     },
     {
      "label": "Pink",
      "detail": "Softer than red, separates a category"
     },
     {
      "label": "Fluorescent Red",
      "detail": "Glows under low warehouse light"
     },
     {
      "label": "Fluorescent Orange",
      "detail": "Highest visibility for priority pulls"
     },
     {
      "label": "Fluorescent Yellow",
      "detail": "Brightest option for dim storage areas"
     },
     {
      "label": "Fluorescent Green",
      "detail": "Bright green that reads at distance"
     }
    ]
   },
   {
    "label": "Color dot, 2 inch",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Larger cartons and pallets you want to read from across the aisle.",
    "grounding": "standard",
    "sub_axis": "Color",
    "subs": [
     {
      "label": "Red",
      "detail": "Reads as a stop from distance"
     },
     {
      "label": "Orange",
      "detail": "Warm mid tone, easy to spot"
     },
     {
      "label": "Yellow",
      "detail": "Brightest paper color under shop lighting"
     },
     {
      "label": "Green",
      "detail": "Passed, released, or good to go"
     },
     {
      "label": "Blue",
      "detail": "Cool tone that reads across aisles"
     },
     {
      "label": "Purple",
      "detail": "Distinct from red and blue families"
     },
     {
      "label": "Black",
      "detail": "Neutral mark for finished or closed"
     },
     {
      "label": "White",
      "detail": "Blank dot for handwriting on site"
     },
     {
      "label": "Brown",
      "detail": "Earth tone for low frequency codes"
     },
     {
      "label": "Pink",
      "detail": "Softer than red, separates a category"
     },
     {
      "label": "Fluorescent Red",
      "detail": "Glows under low warehouse light"
     },
     {
      "label": "Fluorescent Orange",
      "detail": "Highest visibility for priority pulls"
     },
     {
      "label": "Fluorescent Yellow",
      "detail": "Brightest option for dim storage areas"
     },
     {
      "label": "Fluorescent Green",
      "detail": "Bright green that reads at distance"
     }
    ]
   },
   {
    "label": "Removable status dot",
    "size": "1\" circle",
    "format": "Sheet",
    "material": "Matte paper",
    "adhesive": "Removable",
    "typical_use": "Hold, sold, and inspection marks applied by hand at a counting station.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "HOLD",
      "detail": "Stops stock from moving out"
     },
     {
      "label": "SOLD",
      "detail": "Marks stock already committed to order"
     },
     {
      "label": "QC PASSED",
      "detail": "Cleared by the quality check"
     },
     {
      "label": "INSPECTED",
      "detail": "Checked and logged during a count"
     },
     {
      "label": "REJECTED",
      "detail": "Failed check, pull from good stock"
     },
     {
      "label": "QUARANTINE",
      "detail": "Isolated until a decision is made"
     },
     {
      "label": "RECEIVED",
      "detail": "Logged in at the dock"
     },
     {
      "label": "COUNTED",
      "detail": "Already tallied on the count sheet"
     },
     {
      "label": "DO NOT USE",
      "detail": "Keeps material out of production"
     },
     {
      "label": "SAMPLE",
      "detail": "Set aside for testing or approval"
     },
     {
      "label": "RETURN",
      "detail": "Going back to the supplier"
     },
     {
      "label": "RUSH",
      "detail": "Moves ahead of the normal queue"
     }
    ]
   },
   {
    "label": "Day of the week label",
    "size": "1\" x 1\"",
    "format": "Roll, 1\" core",
    "material": "Matte paper",
    "adhesive": "Removable",
    "typical_use": "Prep day and rotation marking on food containers and pans.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "MONDAY",
      "detail": "Prep day marking for Monday"
     },
     {
      "label": "TUESDAY",
      "detail": "Prep day marking for Tuesday"
     },
     {
      "label": "WEDNESDAY",
      "detail": "Prep day marking for Wednesday"
     },
     {
      "label": "THURSDAY",
      "detail": "Prep day marking for Thursday"
     },
     {
      "label": "FRIDAY",
      "detail": "Prep day marking for Friday"
     },
     {
      "label": "SATURDAY",
      "detail": "Prep day marking for Saturday"
     },
     {
      "label": "SUNDAY",
      "detail": "Prep day marking for Sunday"
     }
    ]
   },
   {
    "label": "Month and year label",
    "size": "1.5\" circle",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Date received and use-by marking on cases, drums, and pails.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "JANUARY",
      "detail": "Date received or use by January"
     },
     {
      "label": "FEBRUARY",
      "detail": "Date received or use by February"
     },
     {
      "label": "MARCH",
      "detail": "Date received or use by March"
     },
     {
      "label": "APRIL",
      "detail": "Date received or use by April"
     },
     {
      "label": "MAY",
      "detail": "Date received or use by May"
     },
     {
      "label": "JUNE",
      "detail": "Date received or use by June"
     },
     {
      "label": "JULY",
      "detail": "Date received or use by July"
     },
     {
      "label": "AUGUST",
      "detail": "Date received or use by August"
     },
     {
      "label": "SEPTEMBER",
      "detail": "Date received or use by September"
     },
     {
      "label": "OCTOBER",
      "detail": "Date received or use by October"
     },
     {
      "label": "NOVEMBER",
      "detail": "Date received or use by November"
     },
     {
      "label": "DECEMBER",
      "detail": "Date received or use by December"
     }
    ]
   },
   {
    "label": "Numbered inventory tag",
    "size": "1\" x 2.625\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Sequential numbers and letters for count sheets and audits.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "Number 0",
      "detail": "Count sheet digit zero"
     },
     {
      "label": "Number 1",
      "detail": "Count sheet digit one"
     },
     {
      "label": "Number 2",
      "detail": "Count sheet digit two"
     },
     {
      "label": "Number 3",
      "detail": "Count sheet digit three"
     },
     {
      "label": "Number 4",
      "detail": "Count sheet digit four"
     },
     {
      "label": "Number 5",
      "detail": "Count sheet digit five"
     },
     {
      "label": "Number 6",
      "detail": "Count sheet digit six"
     },
     {
      "label": "Number 7",
      "detail": "Count sheet digit seven"
     },
     {
      "label": "Number 8",
      "detail": "Count sheet digit eight"
     },
     {
      "label": "Number 9",
      "detail": "Count sheet digit nine"
     },
     {
      "label": "Letters A to Z",
      "detail": "Full letter run for aisle codes"
     },
     {
      "label": "Four digit year",
      "detail": "Year stamp for audit records"
     },
     {
      "label": "Sequential number run",
      "detail": "Consecutive numbering across the whole roll"
     }
    ]
   },
   {
    "label": "Barcoded bin label",
    "size": "2\" x 4\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Bin and shelf identification with a barcode along a pick path.",
    "grounding": "standard",
    "sub_axis": "Symbology",
    "subs": [
     {
      "label": "Code 128",
      "detail": "Dense alphanumeric for pick path IDs"
     },
     {
      "label": "Code 39",
      "detail": "Older readers, letters and numbers"
     },
     {
      "label": "GS1-128",
      "detail": "Application identifiers for supply chain data"
     },
     {
      "label": "UPC-A",
      "detail": "Retail item numbers on bin fronts"
     },
     {
      "label": "EAN-13",
      "detail": "International retail item numbers"
     },
     {
      "label": "Interleaved 2 of 5",
      "detail": "Numeric only, long standing warehouse choice"
     },
     {
      "label": "QR Code",
      "detail": "Two dimensional code for phone scanning"
     },
     {
      "label": "Data Matrix",
      "detail": "Small footprint two dimensional code"
     }
    ]
   },
   {
    "label": "Barcoded carton label",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Carton and pallet identification through receiving and put away.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "4\" x 6\"",
      "detail": "The standard carton and pallet size"
     },
     {
      "label": "4\" x 6.5\"",
      "detail": "Extra depth for compliance panels"
     },
     {
      "label": "4\" x 8\"",
      "detail": "Room for routing and address blocks"
     },
     {
      "label": "6\" x 4\"",
      "detail": "Wide layout for long part numbers"
     },
     {
      "label": "4\" x 4\"",
      "detail": "Square format for smaller cartons"
     },
     {
      "label": "3\" x 5\"",
      "detail": "Fits narrow carton side panels"
     }
    ]
   },
   {
    "label": "Fan-fold inventory label",
    "size": "4\" x 6\"",
    "format": "Fan-fold",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "High volume runs for teams who would rather stack labels than load rolls.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "4\" x 6\"",
      "detail": "Highest volume carton and pallet size"
     },
     {
      "label": "4\" x 6.5\"",
      "detail": "Extra depth for compliance panels"
     },
     {
      "label": "4\" x 4\"",
      "detail": "Square format for smaller cartons"
     },
     {
      "label": "4\" x 3\"",
      "detail": "Shorter label for case marking"
     },
     {
      "label": "4\" x 2\"",
      "detail": "Strip format for shelf and bin"
     },
     {
      "label": "3\" x 2\"",
      "detail": "Small tag for parts and totes"
     }
    ]
   },
   {
    "label": "Rack and location marker",
    "size": "3\" x 5\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "High tack",
    "typical_use": "Aisle, rack, and shelf markers specified with a high tack adhesive.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1.5\" x 3\"",
      "detail": "Shelf edge and small bin markers"
     },
     {
      "label": "2\" x 4\"",
      "detail": "Standard rack beam location marker"
     },
     {
      "label": "3\" x 5\"",
      "detail": "Reads from the middle of aisle"
     },
     {
      "label": "4\" x 6\"",
      "detail": "Upright and end of rack"
     },
     {
      "label": "2\" x 8\"",
      "detail": "Long strip for multi position beams"
     },
     {
      "label": "3\" x 10\"",
      "detail": "Aisle headers read from far away"
     }
    ]
   },
   {
    "label": "Freezer stock label",
    "size": "2.25\" x 1.25\"",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Freezer grade",
    "typical_use": "Cold room and freezer inventory, specified with a freezer grade adhesive.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1.5\" x 1\"",
      "detail": "Small tubs, pans, and jars"
     },
     {
      "label": "2\" x 1\"",
      "detail": "Narrow strip for lids and edges"
     },
     {
      "label": "2.25\" x 1.25\"",
      "detail": "The common cold room stock size"
     },
     {
      "label": "2\" x 3\"",
      "detail": "Room for date, lot, and contents"
     },
     {
      "label": "3\" x 2\"",
      "detail": "Wide layout for handwritten notes"
     },
     {
      "label": "4\" x 2\"",
      "detail": "Case marking in the freezer"
     }
    ]
   },
   {
    "label": "Foil asset tag",
    "size": "2\" x 1\"",
    "format": "Roll, 1\" core",
    "material": "Metallic foil",
    "adhesive": "Permanent",
    "typical_use": "Equipment tags for tools, machines, and IT gear, printed on foil stock.",
    "grounding": "grounded",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1.5\" x 0.75\"",
      "detail": "Hand tools and small fittings"
     },
     {
      "label": "2\" x 1\"",
      "detail": "The everyday equipment tag size"
     },
     {
      "label": "1\" x 2.625\"",
      "detail": "Long format for serial and barcode"
     },
     {
      "label": "2\" x 2\"",
      "detail": "Square tag for machine housings"
     },
     {
      "label": "3\" x 1\"",
      "detail": "Wide strip for laptops and racks"
     },
     {
      "label": "2\" x 3\"",
      "detail": "Room for model, serial, and contact"
     }
    ]
   }
  ],
  "art": "images/labels-stock/colored-film-stock-tile.webp",
  "seo": "Inventory & Color-Code Labels"
 },
 {
  "id": "warning-safety",
  "name": "Warning & Safety Labels",
  "intro": "Equipment warnings, electrical instructions, and compliance labels that have to stay readable years after they go on. We already print this work, including the yellow grounding attention labels and the pressure and temperature warnings in our examples, and our design team will lay out the wording with you.",
  "use_cases": [
   "Equipment grounding instructions on machine frames and control cabinets",
   "Max pressure and max temperature limits on tanks, vessels, and sight glasses",
   "Class 2 wiring and electrical instruction panels that must ship with the product",
   "Arc flash and electrical hazard warnings on panels and disconnects",
   "Do not operate labels for lockout, service, and inspection",
   "Hot surface, pinch point, and moving part warnings",
   "Rating plates and compliance marks on finished equipment"
  ],
  "variants": [
   {
    "label": "Equipment grounding attention label",
    "size": "3\" x 5\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "The yellow attention label that tells an installer to connect the unit to earth ground, with room for the code reference underneath.",
    "grounding": "grounded",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "ATTENTION, CONNECT TO EARTH GROUND",
      "detail": "The standard installer grounding instruction"
     },
     {
      "label": "WARNING, GROUND BEFORE OPERATING",
      "detail": "Pre startup grounding reminder"
     },
     {
      "label": "EQUIPMENT GROUNDING CONDUCTOR",
      "detail": "Marks the grounding conductor terminal"
     },
     {
      "label": "PROTECTIVE EARTH, PE",
      "detail": "Short marking beside a ground stud"
     },
     {
      "label": "BOND TO GROUND",
      "detail": "For frames, cabinets, and enclosures"
     },
     {
      "label": "DO NOT REMOVE GROUND WIRE",
      "detail": "Guards against field removal"
     },
     {
      "label": "GROUND TERMINAL",
      "detail": "Small pointer at the lug"
     },
     {
      "label": "SEE INSTALLATION MANUAL FOR GROUNDING",
      "detail": "Points installers to your manual"
     }
    ]
   },
   {
    "label": "Pressure and temperature warning",
    "size": "3\" x 4\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Max PSI and max temperature limits on sight glasses, tanks, and vessels, printed big enough to read at arm's length.",
    "grounding": "grounded",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "MAXIMUM WORKING PRESSURE ___ PSI",
      "detail": "Blank field you fill in"
     },
     {
      "label": "MAXIMUM OPERATING TEMPERATURE ___ F",
      "detail": "Blank temperature field per unit"
     },
     {
      "label": "DO NOT EXCEED RATED PRESSURE",
      "detail": "Fixed wording, no fill in"
     },
     {
      "label": "RELIEVE PRESSURE BEFORE SERVICING",
      "detail": "Service step on tanks, vessels"
     },
     {
      "label": "WARNING, HOT LIQUID UNDER PRESSURE",
      "detail": "Sight glass and vessel hazard"
     },
     {
      "label": "CAUTION, HIGH PRESSURE",
      "detail": "Short banner for tight panels"
     },
     {
      "label": "TEST PRESSURE ___ PSI",
      "detail": "Records the test value"
     },
     {
      "label": "HOT SURFACE, DO NOT TOUCH",
      "detail": "Burn warning near hot piping"
     }
    ]
   },
   {
    "label": "Wiring and compliance instruction panel",
    "size": "4\" x 6\"",
    "format": "Sheet",
    "material": "Matte paper",
    "adhesive": "Permanent",
    "typical_use": "Dense Class 2 wiring rules, module limits, and operating conditions that must accompany the product. Matte keeps small type easy to read under shop lighting.",
    "grounding": "grounded",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "CLASS 2 WIRING ONLY",
      "detail": "Class 2 supply wiring panels"
     },
     {
      "label": "DISCONNECT POWER BEFORE SERVICING",
      "detail": "Opens most service instruction panels"
     },
     {
      "label": "USE COPPER CONDUCTORS ONLY",
      "detail": "Conductor requirement line"
     },
     {
      "label": "USE WIRE RATED 75 C MINIMUM",
      "detail": "Supply conductor rating line"
     },
     {
      "label": "RISK OF ELECTRIC SHOCK",
      "detail": "Header above the wiring rules"
     },
     {
      "label": "DANGER, HIGH VOLTAGE",
      "detail": "Header for line voltage panels"
     },
     {
      "label": "QUALIFIED PERSONNEL ONLY",
      "detail": "Restricts who opens the panel"
     },
     {
      "label": "FOR INDOOR USE ONLY",
      "detail": "Operating condition line"
     },
     {
      "label": "WIRING DIAGRAM, your artwork",
      "detail": "Your schematic laid out by us"
     },
     {
      "label": "READ INSTRUCTIONS BEFORE INSTALLING",
      "detail": "Opening line on install panels"
     }
    ]
   },
   {
    "label": "Metal equipment rating plate",
    "size": "5\" x 7\"",
    "format": "Sheet",
    "material": "Metal",
    "adhesive": "Permanent",
    "typical_use": "A durable metal plate for model, serial, and rating data on machinery that lives outdoors or in wash-down areas. This is the metal work most printers will not touch.",
    "grounding": "grounded",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "MODEL AND SERIAL NUMBER",
      "detail": "The core nameplate data block"
     },
     {
      "label": "ELECTRICAL RATING, VOLTS AMPS HZ",
      "detail": "Supply rating fields"
     },
     {
      "label": "MANUFACTURED BY, DATE OF MANUFACTURE",
      "detail": "Builder and build date"
     },
     {
      "label": "MAXIMUM LOAD CAPACITY",
      "detail": "Rated capacity for lifting, holding"
     },
     {
      "label": "MAXIMUM WORKING PRESSURE ___ PSI",
      "detail": "Pressure rating on the plate"
     },
     {
      "label": "CONNECT TO EARTH GROUND",
      "detail": "Grounding instruction on the plate"
     },
     {
      "label": "DANGER, HIGH VOLTAGE",
      "detail": "Hazard header above rating data"
     },
     {
      "label": "DO NOT REMOVE THIS PLATE",
      "detail": "Keeps the plate with the machine"
     },
     {
      "label": "SERIAL NUMBER WITH BARCODE",
      "detail": "Human readable plus scannable code"
     }
    ]
   },
   {
    "label": "Small caution strip",
    "size": "1\" x 2.625\"",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Short caution wording on small components, brackets, and enclosures where there is not much flat area to work with.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "CAUTION",
      "detail": "Signal word alone, no hazard text"
     },
     {
      "label": "WARNING",
      "detail": "Signal word alone, higher level"
     },
     {
      "label": "NOTICE",
      "detail": "Non hazard information strip"
     },
     {
      "label": "PINCH POINT",
      "detail": "Hinges, covers, and linkages"
     },
     {
      "label": "HOT SURFACE",
      "detail": "Motors, housings, small piping"
     },
     {
      "label": "SHARP EDGE",
      "detail": "Brackets and sheet metal"
     },
     {
      "label": "HIGH VOLTAGE",
      "detail": "Small enclosures and junction boxes"
     },
     {
      "label": "MOVING PARTS",
      "detail": "Guards over belts and shafts"
     },
     {
      "label": "DO NOT REMOVE",
      "detail": "Covers, guards, and access plates"
     },
     {
      "label": "GROUND",
      "detail": "Marks a grounding lug"
     },
     {
      "label": "NO SMOKING",
      "detail": "Fuel and solvent areas"
     },
     {
      "label": "EYE PROTECTION REQUIRED",
      "detail": "At the point of operation"
     }
    ]
   },
   {
    "label": "Danger header warning label",
    "size": "2\" x 4\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "The classic banner header with hazard wording below it, sized for guards, covers, and access doors.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "DANGER",
      "detail": "Header only, hazard text below"
     },
     {
      "label": "WARNING",
      "detail": "Header only, hazard text below"
     },
     {
      "label": "CAUTION",
      "detail": "Header only, hazard text below"
     },
     {
      "label": "NOTICE",
      "detail": "Header only, information text below"
     },
     {
      "label": "DANGER, HIGH VOLTAGE",
      "detail": "Panels, disconnects, and covers"
     },
     {
      "label": "DANGER, MOVING PARTS, KEEP CLEAR",
      "detail": "Guards over belts and gears"
     },
     {
      "label": "WARNING, AUTOMATIC START WITHOUT NOTICE",
      "detail": "Unattended and remote start equipment"
     },
     {
      "label": "WARNING, DO NOT OPERATE WITHOUT GUARDS",
      "detail": "Removable guard doors and covers"
     },
     {
      "label": "CAUTION, HOT SURFACE",
      "detail": "Ovens, dryers, and heaters"
     },
     {
      "label": "DANGER, FLAMMABLE",
      "detail": "Fuel, solvent, and vapor areas"
     },
     {
      "label": "NOTICE, READ MANUAL BEFORE OPERATING",
      "detail": "Control panels and access doors"
     }
    ]
   },
   {
    "label": "Arc flash and electrical hazard label",
    "size": "4\" x 6.5\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Panel and disconnect warnings that need space for boundary, voltage, and PPE details.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "DANGER, ARC FLASH AND SHOCK HAZARD",
      "detail": "The full hazard header"
     },
     {
      "label": "WARNING, ARC FLASH AND SHOCK HAZARD",
      "detail": "Same hazard, warning level header"
     },
     {
      "label": "APPROPRIATE PPE REQUIRED",
      "detail": "Sits under the hazard header"
     },
     {
      "label": "ARC FLASH BOUNDARY ___ IN",
      "detail": "Blank field for your value"
     },
     {
      "label": "INCIDENT ENERGY ___ CAL/CM2",
      "detail": "Blank field for your value"
     },
     {
      "label": "SHOCK HAZARD WHEN COVER IS REMOVED",
      "detail": "Enclosure and cover wording"
     },
     {
      "label": "DANGER, HIGH VOLTAGE",
      "detail": "Short header for disconnects"
     },
     {
      "label": "WARNING, MULTIPLE POWER SOURCES",
      "detail": "More than one feed present"
     },
     {
      "label": "DISCONNECT ALL POWER BEFORE SERVICING",
      "detail": "Service instruction line"
     },
     {
      "label": "QUALIFIED PERSONS ONLY",
      "detail": "Limits who opens the panel"
     },
     {
      "label": "EQUIPMENT NAME AND DATE FIELDS",
      "detail": "Blank lines you fill in"
     }
    ]
   },
   {
    "label": "Do not operate lockout label",
    "size": "2\" x 3\"",
    "format": "Sheet",
    "material": "Semi-gloss paper",
    "adhesive": "Removable",
    "typical_use": "Applied during service and taken back off cleanly when the machine is released. Removable so it does not leave residue on painted panels.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "DANGER, DO NOT OPERATE",
      "detail": "The standard lockout wording"
     },
     {
      "label": "DO NOT OPERATE",
      "detail": "Wording alone, no signal header"
     },
     {
      "label": "DO NOT START",
      "detail": "For starters and pull cords"
     },
     {
      "label": "DO NOT ENERGIZE",
      "detail": "Breakers and disconnects"
     },
     {
      "label": "LOCKED OUT, DO NOT REMOVE",
      "detail": "Stays on through the service window"
     },
     {
      "label": "OUT OF SERVICE",
      "detail": "General equipment hold"
     },
     {
      "label": "EQUIPMENT UNDER REPAIR",
      "detail": "Maintenance in progress"
     },
     {
      "label": "DO NOT REMOVE THIS TAG",
      "detail": "Line under the main legend"
     },
     {
      "label": "LOCKED OUT BY ___ DATE ___",
      "detail": "Blank lines the tech fills"
     }
    ]
   },
   {
    "label": "Hot surface warning circle",
    "size": "2\" circle",
    "format": "Roll, 1\" core",
    "material": "White film",
    "adhesive": "High tack",
    "typical_use": "Round hot surface or pinch point warnings on curved housings, motors, and piping where a square label will not sit flat.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "HOT SURFACE",
      "detail": "Motors, housings, and piping"
     },
     {
      "label": "HOT SURFACE, DO NOT TOUCH",
      "detail": "Adds the instruction line"
     },
     {
      "label": "BURN HAZARD",
      "detail": "Heaters, dryers, and ovens"
     },
     {
      "label": "HIGH TEMPERATURE",
      "detail": "Steam and heat transfer lines"
     },
     {
      "label": "PINCH POINT",
      "detail": "Rollers, hinges, and linkages"
     },
     {
      "label": "KEEP HANDS CLEAR",
      "detail": "Feed points and openings"
     },
     {
      "label": "MOVING PARTS",
      "detail": "Curved guards over drives"
     },
     {
      "label": "ROTATING SHAFT",
      "detail": "Couplings and shaft ends"
     },
     {
      "label": "CUT HAZARD",
      "detail": "Blades and sharp tooling"
     },
     {
      "label": "NO SMOKING",
      "detail": "Round mark for tanks, drums"
     },
     {
      "label": "FLAMMABLE",
      "detail": "Solvent and fuel containers"
     },
     {
      "label": "EYE PROTECTION REQUIRED",
      "detail": "At the point of operation"
     }
    ]
   },
   {
    "label": "Gauge and glass seal",
    "size": "1\" circle",
    "format": "Roll, 1\" core",
    "material": "Clear film",
    "adhesive": "Permanent",
    "typical_use": "Small hazard or inspection seals on gauges and glass, printed on clear so the surface underneath still shows.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "DO NOT REMOVE",
      "detail": "Holds a seal in place"
     },
     {
      "label": "SEALED, VOID IF BROKEN",
      "detail": "Tamper wording on gauges"
     },
     {
      "label": "INSPECTED BY ___ DATE ___",
      "detail": "Blank lines the inspector fills"
     },
     {
      "label": "CALIBRATION DUE ___",
      "detail": "Blank date field"
     },
     {
      "label": "HOT",
      "detail": "One word mark beside glass"
     },
     {
      "label": "HIGH PRESSURE",
      "detail": "Small hazard dot on gauges"
     },
     {
      "label": "CHECK LEVEL DAILY",
      "detail": "Routine check reminder"
     },
     {
      "label": "DO NOT EXCEED RED LINE",
      "detail": "Points at the gauge limit"
     }
    ]
   },
   {
    "label": "Inspection and service label, thermal printed",
    "size": "2.25\" x 1.25\"",
    "format": "Roll, 1\" core",
    "material": "Matte paper",
    "adhesive": "Permanent",
    "typical_use": "Blank or pre-printed stock you run on your own thermal transfer printer to date-stamp inspections and service checks in house.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "Blank, you print everything",
      "detail": "Nothing pre printed on the stock"
     },
     {
      "label": "INSPECTED BY ___ DATE ___",
      "detail": "Pre printed lines, printer fills rest"
     },
     {
      "label": "SERVICE DUE ___",
      "detail": "Next service date field"
     },
     {
      "label": "CALIBRATION DUE ___",
      "detail": "Next calibration date field"
     },
     {
      "label": "NEXT PM DATE ___",
      "detail": "Preventive maintenance schedule field"
     },
     {
      "label": "TESTED AND PASSED",
      "detail": "Pass mark after a check"
     },
     {
      "label": "DATE PLACED IN SERVICE ___",
      "detail": "Start of service life"
     },
     {
      "label": "FILTER CHANGED ___",
      "detail": "Filter service record"
     },
     {
      "label": "DO NOT OPERATE AFTER ___",
      "detail": "Hard stop date field"
     },
     {
      "label": "Your logo, blank data fields",
      "detail": "Your mark, printer adds data"
     }
    ]
   },
   {
    "label": "Cold storage handling warning",
    "size": "4\" x 6\"",
    "format": "Fan-fold",
    "material": "Semi-gloss paper",
    "adhesive": "Freezer grade",
    "typical_use": "Handling and hazard wording on cartons and totes that go straight into a freezer, with an adhesive that holds at cold temperatures.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "KEEP FROZEN",
      "detail": "Freezer bound cartons and totes"
     },
     {
      "label": "KEEP REFRIGERATED",
      "detail": "Cooler bound cartons and totes"
     },
     {
      "label": "DO NOT FREEZE",
      "detail": "Chill only loads"
     },
     {
      "label": "PERISHABLE",
      "detail": "Time sensitive contents"
     },
     {
      "label": "TEMPERATURE SENSITIVE",
      "detail": "General cold chain mark"
     },
     {
      "label": "HANDLE WITH CARE",
      "detail": "Fragile cold chain freight"
     },
     {
      "label": "THIS SIDE UP",
      "detail": "Orientation on stacked totes"
     },
     {
      "label": "DO NOT STACK",
      "detail": "Crush protection in the freezer"
     },
     {
      "label": "COLD SURFACE, WEAR GLOVES",
      "detail": "Handler warning on frozen totes"
     },
     {
      "label": "DO NOT DROP",
      "detail": "Impact warning on cartons"
     }
    ]
   },
   {
    "label": "Foil equipment nameplate",
    "size": "1\" x 3\"",
    "format": "Sheet",
    "material": "Metallic foil",
    "adhesive": "Permanent",
    "typical_use": "A small foil nameplate or rating strip when you want the finished look of metal on a compact footprint.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "MODEL AND SERIAL NUMBER",
      "detail": "The basic nameplate strip"
     },
     {
      "label": "ASSET NUMBER",
      "detail": "Fleet and facility tracking"
     },
     {
      "label": "DATE OF MANUFACTURE",
      "detail": "Build date on the housing"
     },
     {
      "label": "ELECTRICAL RATING, VOLTS AMPS HZ",
      "detail": "Compact supply rating strip"
     },
     {
      "label": "MANUFACTURED BY, your company name",
      "detail": "Your name on the part"
     },
     {
      "label": "MADE IN USA",
      "detail": "Short origin line"
     },
     {
      "label": "PROPERTY OF ___",
      "detail": "Ownership mark on equipment"
     },
     {
      "label": "SERVICE CONTACT, phone and website",
      "detail": "Who to call for service"
     },
     {
      "label": "DO NOT REMOVE",
      "detail": "Keeps the plate on the unit"
     },
     {
      "label": "CONNECT TO EARTH GROUND",
      "detail": "Compact grounding instruction strip"
     }
    ]
   }
  ],
  "art": "images/labels-stock/white-film-rolls-tile.webp",
  "seo": "Warning & Safety Labels"
 },
 {
  "id": "asset-serial",
  "name": "Asset, Serial & Compliance Labels",
  "intro": "Model plates, serial numbers, asset tags, and the compliance panels that have to stay readable for the life of the machine. Every row below is a common starting point, not a fixed product, so tell us your surface, your numbering, and your artwork and a labeling specialist will quote it.",
  "use_cases": [
   "Model and serial number plates for meters, pumps, valves, and machinery",
   "Compliance and wiring instruction panels that ship with the product",
   "Fixed-asset tags with sequential numbers or barcodes for IT, facilities, and rental fleets",
   "Calibration and inspection dots that carry a service date",
   "Tamper-evident seals on enclosures, meters, and service panels",
   "Equipment rating and spec panels for nameplate data",
   "Cold-storage and warehouse equipment tags that live in the freezer"
  ],
  "variants": [
   {
    "label": "Round model and serial plate",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Model and serial number plate for meters, gauges, and equipment housings. Fields can be printed or left open to fill in.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "0.75\" circle",
      "detail": "Compact plate for small gauge bodies"
     },
     {
      "label": "1\" circle",
      "detail": "Serial number on tight housings"
     },
     {
      "label": "1.25\" circle",
      "detail": "Model and serial on small meters"
     },
     {
      "label": "1.5\" circle",
      "detail": "Room for model plus serial line"
     },
     {
      "label": "2\" circle",
      "detail": "Standard meter and pump plate"
     },
     {
      "label": "2.5\" circle",
      "detail": "Adds ratings under the serial line"
     },
     {
      "label": "3\" circle",
      "detail": "Full nameplate data on one dot"
     }
    ]
   },
   {
    "label": "Compliance and rating panel",
    "size": "4\" x 6\"",
    "format": "Sheet",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "The dense panel that ships with the product, wiring class, ratings, capacities, part numbers, and operating limits on one label.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "2\" x 3\"",
      "detail": "Short rating block on small units"
     },
     {
      "label": "3\" x 4\"",
      "detail": "Ratings plus a brief wiring note"
     },
     {
      "label": "3\" x 5\"",
      "detail": "Vertical panel for tall enclosures"
     },
     {
      "label": "4\" x 4\"",
      "detail": "Square panel for door interiors"
     },
     {
      "label": "4\" x 6\"",
      "detail": "Full wiring and ratings panel"
     },
     {
      "label": "5\" x 7\"",
      "detail": "Adds diagrams beside the ratings"
     },
     {
      "label": "6\" x 8\"",
      "detail": "Large panel for floor equipment"
     },
     {
      "label": "8.5\" x 11\"",
      "detail": "Full sheet instruction and rating panel"
     }
    ]
   },
   {
    "label": "Metal nameplate",
    "size": "2\" x 4\"",
    "format": "Sheet",
    "material": "Metal",
    "adhesive": "Permanent",
    "typical_use": "Durable nameplate for machinery and industrial equipment, for jobs where a printed film label will not survive. Metal is one of the stocks we print.",
    "grounding": "grounded",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1\" x 2\"",
      "detail": "Small serial plate for compact parts"
     },
     {
      "label": "1.5\" x 3\"",
      "detail": "Model and serial on one plate"
     },
     {
      "label": "2\" x 3\"",
      "detail": "Nameplate with model, serial, ratings"
     },
     {
      "label": "2\" x 4\"",
      "detail": "Standard machinery nameplate footprint"
     },
     {
      "label": "3\" x 5\"",
      "detail": "Room for a full spec block"
     },
     {
      "label": "4\" x 6\"",
      "detail": "Large nameplate for floor machinery"
     }
    ]
   },
   {
    "label": "Metallic foil serial plate",
    "size": "1\" x 2.625\"",
    "format": "Sheet",
    "material": "Metallic foil",
    "adhesive": "Permanent",
    "typical_use": "Small foil plate for a serial or model number where you want a brushed metal look on a smaller part or housing. Foil is one of the stocks we print.",
    "grounding": "grounded",
    "sub_axis": "Numbering",
    "subs": [
     {
      "label": "Sequential serial numbers",
      "detail": "Consecutive numbers across your run"
     },
     {
      "label": "Serial plus model number",
      "detail": "Two fields printed on every plate"
     },
     {
      "label": "Barcode with readable number",
      "detail": "Scannable code above the printed digits"
     },
     {
      "label": "QR code with serial",
      "detail": "Links to record, serial printed below"
     },
     {
      "label": "Blank write-on fields",
      "detail": "Ruled fields you fill in later"
     },
     {
      "label": "Date or lot code",
      "detail": "Build date or lot on plate"
     },
     {
      "label": "Prefix and number range",
      "detail": "Your letter prefix ahead of digits"
     }
    ]
   },
   {
    "label": "Serialized barcode asset tag",
    "size": "2.25\" x 1.25\"",
    "format": "Roll, 1\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Small asset tag carrying a number and a scannable barcode. Ask us about sequential numbering across your range.",
    "grounding": "standard",
    "sub_axis": "Barcode type",
    "subs": [
     {
      "label": "Code 128",
      "detail": "Dense code for long asset numbers"
     },
     {
      "label": "Code 39",
      "detail": "Common format for older scanners"
     },
     {
      "label": "Interleaved 2 of 5",
      "detail": "Numeric only, carton and asset use"
     },
     {
      "label": "GS1-128",
      "detail": "Carries application identifiers with the number"
     },
     {
      "label": "UPC-A",
      "detail": "Retail twelve digit product code"
     },
     {
      "label": "EAN-13",
      "detail": "International thirteen digit product code"
     },
     {
      "label": "QR Code",
      "detail": "Square code read by phones"
     },
     {
      "label": "Data Matrix",
      "detail": "Tiny square code for small tags"
     },
     {
      "label": "Human readable only",
      "detail": "Printed digits, no barcode at all"
     }
    ]
   },
   {
    "label": "Equipment ID tag with QR",
    "size": "2\" x 3\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "High tack",
    "typical_use": "Larger asset ID with a QR code pointing to the manual or service record. High tack is the adhesive to ask about for powder-coated and textured housings.",
    "grounding": "standard",
    "sub_axis": "Adhesive",
    "subs": [
     {
      "label": "Permanent",
      "detail": "Standard bond for smooth clean housings"
     },
     {
      "label": "High tack",
      "detail": "For powder coated and textured surfaces"
     },
     {
      "label": "Removable",
      "detail": "Lifts cleanly when the asset retires"
     },
     {
      "label": "Freezer grade",
      "detail": "Applies to cold and frozen surfaces"
     },
     {
      "label": "Tamper evident",
      "detail": "Shows damage if someone removes it"
     }
    ]
   },
   {
    "label": "Tamper-evident security seal",
    "size": "2\" x 1\"",
    "format": "Roll, 1\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Seal across an enclosure lid, meter cover, or service panel so it is obvious if someone opened it. Ask us about tamper-evident constructions for your surface.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "0.75\" x 0.5\"",
      "detail": "Small seal over a screw head"
     },
     {
      "label": "1\" x 0.5\"",
      "detail": "Narrow seal for battery doors"
     },
     {
      "label": "1.5\" x 0.75\"",
      "detail": "Short seal across a small lid"
     },
     {
      "label": "2\" x 1\"",
      "detail": "Standard seal for enclosure covers"
     },
     {
      "label": "3\" x 1\"",
      "detail": "Longer span across a panel gap"
     },
     {
      "label": "4\" x 1\"",
      "detail": "Wide span across cabinet doors"
     },
     {
      "label": "2\" x 2\"",
      "detail": "Square seal with room for text"
     }
    ]
   },
   {
    "label": "Calibration and inspection dot",
    "size": "1\" circle",
    "format": "Roll, 1\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Small dot for a calibration, inspection, or next-service date on gauges, tools, and test equipment. Printed with the date or left open to write on.",
    "grounding": "standard",
    "sub_axis": "Legend",
    "subs": [
     {
      "label": "Calibrated",
      "detail": "Date calibrated and next due"
     },
     {
      "label": "Inspected",
      "detail": "Inspection date and inspector initials"
     },
     {
      "label": "Next Service Due",
      "detail": "Month and year of next service"
     },
     {
      "label": "Tested",
      "detail": "Test date on gauges and tools"
     },
     {
      "label": "Passed",
      "detail": "Marks equipment cleared for use"
     },
     {
      "label": "Do Not Use",
      "detail": "Marks equipment pulled from service"
     },
     {
      "label": "Out of Service",
      "detail": "Holds a unit off the floor"
     },
     {
      "label": "Quality Control",
      "detail": "QC check mark and date"
     },
     {
      "label": "Property Of",
      "detail": "Ownership dot for tools and gauges"
     },
     {
      "label": "Blank write-on",
      "detail": "Open field you date yourself"
     }
    ]
   },
   {
    "label": "Clear film spec overlay",
    "size": "3\" x 2\"",
    "format": "Sheet",
    "material": "Clear film",
    "adhesive": "Permanent",
    "typical_use": "Legend or spec text that reads as though it were printed onto the panel itself, for painted and finished enclosures.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "1\" x 1\"",
      "detail": "Small legend beside a switch"
     },
     {
      "label": "2\" x 1\"",
      "detail": "Single line of spec text"
     },
     {
      "label": "2\" x 2\"",
      "detail": "Short legend block on panels"
     },
     {
      "label": "3\" x 2\"",
      "detail": "Standard spec and legend overlay"
     },
     {
      "label": "4\" x 3\"",
      "detail": "Longer legend with several lines"
     },
     {
      "label": "5\" x 4\"",
      "detail": "Full instruction block on enclosures"
     },
     {
      "label": "6\" x 4\"",
      "detail": "Large overlay for control panels"
     }
    ]
   },
   {
    "label": "Cold-storage asset tag",
    "size": "3\" x 1\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Freezer grade",
    "typical_use": "Asset and rack tags applied to cold or frozen surfaces in coolers, freezers, and refrigerated trailers.",
    "grounding": "standard",
    "sub_axis": "Size",
    "subs": [
     {
      "label": "2\" x 1\"",
      "detail": "Small tag for freezer bins"
     },
     {
      "label": "3\" x 1\"",
      "detail": "Standard rack and shelf tag"
     },
     {
      "label": "4\" x 1\"",
      "detail": "Long tag for rack beams"
     },
     {
      "label": "2\" x 3\"",
      "detail": "Room for barcode and text"
     },
     {
      "label": "4\" x 2\"",
      "detail": "Larger tag for cooler doors"
     },
     {
      "label": "4\" x 6\"",
      "detail": "Pallet and rack bay marker"
     }
    ]
   },
   {
    "label": "Removable inventory tag",
    "size": "4\" x 2\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Removable",
    "typical_use": "Cycle-count and temporary inventory tags meant to come off when the count is closed out.",
    "grounding": "standard",
    "sub_axis": "Numbering",
    "subs": [
     {
      "label": "Sequential numbers",
      "detail": "Consecutive count numbers across the run"
     },
     {
      "label": "Barcode with number",
      "detail": "Scannable code and printed digits"
     },
     {
      "label": "QR code",
      "detail": "Square code for phone scanning"
     },
     {
      "label": "Blank write-on",
      "detail": "Open box you fill in"
     },
     {
      "label": "Date and initials fields",
      "detail": "Ruled lines for date and counter"
     },
     {
      "label": "Location or bin field",
      "detail": "Blank line for aisle or bin"
     },
     {
      "label": "Duplicate numbered pairs",
      "detail": "Matching numbers for tag and sheet"
     }
    ]
   }
  ],
  "art": "images/labels-stock/opaque-and-foil-backs-tile.webp",
  "seo": "Asset, Serial & Compliance Labels"
 }
];
