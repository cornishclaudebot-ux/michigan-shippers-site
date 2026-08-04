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
    "grounding": "standard"
   },
   {
    "label": "Bottle & Jar Wrap",
    "size": "4\" x 3\"",
    "format": "Roll, 3\" core",
    "material": "Clear film",
    "adhesive": "Permanent",
    "typical_use": "Wraps the body of a bottle or jar for sauces, syrups, and cold press, with the no-label look on clear glass and plastic.",
    "grounding": "standard"
   },
   {
    "label": "Tin & Metal Label",
    "size": "2\" x 2\"",
    "format": "Sheet",
    "material": "Metal",
    "adhesive": "Permanent",
    "typical_use": "Durable tin and metal labels, the kind most printers will not handle. We run them.",
    "grounding": "grounded"
   },
   {
    "label": "Foil Crest Seal",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Permanent",
    "typical_use": "A foil seal or crest on a lid, box, or carton when the package needs to feel finished.",
    "grounding": "grounded"
   },
   {
    "label": "Cap & Lid Seal",
    "size": "1.5\" circle",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Puts the logo, flavor, or scent name on a jar lid or a bottle cap.",
    "grounding": "standard"
   },
   {
    "label": "Scent & Batch Dot",
    "size": "0.75\" circle",
    "format": "Roll, 1\" core",
    "material": "White film",
    "adhesive": "Removable",
    "typical_use": "Marks scent, batch, or variant on the bottom of a jar and peels clean.",
    "grounding": "standard"
   },
   {
    "label": "Box Seal Band",
    "size": "1\" x 2.625\"",
    "format": "Roll, 1\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Closes a folded carton or gift box so it arrives the way you packed it.",
    "grounding": "standard"
   },
   {
    "label": "Back Panel Label",
    "size": "3\" x 5\"",
    "format": "Roll, 3\" core",
    "material": "Matte paper",
    "adhesive": "Permanent",
    "typical_use": "Directions, the story behind the product, and the fine print on the back of a jar or box.",
    "grounding": "standard"
   },
   {
    "label": "Pouch Front Label",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "High tack",
    "typical_use": "Covers the face of a stand-up pouch for coffee, granola, or pet treats. High tack helps on textured pouch film.",
    "grounding": "standard"
   },
   {
    "label": "Kraft Small-Batch Label",
    "size": "3\" x 2\"",
    "format": "Roll, 3\" core",
    "material": "Kraft paper",
    "adhesive": "Permanent",
    "typical_use": "The natural, unbleached look for soap bars, candles, and handmade goods.",
    "grounding": "standard"
   },
   {
    "label": "Cold Case Label",
    "size": "2\" x 4\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Freezer grade",
    "typical_use": "Frozen and refrigerated retail items, where a paper label can lift. Tell us how cold it gets and we will spec the adhesive.",
    "grounding": "standard"
   },
   {
    "label": "First Run Sample Label",
    "size": "3.5\" x 2\"",
    "format": "Sheet",
    "material": "Matte paper",
    "adhesive": "Permanent",
    "typical_use": "A short first run or a trade show batch, printed on sheets instead of a roll.",
    "grounding": "standard"
   },
   {
    "label": "Line-Run Product Label",
    "size": "4\" x 3\"",
    "format": "Fan-fold",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Fan-fold feeds a print and apply line without roll changes.",
    "grounding": "standard"
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
    "grounding": "grounded"
   },
   {
    "label": "Coffee bag front label",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Roast name, origin, and brand on a 12 oz or 5 lb coffee bag.",
    "grounding": "standard"
   },
   {
    "label": "Nutrition and ingredient panel",
    "size": "3\" x 5\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Nutrition, ingredient, and allergen copy on the back of a jar or bag. Send us your panel and our design team will set it.",
    "grounding": "grounded"
   },
   {
    "label": "Candy bar wrap label",
    "size": "2\" x 3\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Chocolate bars, brittle, and boxed confections that have to look appetizing on a crowded shelf.",
    "grounding": "grounded"
   },
   {
    "label": "Candy bag seal",
    "size": "1.5\" circle",
    "format": "Roll, 1\" core",
    "material": "Matte paper",
    "adhesive": "Permanent",
    "typical_use": "Closing the fold on a poly bag of bulk candy and putting your name on it.",
    "grounding": "standard"
   },
   {
    "label": "Sauce and condiment bottle",
    "size": "2\" x 4\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Woozy bottles of hot sauce, plus salsa, dressings, marinades, and jam jars. Film is the usual starting pick when the container gets handled wet.",
    "grounding": "standard"
   },
   {
    "label": "Clear bottled drink label",
    "size": "4\" x 5\"",
    "format": "Roll, 3\" core",
    "material": "Clear film",
    "adhesive": "Permanent",
    "typical_use": "Cold brew, kombucha, and juice bottles where you want the drink itself to show through.",
    "grounding": "standard"
   },
   {
    "label": "Frozen and refrigerated item",
    "size": "2\" x 3\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Freezer grade",
    "typical_use": "Pints, trays, and vacuum packs that go into a freezer or cooler case. Tell us the fill and storage temperature and we will spec the adhesive with you on the quote.",
    "grounding": "standard"
   },
   {
    "label": "Tamper-evident seal dot",
    "size": "0.75\" circle",
    "format": "Roll, 1\" core",
    "material": "Clear film",
    "adhesive": "High tack",
    "typical_use": "Sealing a lid or a takeout container so the customer can see it was not opened.",
    "grounding": "standard"
   },
   {
    "label": "Retail UPC barcode",
    "size": "2.25\" x 1.25\"",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Scannable barcodes for grocery buyers and distributor requirements, plain or branded.",
    "grounding": "grounded"
   },
   {
    "label": "Shipping and case label",
    "size": "4\" x 6\"",
    "format": "Fan-fold",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Outer case and carton labels so product moves cleanly through the warehouse and out on the truck.",
    "grounding": "grounded"
   },
   {
    "label": "Date code and lot label",
    "size": "2\" x 1\"",
    "format": "Roll, 1\" core",
    "material": "Matte paper",
    "adhesive": "Removable",
    "typical_use": "Batch, lot, and use-by dates that need to peel off clean when a container gets reused.",
    "grounding": "standard"
   },
   {
    "label": "Gift tin and metal lid label",
    "size": "3\" x 3\"",
    "format": "Sheet",
    "material": "Metal and foil",
    "adhesive": "Permanent",
    "typical_use": "Holiday coffee tins, cocoa tins, and gift sets. We print on metal and tin, which most label shops will not touch.",
    "grounding": "grounded"
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
    "grounding": "grounded"
   },
   {
    "label": "Cocoa, Cider, and Tea Pod Lid",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Cocoa, cider, chai, tea, and other hot cups where the flavor name has to read clearly at arm's length.",
    "grounding": "standard"
   },
   {
    "label": "Variety Pack Lid Set",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Several flavors printed in one order so every cup in a variety box gets its own lid.",
    "grounding": "standard"
   },
   {
    "label": "Private Label and Co-Pack Lid",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Roasters and co-packers filling for other brands, one lid spec per customer on the same line.",
    "grounding": "standard"
   },
   {
    "label": "Seasonal and Limited Edition Lid",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Holiday and short-run flavors that need a fresh lid without touching your core program.",
    "grounding": "standard"
   },
   {
    "label": "Die-Cut Lids, Stacked",
    "size": "2\" circle",
    "format": "Sheet",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Pre-cut lids delivered flat for hand sealing and small semi-automatic sealers instead of a roll-fed line.",
    "grounding": "standard"
   },
   {
    "label": "Wide-Mouth Pod Lid",
    "size": "2.25\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Larger cup and bowl-style formats that need a wider seal area than a standard pod.",
    "grounding": "standard"
   },
   {
    "label": "Small-Format Capsule Lid",
    "size": "1.5\" circle",
    "format": "Roll, 3\" core",
    "material": "Metallic foil",
    "adhesive": "Heat seal, no adhesive",
    "typical_use": "Espresso-size capsules and other small single-serve cups. Send us the cup you fill and we will match the lid to it.",
    "grounding": "standard"
   },
   {
    "label": "Pod Carton Front Label",
    "size": "3\" x 5\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "The retail box that holds the pods. This is a standard label, so no minimum applies.",
    "grounding": "standard"
   },
   {
    "label": "Case and Shipper Label",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Outer cases of pods heading to a distributor or a retail DC, barcode included. No minimum.",
    "grounding": "standard"
   },
   {
    "label": "Retail Barcode Label",
    "size": "2.25\" x 1.25\"",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "UPC and lot coding applied to pod cartons so they scan cleanly at the register. No minimum.",
    "grounding": "standard"
   },
   {
    "label": "Lot and Date Dot",
    "size": "1\" circle",
    "format": "Roll, 1\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Roast date, lot, and best-by coding added to pod cartons after packing. No minimum.",
    "grounding": "standard"
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
    "grounding": "standard"
   },
   {
    "label": "4 x 6 Shipping Label, Direct Thermal",
    "size": "4\" x 6\"",
    "format": "Roll, 1\" core",
    "material": "Direct thermal paper",
    "adhesive": "Permanent",
    "typical_use": "Ecommerce order fulfillment on a desktop printer, with no ribbon to load.",
    "grounding": "standard"
   },
   {
    "label": "4 x 6 Fan-Fold Shipping Label",
    "size": "4\" x 6\"",
    "format": "Fan-fold",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Busy pick and pack stations, where stopping to change a roll slows the line.",
    "grounding": "standard"
   },
   {
    "label": "4 x 6.5 Shipping Label with Tear-Off Stub",
    "size": "4\" x 6.5\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "A ship label with a detachable stub for a packing slip or a file copy. Tell us where you want the perforation.",
    "grounding": "standard"
   },
   {
    "label": "4 x 4 Carton Label",
    "size": "4\" x 4\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Case contents, item counts, and UPC or GS1 format barcodes on outbound cartons.",
    "grounding": "standard"
   },
   {
    "label": "4 x 6 Pallet Placard, Film",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "High tack",
    "typical_use": "Pallet and skid identification on rough corrugated, plus outdoor staging and humid transit.",
    "grounding": "standard"
   },
   {
    "label": "4 x 6 Freezer Grade Shipping Label",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Freezer grade",
    "typical_use": "Cold storage and frozen food cases, where a standard adhesive lets go at the corner.",
    "grounding": "standard"
   },
   {
    "label": "3 x 5 Handling and Warning Label",
    "size": "3\" x 5\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Fragile, This Side Up, and other handling instructions applied at the pack station.",
    "grounding": "standard"
   },
   {
    "label": "2.25 x 1.25 Small Carton Barcode",
    "size": "2.25\" x 1.25\"",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Inner packs, parts bins, and totes that only need a barcode and a part number.",
    "grounding": "standard"
   },
   {
    "label": "4 x 6 Branded Shipping Label",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Your logo in full color, with a blank zone left open for the carrier data.",
    "grounding": "standard"
   },
   {
    "label": "3 x 2 Removable Tote Label",
    "size": "3\" x 2\"",
    "format": "Roll, 1\" core",
    "material": "Matte paper",
    "adhesive": "Removable",
    "typical_use": "Routing and staging notes on returnable totes, so the tote can be relabeled next trip.",
    "grounding": "standard"
   },
   {
    "label": "1 x 2.625 Return Address Label",
    "size": "1\" x 2.625\"",
    "format": "Sheet",
    "material": "Matte paper",
    "adhesive": "Permanent",
    "typical_use": "Return address and mailer labels, 30 up on a letter sheet.",
    "grounding": "standard"
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
    "grounding": "standard"
   },
   {
    "label": "Case and Pallet Barcode",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Cases and pallets headed into a distributor or a retail distribution center. Printed with your data, or blank for a print and apply line to fill in.",
    "grounding": "standard"
   },
   {
    "label": "Branded Shipping and Barcode",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "One label that carries the scan data and your logo, so the box still looks like your brand when it lands.",
    "grounding": "standard"
   },
   {
    "label": "Desktop Thermal Barcode",
    "size": "2.25\" x 1.25\"",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "The common small format for desktop label printers at a pack station or a back counter.",
    "grounding": "standard"
   },
   {
    "label": "Small Item Barcode",
    "size": "1\" x 2.625\"",
    "format": "Sheet",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Small parts, boxed goods, and anything where a full case label will not fit. The standard 30 up sheet size.",
    "grounding": "standard"
   },
   {
    "label": "Carton ID Barcode",
    "size": "4\" x 2\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Part number, lot, or SKU on a shipper carton, with room for a barcode and a line or two of text.",
    "grounding": "standard"
   },
   {
    "label": "Warehouse Rack and Location",
    "size": "3\" x 1\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "High tack",
    "typical_use": "Aisle, bay, and level markers on steel racking, where a standard adhesive tends to lift over time.",
    "grounding": "standard"
   },
   {
    "label": "Bin and Shelf Label",
    "size": "3\" x 5\"",
    "format": "Sheet",
    "material": "White film",
    "adhesive": "Removable",
    "typical_use": "Bin fronts and shelf edges that get relabeled when the slotting changes.",
    "grounding": "standard"
   },
   {
    "label": "Cycle Count and Audit",
    "size": "2\" x 4\"",
    "format": "Roll, 3\" core",
    "material": "Matte paper",
    "adhesive": "Removable",
    "typical_use": "Counted, staged, or on hold tags that come off clean when the count is closed.",
    "grounding": "standard"
   },
   {
    "label": "Freezer and Cold Storage",
    "size": "4\" x 2\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Freezer grade",
    "typical_use": "Inventory going straight into cold storage, where the label has to stick on a cold, damp surface.",
    "grounding": "standard"
   },
   {
    "label": "Pallet License Plate",
    "size": "4\" x 6.5\"",
    "format": "Fan-fold",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "The pallet level barcode that ties a full load to one scan. Fan-fold stacks feed a printer without a rewind.",
    "grounding": "standard"
   },
   {
    "label": "Durable Asset Tag",
    "size": "2\" x 1\"",
    "format": "Sheet",
    "material": "Metal or foil",
    "adhesive": "Permanent",
    "typical_use": "Equipment, tooling, and fixed assets that need to stay readable for years. Metal and foil are part of what we print.",
    "grounding": "grounded"
   },
   {
    "label": "Inventory Status Dot",
    "size": "0.75\" circle",
    "format": "Roll, 1\" core",
    "material": "Matte paper",
    "adhesive": "Removable",
    "typical_use": "Color coded dots for received, counted, quarantined, or first in first out rotation.",
    "grounding": "standard"
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
    "grounding": "standard"
   },
   {
    "label": "Color dot, 1 inch",
    "size": "1\" circle",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "The everyday color-code dot for totes, folders, and cartons.",
    "grounding": "standard"
   },
   {
    "label": "Color dot, 2 inch",
    "size": "2\" circle",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Larger cartons and pallets you want to read from across the aisle.",
    "grounding": "standard"
   },
   {
    "label": "Removable status dot",
    "size": "1\" circle",
    "format": "Sheet",
    "material": "Matte paper",
    "adhesive": "Removable",
    "typical_use": "Hold, sold, and inspection marks applied by hand at a counting station.",
    "grounding": "standard"
   },
   {
    "label": "Day of the week label",
    "size": "1\" x 1\"",
    "format": "Roll, 1\" core",
    "material": "Matte paper",
    "adhesive": "Removable",
    "typical_use": "Prep day and rotation marking on food containers and pans.",
    "grounding": "standard"
   },
   {
    "label": "Month and year label",
    "size": "1.5\" circle",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Date received and use-by marking on cases, drums, and pails.",
    "grounding": "standard"
   },
   {
    "label": "Numbered inventory tag",
    "size": "1\" x 2.625\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Sequential numbers and letters for count sheets and audits.",
    "grounding": "standard"
   },
   {
    "label": "Barcoded bin label",
    "size": "2\" x 4\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Bin and shelf identification with a barcode along a pick path.",
    "grounding": "standard"
   },
   {
    "label": "Barcoded carton label",
    "size": "4\" x 6\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Carton and pallet identification through receiving and put away.",
    "grounding": "standard"
   },
   {
    "label": "Fan-fold inventory label",
    "size": "4\" x 6\"",
    "format": "Fan-fold",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "High volume runs for teams who would rather stack labels than load rolls.",
    "grounding": "standard"
   },
   {
    "label": "Rack and location marker",
    "size": "3\" x 5\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "High tack",
    "typical_use": "Aisle, rack, and shelf markers specified with a high tack adhesive.",
    "grounding": "standard"
   },
   {
    "label": "Freezer stock label",
    "size": "2.25\" x 1.25\"",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Freezer grade",
    "typical_use": "Cold room and freezer inventory, specified with a freezer grade adhesive.",
    "grounding": "standard"
   },
   {
    "label": "Foil asset tag",
    "size": "2\" x 1\"",
    "format": "Roll, 1\" core",
    "material": "Metallic foil",
    "adhesive": "Permanent",
    "typical_use": "Equipment tags for tools, machines, and IT gear, printed on foil stock.",
    "grounding": "grounded"
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
    "grounding": "grounded"
   },
   {
    "label": "Pressure and temperature warning",
    "size": "3\" x 4\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Max PSI and max temperature limits on sight glasses, tanks, and vessels, printed big enough to read at arm's length.",
    "grounding": "grounded"
   },
   {
    "label": "Wiring and compliance instruction panel",
    "size": "4\" x 6\"",
    "format": "Sheet",
    "material": "Matte paper",
    "adhesive": "Permanent",
    "typical_use": "Dense Class 2 wiring rules, module limits, and operating conditions that must accompany the product. Matte keeps small type easy to read under shop lighting.",
    "grounding": "grounded"
   },
   {
    "label": "Metal equipment rating plate",
    "size": "5\" x 7\"",
    "format": "Sheet",
    "material": "Metal",
    "adhesive": "Permanent",
    "typical_use": "A durable metal plate for model, serial, and rating data on machinery that lives outdoors or in wash-down areas. This is the metal work most printers will not touch.",
    "grounding": "grounded"
   },
   {
    "label": "Small caution strip",
    "size": "1\" x 2.625\"",
    "format": "Roll, 1\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Permanent",
    "typical_use": "Short caution wording on small components, brackets, and enclosures where there is not much flat area to work with.",
    "grounding": "standard"
   },
   {
    "label": "Danger header warning label",
    "size": "2\" x 4\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "The classic banner header with hazard wording below it, sized for guards, covers, and access doors.",
    "grounding": "standard"
   },
   {
    "label": "Arc flash and electrical hazard label",
    "size": "4\" x 6.5\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Panel and disconnect warnings that need space for boundary, voltage, and PPE details.",
    "grounding": "standard"
   },
   {
    "label": "Do not operate lockout label",
    "size": "2\" x 3\"",
    "format": "Sheet",
    "material": "Semi-gloss paper",
    "adhesive": "Removable",
    "typical_use": "Applied during service and taken back off cleanly when the machine is released. Removable so it does not leave residue on painted panels.",
    "grounding": "standard"
   },
   {
    "label": "Hot surface warning circle",
    "size": "2\" circle",
    "format": "Roll, 1\" core",
    "material": "White film",
    "adhesive": "High tack",
    "typical_use": "Round hot surface or pinch point warnings on curved housings, motors, and piping where a square label will not sit flat.",
    "grounding": "standard"
   },
   {
    "label": "Gauge and glass seal",
    "size": "1\" circle",
    "format": "Roll, 1\" core",
    "material": "Clear film",
    "adhesive": "Permanent",
    "typical_use": "Small hazard or inspection seals on gauges and glass, printed on clear so the surface underneath still shows.",
    "grounding": "standard"
   },
   {
    "label": "Inspection and service label, thermal printed",
    "size": "2.25\" x 1.25\"",
    "format": "Roll, 1\" core",
    "material": "Matte paper",
    "adhesive": "Permanent",
    "typical_use": "Blank or pre-printed stock you run on your own thermal transfer printer to date-stamp inspections and service checks in house.",
    "grounding": "standard"
   },
   {
    "label": "Cold storage handling warning",
    "size": "4\" x 6\"",
    "format": "Fan-fold",
    "material": "Semi-gloss paper",
    "adhesive": "Freezer grade",
    "typical_use": "Handling and hazard wording on cartons and totes that go straight into a freezer, with an adhesive that holds at cold temperatures.",
    "grounding": "standard"
   },
   {
    "label": "Foil equipment nameplate",
    "size": "1\" x 3\"",
    "format": "Sheet",
    "material": "Metallic foil",
    "adhesive": "Permanent",
    "typical_use": "A small foil nameplate or rating strip when you want the finished look of metal on a compact footprint.",
    "grounding": "standard"
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
    "grounding": "standard"
   },
   {
    "label": "Compliance and rating panel",
    "size": "4\" x 6\"",
    "format": "Sheet",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "The dense panel that ships with the product, wiring class, ratings, capacities, part numbers, and operating limits on one label.",
    "grounding": "standard"
   },
   {
    "label": "Metal nameplate",
    "size": "2\" x 4\"",
    "format": "Sheet",
    "material": "Metal",
    "adhesive": "Permanent",
    "typical_use": "Durable nameplate for machinery and industrial equipment, for jobs where a printed film label will not survive. Metal is one of the stocks we print.",
    "grounding": "grounded"
   },
   {
    "label": "Metallic foil serial plate",
    "size": "1\" x 2.625\"",
    "format": "Sheet",
    "material": "Metallic foil",
    "adhesive": "Permanent",
    "typical_use": "Small foil plate for a serial or model number where you want a brushed metal look on a smaller part or housing. Foil is one of the stocks we print.",
    "grounding": "grounded"
   },
   {
    "label": "Serialized barcode asset tag",
    "size": "2.25\" x 1.25\"",
    "format": "Roll, 1\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Small asset tag carrying a number and a scannable barcode. Ask us about sequential numbering across your range.",
    "grounding": "standard"
   },
   {
    "label": "Equipment ID tag with QR",
    "size": "2\" x 3\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "High tack",
    "typical_use": "Larger asset ID with a QR code pointing to the manual or service record. High tack is the adhesive to ask about for powder-coated and textured housings.",
    "grounding": "standard"
   },
   {
    "label": "Tamper-evident security seal",
    "size": "2\" x 1\"",
    "format": "Roll, 1\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Seal across an enclosure lid, meter cover, or service panel so it is obvious if someone opened it. Ask us about tamper-evident constructions for your surface.",
    "grounding": "standard"
   },
   {
    "label": "Calibration and inspection dot",
    "size": "1\" circle",
    "format": "Roll, 1\" core",
    "material": "White film",
    "adhesive": "Permanent",
    "typical_use": "Small dot for a calibration, inspection, or next-service date on gauges, tools, and test equipment. Printed with the date or left open to write on.",
    "grounding": "standard"
   },
   {
    "label": "Clear film spec overlay",
    "size": "3\" x 2\"",
    "format": "Sheet",
    "material": "Clear film",
    "adhesive": "Permanent",
    "typical_use": "Legend or spec text that reads as though it were printed onto the panel itself, for painted and finished enclosures.",
    "grounding": "standard"
   },
   {
    "label": "Cold-storage asset tag",
    "size": "3\" x 1\"",
    "format": "Roll, 3\" core",
    "material": "White film",
    "adhesive": "Freezer grade",
    "typical_use": "Asset and rack tags applied to cold or frozen surfaces in coolers, freezers, and refrigerated trailers.",
    "grounding": "standard"
   },
   {
    "label": "Removable inventory tag",
    "size": "4\" x 2\"",
    "format": "Roll, 3\" core",
    "material": "Semi-gloss paper",
    "adhesive": "Removable",
    "typical_use": "Cycle-count and temporary inventory tags meant to come off when the count is closed out.",
    "grounding": "standard"
   }
  ],
  "art": "images/labels-stock/opaque-and-foil-backs-tile.webp",
  "seo": "Asset, Serial & Compliance Labels"
 }
];
