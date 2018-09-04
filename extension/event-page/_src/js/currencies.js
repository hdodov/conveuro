// Currencies are ordered by their daily share value, if there is one.
// Source: https://en.wikipedia.org/wiki/Template:Most_traded_currencies

var CURRENCIES = {
  "AED": { // https://en.wikipedia.org/wiki/United_Arab_Emirates_dirham
    "name": "United Arab Emirates Dirham",
    "share": null,
    "symbols": ["د.إ"],
    "format": "%dد.إ %s",
    "words": [
      "arab",
      "emirates",
      "dirham"
    ]
  },
  "AFN": { // https://en.wikipedia.org/wiki/Afghan_afghani
    "name": "Afghan Afghani",
    "share": null,
    "symbols": ["Afs"],
    "format": "%d Afs",
    "words": [
      "afghan",
      "afghani"
    ]
  },
  "ALL": { // https://en.wikipedia.org/wiki/Albanian_lek
    "name": "Albanian Lek",
    "share": null,
    "symbols": ["L"],
    "format": "%dL",
    "words": [
      "albanian",
      "lek"
    ]
  },
  "AMD": { // https://en.wikipedia.org/wiki/Armenian_dram
    "name": "Armenian Dram",
    "share": null,
    "symbols": ["֏"],
    "format": "%d֏",
    "words": [
      "armenian",
      "dram",
      "luma"
    ]
  },
  "ANG": { // https://en.wikipedia.org/wiki/Netherlands_Antillean_guilder
    "name": "Netherlands Antillean Guilder",
    "share": null,
    "symbols": ["ƒ", "NAƒ"],
    "format": "ƒ%d %s",
    "words": [
      "netherlands",
      "antillean",
      "guilder"
    ]
  },
  "ANG": { // https://en.wikipedia.org/wiki/Angolan_kwanza
    "name": "Angolan Kwanza",
    "share": null,
    "symbols": ["Kz"],
    "format": "%dKz",
    "words": [
      "angolan",
      "kwanza"
    ]
  },
  "ARS": { // https://en.wikipedia.org/wiki/Argentine_peso
    "name": "Argentine Peso",
    "share": null,
    "symbols": ["$"],
    "format": "$%d %s",
    "words": [
      "argentine",
      "peso"
    ]
  },
  "AUD": { // https://en.wikipedia.org/wiki/Australian_dollar
    "name": "Australian Dollar",
    "share": 6.9,
    "symbols": ["$", "A$"],
    "format": "A$%d %s",
    "words": [
      "australian",
      "dollar"
    ]
  },
  "AWG": { // https://en.wikipedia.org/wiki/Aruban_florin
    "name": "Aruban Florin",
    "share": null,
    "symbols": ["Afl."],
    "format": "Afl. %d",
    "words": [
      "aruban",
      "florin",
      "guilder"
    ]
  },
  "AZN": { // https://en.wikipedia.org/wiki/Azerbaijani_manat
    "name": "Azerbaijani Manat",
    "share": null,
    "symbols": ["₼"],
    "format": "₼%d",
    "words": [
      "azerbaijani",
      "manat"
    ]
  },
  "BAM": { // https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina_convertible_mark
    "name": "Bosnia-Herzegovina Convertible Mark",
    "share": null,
    "symbols": ["KM"],
    "format": "KM%d",
    "words": [
      "bosnia",
      "herzegovina",
      "convertible",
      "mark"
    ]
  },
  "BBD": { // https://en.wikipedia.org/wiki/Barbadian_dollar
    "name": "Barbadian Dollar",
    "share": null,
    "symbols": ["Bds$", "$"],
    "format": "Bds$%d",
    "words": [
      "barbadian",
      "dollar"
    ]
  },
  "BDT": { // https://en.wikipedia.org/wiki/Bangladeshi_taka
    "name": "Bangladeshi Taka",
    "share": null,
    "symbols": ["৳"],
    "format": "৳%d",
    "words": [
      "bangladeshi",
      "taka"
    ]
  },
  "BGN": { // https://en.wikipedia.org/wiki/Bulgarian_lev
    "name": "Bulgarian Lev",
    "share": null,
    "symbols": ["lv.", "лв."],
    "format": "%dлв.",
    "words": [
      "bulgarian",
      "lev"
    ]
  },
  "BHD": { // https://en.wikipedia.org/wiki/Bahraini_dinar
    "name": "Bahraini Dinar",
    "share": null,
    "symbols": [".د.ب", "BD"],
    "format": "BD %d",
    "words": [
      "bahraini",
      "dinar"
    ]
  },
  "BIF": { // https://en.wikipedia.org/wiki/Burundian_franc
    "name": "Burundian Franc",
    "share": null,
    "symbols": ["FBu"],
    "format": "FBu %d",
    "words": [
      "burundian",
      "franc"
    ]
  },
  "BMD": { // https://en.wikipedia.org/wiki/Bermudian_dollar
    "name": "Bermudian Dollar",
    "share": null,
    "symbols": ["BD$", "$"],
    "format": "BD$%d",
    "words": [
      "bermudian",
      "bermuda",
      "dollar"
    ]
  },
  "BND": { // https://en.wikipedia.org/wiki/Bermudian_dollar
    "name": "Brunei Dollar",
    "share": null,
    "symbols": ["B$", "$"],
    "format": "B$%d %s",
    "words": [
      "brunei",
      "dollar"
    ]
  },
  "BOB": { // https://en.wikipedia.org/wiki/Bolivian_boliviano
    "name": "Bolivian Boliviano",
    "share": null,
    "symbols": ["Bs"],
    "format": "Bs%d",
    "words": [
      "bolivian",
      "boliviano"
    ]
  },
  "BRL": { // https://en.wikipedia.org/wiki/Brazilian_real
    "name": "Brazilian Real",
    "share": 1,
    "symbols": ["R$", "$"],
    "format": "R$%d %s",
    "words": [
      "brazilian",
      "real",
      "reais"
    ]
  },
  "BSD": { // https://en.wikipedia.org/wiki/Bahamian_dollar
    "name": "Bahamian Dollar",
    "share": null,
    "symbols": ["B$", "$"],
    "format": "B$%d %s",
    "words": [
      "bahamian",
      "dollar"
    ]
  },
  "BTC": { // https://en.wikipedia.org/wiki/Bitcoin
    "name": "Bitcoin",
    "share": null,
    "symbols": ["₿"],
    "format": "₿%d",
    "words": [
      "bitcoin"
    ]
  },
  "BTN": { // https://en.wikipedia.org/wiki/Bhutanese_ngultrum
    "name": "Bhutanese Ngultrum",
    "share": null,
    "symbols": ["Nu."],
    "format": "%d Nu.",
    "words": [
      "bhutanese",
      "ngultrum"
    ]
  },
  "BWP": { // https://en.wikipedia.org/wiki/Botswana_pula
    "name": "Botswanan Pula",
    "share": null,
    "symbols": ["P"],
    "format": "P%d",
    "words": [
      "botswana",
      "pula"
    ]
  },
  "BYN": { // https://en.wikipedia.org/wiki/Belarusian_ruble
    "name": "New Belarusian Ruble",
    "share": null,
    "symbols": ["Br"],
    "format": "Br%d %s",
    "words": [
      "belarusian",
      "ruble"
    ]
  },
  "BYR": { // https://en.wikipedia.org/wiki/Belarusian_ruble
    "name": "Belarusian Ruble",
    "share": null,
    "symbols": ["Br"],
    "format": "Br%d %s",
    "words": [
      "belarusian",
      "ruble"
    ]
  },
  "BZD": { // https://en.wikipedia.org/wiki/Belize_dollar
    "name": "Belize Dollar",
    "share": null,
    "symbols": ["BZ$"],
    "format": "BZ$%d %s",
    "words": [
      "belize",
      "dollar"
    ]
  },
  "CAD": { // https://en.wikipedia.org/wiki/Canadian_dollar
    "name": "Canadian Dollar",
    "share": 5.1,
    "symbols": ["C$", "Can$", "$"],
    "format": "C$%d %s",
    "words": [
      "canadian",
      "dollar"
    ]
  },
  "CDF": { // https://en.wikipedia.org/wiki/Congolese_franc
    "name": "Congolese Franc",
    "share": null,
    "symbols": ["FC"],
    "format": "FC%d",
    "words": [
      "congolese",
      "franc"
    ]
  },
  "CHF": { // https://en.wikipedia.org/wiki/Swiss_franc
    "name": "Swiss Franc",
    "share": 4.8,
    "symbols": ["Fr.", "SFr."],
    "format": "SFr. %d",
    "words": [
      "swiss",
      "franc"
    ]
  },
  "CLF": { // https://en.wikipedia.org/wiki/Unidad_de_Fomento
    "name": "Chilean Unit of Account",
    "share": null,
    "symbols": ["UF"],
    "format": "UF%d",
    "words": [
      "chilean",
      "unidad",
      "fomento"
    ]
  },
  "CLP": { // https://en.wikipedia.org/wiki/Chilean_peso
    "name": "Chilean Peso",
    "share": null,
    "symbols": ["$"],
    "format": "$%d %s",
    "words": [
      "chilean",
      "peso"
    ]
  },
  "CNY": { // https://en.wikipedia.org/wiki/Renminbi
    "name": "Chinese Yuan",
    "share": 4.0,
    "symbols": ["¥", "元", "RMB"],
    "format": "¥%d %s",
    "words": [
      "chinese",
      "yuan",
      "yuán",
      "renminbi",
      "rénmínbì"
    ]
  },
  "COP": { // https://en.wikipedia.org/wiki/Colombian_peso
    "name": "Colombian Peso",
    "share": null,
    "symbols": ["$"],
    "format": "$%d %s",
    "words": [
      "colombian",
      "peso"
    ]
  },
  "CRC": { // https://en.wikipedia.org/wiki/Costa_Rican_col%C3%B3n
    "name": "Costa Rican Colón",
    "share": null,
    "symbols": ["₡"],
    "format": "₡%d %s",
    "words": [
      "costa",
      "rican",
      "colón"
    ]
  },
  "CUC": { // https://en.wikipedia.org/wiki/Cuban_convertible_peso
    "name": "Cuban Convertible Peso",
    "share": null,
    "symbols": ["CUC$", "CUC", "$"],
    "format": "CUC$%d",
    "words": [
      "cuban",
      "peso",
      "dollar",
      "cuc",
      "chavito"
    ]
  },
  "CUP": { // https://en.wikipedia.org/wiki/Cuban_peso
    "name": "Cuban Peso",
    "share": null,
    "symbols": ["₱", "$MN", "$"],
    "format": "₱%d %s",
    "words": [
      "cuban",
      "peso",
      "dollar"
    ]
  },
  "CVE": { // https://en.wikipedia.org/wiki/Cape_Verdean_escudo
    "name": "Cape Verdean Escudo",
    "share": null,
    "symbols": ["$"],
    "format": "$%d %s",
    "words": [
      "cape",
      "verdean",
      "escudo"
    ]
  },
  "CZK": { // https://en.wikipedia.org/wiki/Czech_koruna
    "name": "Czech Koruna",
    "share": null,
    "symbols": ["Kč"],
    "format": "%d Kč",
    "words": [
      "czech",
      "koruna",
      "crown"
    ]
  },
  "DJF": { // https://en.wikipedia.org/wiki/Djiboutian_franc
    "name": "Djiboutian Franc",
    "share": null,
    "symbols": ["Fdj"],
    "format": "%d Fdj",
    "words": [
      "djiboutian",
      "franc"
    ]
  },
  "DKK": { // https://en.wikipedia.org/wiki/Danish_krone
    "name": "Danish Krone",
    "share": null,
    "symbols": ["kr."],
    "format": "%d kr. %s",
    "words": [
      "danish",
      "krone",
      "kroner"
    ]
  },
  "DOP": { // https://en.wikipedia.org/wiki/Dominican_peso
    "name": "Dominican Peso",
    "share": null,
    "symbols": ["RD$"],
    "format": "RD$%d %s",
    "words": [
      "dominican",
      "peso"
    ]
  },
  "DZD": { // https://en.wikipedia.org/wiki/Algerian_dinar
    "name": "Algerian Dinar",
    "share": null,
    "symbols": ["دج", "DA"],
    "format": "%dدج",
    "words": [
      "algerian",
      "dinar"
    ]
  },
  "EGP": { // https://en.wikipedia.org/wiki/Egyptian_pound
    "name": "Egyptian Pound",
    "share": null,
    "symbols": ["E£", "ج.م", "L.E.", "LE"],
    "format": "E£%d",
    "words": [
      "egyptian",
      "pound"
    ]
  },
  "ERN": { // https://en.wikipedia.org/wiki/Eritrean_nakfa
    "name": "Eritrean Nakfa",
    "share": null,
    "symbols": ["Nkf", "ናቕፋ", "ناكفا"],
    "format": "%d Nkf",
    "words": [
      "eritrean",
      "nakfa"
    ]
  },
  "ETB": { // https://en.wikipedia.org/wiki/Ethiopian_birr
    "name": "Ethiopian Birr",
    "share": null,
    "symbols": ["Br", "ብር"],
    "format": "Br%d %s",
    "words": [
      "ethiopian",
      "birr"
    ]
  },
  "EUR": { // https://en.wikipedia.org/wiki/Euro
    "name": "Euro",
    "share": 37.4,
    "symbols": ["€"],
    "format": "€%d",
    "words": [
      "euro"
    ]
  },
  "FJD": { // https://en.wikipedia.org/wiki/Fijian_dollar
    "name": "Fijian Dollar",
    "share": null,
    "symbols": ["FJ$", "FJD", "$"],
    "format": "FJ$%d",
    "words": [
      "fijian",
      "dollar"
    ]
  },
  "FKP": { // https://en.wikipedia.org/wiki/Falkland_Islands_pound
    "name": "Falkland Islands Pound",
    "share": null,
    "symbols": ["FK£", "£"],
    "format": "FK£%d",
    "words": [
      "falkland",
      "pound"
    ]
  },
  "GBP": { // https://en.wikipedia.org/wiki/Pound_sterling
    "name": "British Pound",
    "share": 12.8,
    "symbols": ["£"],
    "format": "£%d %s",
    "words": [
      "british",
      "pound",
      "sterling",
      "quid"
    ]
  },
  "GEL": { // https://en.wikipedia.org/wiki/Georgian_lari
    "name": "Georgian Lari",
    "share": null,
    "symbols": ["₾", "ლ"],
    "format": "₾%d",
    "words": [
      "georgian",
      "lari"
    ]
  },
  "GGP": { // https://en.wikipedia.org/wiki/Guernsey_pound
    "name": "Guernsey Pound",
    "share": null,
    "symbols": ["£"],
    "format": "£%d %s",
    "words": [
      "guernsey",
      "pound"
    ]
  },
  "GHS": { // https://en.wikipedia.org/wiki/Ghanaian_cedi
    "name": "Ghanaian Cedi",
    "share": null,
    "symbols": ["GH₵"],
    "format": "GH₵%d",
    "words": [
      "ghanaian",
      "cedi"
    ]
  },
  "GIP": { // https://en.wikipedia.org/wiki/Gibraltar_pound
    "name": "Gibraltar Pound",
    "share": null,
    "symbols": ["£"],
    "format": "£%d %s",
    "words": [
      "gibraltar",
      "pound"
    ]
  },
  "GMD": { // https://en.wikipedia.org/wiki/Gambian_dalasi
    "name": "Gambian Dalasi",
    "share": null,
    "symbols": ["D"],
    "format": "D%d %s",
    "words": [
      "gambian",
      "dalasi"
    ]
  },
  "GNF": { // https://en.wikipedia.org/wiki/Guinean_franc
    "name": "Guinean Franc",
    "share": null,
    "symbols": ["FG", "Fr", "GFr"],
    "format": "FG%d %s",
    "words": [
      "guinean",
      "franc"
    ]
  },
  "GTQ": { // https://en.wikipedia.org/wiki/Guatemalan_quetzal
    "name": "Guatemalan Quetzal",
    "share": null,
    "symbols": ["Q"],
    "format": "Q%d %s",
    "words": [
      "guatemalan",
      "quetzal"
    ]
  },
  "GYD": { // https://en.wikipedia.org/wiki/Guyanese_dollar
    "name": "Guyanese Dollar",
    "share": null,
    "symbols": ["GY$", "G$", "$"],
    "format": "GY$%d",
    "words": [
      "guyanese",
      "dollar"
    ]
  },
  "HKD": { // https://en.wikipedia.org/wiki/Hong_Kong_dollar
    "name": "Hong Kong Dollar",
    "share": 1.7,
    "symbols": ["HK$", "元", "$"],
    "format": "HK$%d",
    "words": [
      "hong",
      "kong",
      "dollar"
    ]
  },
  "HNL": { // https://en.wikipedia.org/wiki/Honduran_lempira
    "name": "Honduran Lempira",
    "share": null,
    "symbols": ["L"],
    "format": "L%d %s",
    "words": [
      "honduran",
      "lempira"
    ]
  },
  "HRK": { // https://en.wikipedia.org/wiki/Croatian_kuna
    "name": "Croatian Kuna",
    "share": null,
    "symbols": ["kn"],
    "format": "%d kn",
    "words": [
      "croatian",
      "kuna"
    ]
  },
  "HTG": { // https://en.wikipedia.org/wiki/Haitian_gourde
    "name": "Haitian Gourde",
    "share": null,
    "symbols": ["G"],
    "format": "G%d %s",
    "words": [
      "haitian",
      "gourde",
      "goud"
    ]
  },
  "HUF": { // https://en.wikipedia.org/wiki/Hungarian_forint
    "name": "Hungarian Forint",
    "share": null,
    "symbols": ["Ft"],
    "format": "%d Ft",
    "words": [
      "hungarian",
      "forint"
    ]
  },
  "IDR": { // https://en.wikipedia.org/wiki/Indonesian_rupiah
    "name": "Indonesian Rupiah",
    "share": null,
    "symbols": ["Rp"],
    "format": "Rp %d",
    "words": [
      "indonesian",
      "rupiah"
    ]
  },
  "ILS": { // https://en.wikipedia.org/wiki/Israeli_new_shekel
    "name": "Israeli New Shekel",
    "share": null,
    "symbols": ["₪"],
    "format": "₪%d",
    "words": [
      "israeli",
      "shekel",
      "shēqel"
    ]
  },
  "IMP": { // https://en.wikipedia.org/wiki/Manx_pound
    "name": "Manx Pound",
    "share": null,
    "symbols": ["£"],
    "format": "£%d %s",
    "words": [
      "manx",
      "pound"
    ]
  },
  "INR": { // https://en.wikipedia.org/wiki/Indian_rupee
    "name": "Indian Rupee",
    "share": 1.1,
    "symbols": ["₹"],
    "format": "₹%d",
    "words": [
      "indian",
      "rupee",
      "rupiya"
    ]
  },
  "IQD": { // https://en.wikipedia.org/wiki/Iraqi_dinar
    "name": "Iraqi Dinar",
    "share": null,
    "symbols": ["د.ع"],
    "format": "%dد.ع",
    "words": [
      "iraqi",
      "dinar"
    ]
  },
  "IRR": { // https://en.wikipedia.org/wiki/Iranian_rial
    "name": "Iranian Rial",
    "share": null,
    "symbols": ["﷼"],
    "format": "%d﷼",
    "words": [
      "iranian",
      "rial"
    ]
  },
  "ISK": { // https://en.wikipedia.org/wiki/Icelandic_kr%C3%B3na
    "name": "Icelandic Króna",
    "share": null,
    "symbols": ["kr", "Íkr"],
    "format": "%d Íkr",
    "words": [
      "icelandic",
      "krona",
      "króna",
      "crown"
    ]
  },
  "JEP": { // https://en.wikipedia.org/wiki/Jersey_pound
    "name": "Jersey Pound",
    "share": null,
    "symbols": ["£"],
    "format": "£%d %s",
    "words": [
      "jersey",
      "pound"
    ]
  },
  "JMD": { // https://en.wikipedia.org/wiki/Jamaican_dollar
    "name": "Jamaican Dollar",
    "share": null,
    "symbols": ["J$", "$"],
    "format": "J$%d %s",
    "words": [
      "jamaican",
      "dollar"
    ]
  },
  "JOD": { // https://en.wikipedia.org/wiki/Jordanian_dinar
    "name": "Jordanian Dinar",
    "share": null,
    "symbols": ["JD"],
    "format": "JD$%d",
    "words": [
      "jordanian",
      "dinar"
    ]
  },
  "JPY": { // https://en.wikipedia.org/wiki/Japanese_yen
    "name": "Japanese Yen",
    "share": 21.6,
    "symbols": ["¥", "円", "圓"],
    "format": "¥%d %s",
    "words": [
      "japanese",
      "yen"
    ]
  },
  "KES": { // https://en.wikipedia.org/wiki/Kenyan_shilling
    "name": "Kenyan Shilling",
    "share": null,
    "symbols": ["KSh", "Ksh"],
    "format": "%d KSh",
    "words": [
      "kenyan",
      "shilling"
    ]
  },
  "KGS": { // https://en.wikipedia.org/wiki/Kyrgyzstani_som
    "name": "Kyrgystani Som",
    "share": null,
    "symbols": [], // currently not in Unicode
    "format": "%d som",
    "words": [
      "kyrgystani",
      "som"
    ]
  },
  "KHR": { // https://en.wikipedia.org/wiki/Cambodian_riel
    "name": "Cambodian Riel",
    "share": null,
    "symbols": ["៛"],
    "format": "៛%d",
    "words": [
      "cambodian",
      "riel"
    ]
  },
  "KMF": { // https://en.wikipedia.org/wiki/Comorian_franc
    "name": "Comorian Franc",
    "share": null,
    "symbols": ["CF"],
    "format": "CF%d %s",
    "words": [
      "comorian",
      "franc"
    ]
  },
  "KPW": { // https://en.wikipedia.org/wiki/North_Korean_won
    "name": "North Korean Won",
    "share": null,
    "symbols": ["₩"],
    "format": "₩%d %s",
    "words": [
      "korea",
      "won"
    ]
  },
  "KRW": { // https://en.wikipedia.org/wiki/South_Korean_won
    "name": "South Korean Won",
    "share": 1.7,
    "symbols": ["₩"],
    "format": "₩%d %s",
    "words": [
      "korea",
      "won"
    ]
  },
  "KWD": { // https://en.wikipedia.org/wiki/Kuwaiti_dinar
    "name": "Kuwaiti Dinar",
    "share": null,
    "symbols": ["د.ك", "KD"],
    "format": "%dد.ك",
    "words": [
      "kuwaiti",
      "dinar"
    ]
  },
  "KYD": { // https://en.wikipedia.org/wiki/Cayman_Islands_dollar
    "name": "Cayman Islands Dollar",
    "share": null,
    "symbols": ["CI$", "$"],
    "format": "CI$%d %s",
    "words": [
      "cayman",
      "dollar"
    ]
  },
  "KZT": { // https://en.wikipedia.org/wiki/Kazakhstani_tenge
    "name": "Kazakhstani Tenge",
    "share": null,
    "symbols": ["₸"],
    "format": "₸%d",
    "words": [
      "kazakhstani",
      "tenge"
    ]
  },
  "LAK": { // https://en.wikipedia.org/wiki/Lao_kip
    "name": "Lao Kip",
    "share": null,
    "symbols": ["₭", "₭N"],
    "format": "₭%d",
    "words": [
      "laotian",
      "kip"
    ]
  },
  "LBP": { // https://en.wikipedia.org/wiki/Lebanese_pound
    "name": "Lebanese Pound",
    "share": null,
    "symbols": ["ل.ل.‎", "LL"],
    "format": "%dل.ل.‎",
    "words": [
      "lebanese",
      "pound"
    ]
  },
  "LKR": { // https://en.wikipedia.org/wiki/Sri_Lankan_rupee
    "name": "Sri Lankan Rupee",
    "share": null,
    "symbols": ["රු", "ரூ", "Rs"],
    "format": "රු%d",
    "words": [
      "sri",
      "lanka",
      "rupee"
    ]
  },
  "LRD": { // https://en.wikipedia.org/wiki/Liberian_dollar
    "name": "Liberian Dollar",
    "share": null,
    "symbols": ["L$", "LD$", "$"],
    "format": "L$%d %s",
    "words": [
      "liberian",
      "dollar"
    ]
  },
  "LSL": { // https://en.wikipedia.org/wiki/Lesotho_loti
    "name": "Lesotho Loti",
    "share": null,
    "symbols": ["M", "L"],
    "format": "M%d %s",
    "words": [
      "lesotho",
      "loti",
      "maloti"
    ]
  },
  "LTL": { // https://en.wikipedia.org/wiki/Lithuanian_litas
    "name": "Lithuanian Litas",
    "share": null,
    "symbols": ["Lt"],
    "format": "%d Lt",
    "words": [
      "lithuanian",
      "litas"
    ]
  },
  "LVL": { // https://en.wikipedia.org/wiki/Latvian_lats
    "name": "Latvian Lats",
    "share": null,
    "symbols": ["Ls"],
    "format": "Ls %d %s",
    "words": [
      "latvian",
      "lats",
      "lati"
    ]
  },
  "LYD": { // https://en.wikipedia.org/wiki/Libyan_dinar
    "name": "Libyan Dinar",
    "share": null,
    "symbols": ["ل.د", "LD"],
    "format": "%dل.د",
    "words": [
      "libyan",
      "dinar"
    ]
  },
  "MAD": { // https://en.wikipedia.org/wiki/Moroccan_dirham
    "name": "Moroccan Dirham",
    "share": null,
    "symbols": ["DH"],
    "format": "DH%d %s",
    "words": [
      "moroccan",
      "dirham"
    ]
  },
  "MDL": { // https://en.wikipedia.org/wiki/Moldovan_leu
    "name": "Moldovan Leu",
    "share": null,
    "symbols": ["leu", "lei"],
    "format": "%d lei %s",
    "words": [
      "moldovan",
      "leu",
      "lei"
    ]
  },
  "MGA": { // https://en.wikipedia.org/wiki/Malagasy_ariary
    "name": "Malagasy Ariary",
    "share": null,
    "symbols": ["Ar"],
    "format": "Ar%d",
    "words": [
      "malagasy",
      "ariary"
    ]
  },
  "MKD": { // https://en.wikipedia.org/wiki/Macedonian_denar
    "name": "Macedonian Denar",
    "share": null,
    "symbols": ["den", "ден"],
    "format": "%d den",
    "words": [
      "macedonian",
      "denar"
    ]
  },
  "MMK": { // https://en.wikipedia.org/wiki/Burmese_kyat
    "name": "Myanma (Burmese) Kyat",
    "share": null,
    "symbols": ["K", "Ks"],
    "format": "K%d %s",
    "words": [
      "myanma",
      "burmese",
      "kyat"
    ]
  },
  "MNT": { // https://en.wikipedia.org/wiki/Mongolian_t%C3%B6gr%C3%B6g
    "name": "Mongolian Tugrik",
    "share": null,
    "symbols": ["₮"],
    "format": "₮%d",
    "words": [
      "mongolian",
      "tugrik",
      "tögrög"
    ]
  },
  "MOP": { // https://en.wikipedia.org/wiki/Macanese_pataca
    "name": "Macanese Pataca",
    "share": null,
    "symbols": ["MOP$"],
    "format": "MOP$%d",
    "words": [
      "macanese",
      "macau",
      "pataca"
    ]
  },
  "MRO": { // https://en.wikipedia.org/wiki/Mauritanian_ouguiya
    "name": "Mauritanian Ouguiya",
    "share": null,
    "symbols": ["UM"],
    "format": "UM%d",
    "words": [
      "mauritanian",
      "ouguiya"
    ]
  },
  "MUR": { // https://en.wikipedia.org/wiki/Mauritian_rupee
    "name": "Mauritian Rupee",
    "share": null,
    "symbols": ["₨"],
    "format": "₨%d %s",
    "words": [
      "mauritian",
      "rupee"
    ]
  },
  "MVR": { // https://en.wikipedia.org/wiki/Maldivian_rufiyaa
    "name": "Maldivian Rufiyaa",
    "share": null,
    "symbols": ["Rf.", "MRf", ".ރ"],
    "format": "Rf. %d",
    "words": [
      "maldivian",
      "rufiyaa"
    ]
  },
  "MWK": { // https://en.wikipedia.org/wiki/Malawian_kwacha
    "name": "Malawian Kwacha",
    "share": null,
    "symbols": ["K"],
    "format": "K%d %s",
    "words": [
      "malawian",
      "malawi",
      "kwacha"
    ]
  },
  "MXN": { // https://en.wikipedia.org/wiki/Mexican_peso
    "name": "Mexican Peso",
    "share": 1.9,
    "symbols": ["Mex$", "$"],
    "format": "Mex$%d",
    "words": [
      "mexican",
      "peso"
    ]
  },
  "MYR": { // https://en.wikipedia.org/wiki/Malaysian_ringgit
    "name": "Malaysian Ringgit",
    "share": null,
    "symbols": ["RM"],
    "format": "RM%d",
    "words": [
      "malaysian",
      "ringgit"
    ]
  },
  "MZN": { // https://en.wikipedia.org/wiki/Mozambican_metical
    "name": "Mozambican Metical",
    "share": null,
    "symbols": ["MT"],
    "format": "MT%d",
    "words": [
      "mozambican",
      "metical"
    ]
  },
  "NAD": { // https://en.wikipedia.org/wiki/Namibian_dollar
    "name": "Namibian Dollar",
    "share": null,
    "symbols": ["N$", "$"],
    "format": "N$%d %s",
    "words": [
      "namibian",
      "dollar"
    ]
  },
  "NGN": { // https://en.wikipedia.org/wiki/Nigerian_naira
    "name": "Nigerian Naira",
    "share": null,
    "symbols": ["₦"],
    "format": "₦%d",
    "words": [
      "nigerian",
      "naira"
    ]
  },
  "NIO": { // https://en.wikipedia.org/wiki/Nicaraguan_c%C3%B3rdoba
    "name": "Nicaraguan Córdoba",
    "share": null,
    "symbols": ["C$"],
    "format": "C$%d %s",
    "words": [
      "nicaraguan",
      "cordoba",
      "córdoba"
    ]
  },
  "NOK": { // https://en.wikipedia.org/wiki/Norwegian_krone
    "name": "Norwegian Krone",
    "share": 1.7,
    "symbols": ["kr"],
    "format": "%d kr %s",
    "words": [
      "norwegian",
      "krone",
      "crown"
    ]
  },
  "NPR": { // https://en.wikipedia.org/wiki/Nepalese_rupee
    "name": "Nepalese Rupee",
    "share": null,
    "symbols": ["रु"],
    "format": "रु%d",
    "words": [
      "nepalese",
      "rupee"
    ]
  },
  "NZD": { // https://en.wikipedia.org/wiki/New_Zealand_dollar
    "name": "New Zealand Dollar",
    "share": 2.1,
    "symbols": ["NZ$", "$"],
    "format": "NZ$%d",
    "words": [
      "zealand",
      "dollar",
      "kiwi"
    ]
  },
  "OMR": { // https://en.wikipedia.org/wiki/Omani_rial
    "name": "Omani Rial",
    "share": null,
    "symbols": ["﷼"],
    "format": "%d﷼",
    "words": [
      "omani",
      "rial"
    ]
  },
  "PAB": { // https://en.wikipedia.org/wiki/Panamanian_balboa
    "name": "Panamanian Balboa",
    "share": null,
    "symbols": ["B/."],
    "format": "B/.%d",
    "words": [
      "panamanian",
      "balboa"
    ]
  },
  "PEN": { // https://en.wikipedia.org/wiki/Peruvian_sol
    "name": "Peruvian Nuevo Sol",
    "share": null,
    "symbols": ["S/"],
    "format": "S/%d",
    "words": [
      "peruvian",
      "peru",
      "nuevo",
      "sol"
    ]
  },
  "PGK": { // https://en.wikipedia.org/wiki/Papua_New_Guinean_kina
    "name": "Papua New Guinean Kina",
    "share": null,
    "symbols": ["K"],
    "format": "K%d %s",
    "words": [
      "papua",
      "guinean",
      "kina"
    ]
  },
  "PHP": { // https://en.wikipedia.org/wiki/Philippine_peso
    "name": "Philippine Peso",
    "share": null,
    "symbols": ["₱"],
    "format": "₱%d",
    "words": [
      "philippine",
      "peso",
      "pilipinas",
      "piso"
    ]
  },
  "PKR": { // https://en.wikipedia.org/wiki/Pakistani_rupee
    "name": "Pakistani Rupee",
    "share": null,
    "symbols": ["₨"],
    "format": "₨%d %s",
    "words": [
      "pakistani",
      "rupee",
      "rupaya",
      "rupayya",
      "paisay"
    ]
  },
  "PLN": { // https://en.wikipedia.org/wiki/Polish_z%C5%82oty
    "name": "Polish Zloty",
    "share": null,
    "symbols": ["zł", "zl"],
    "format": "%dzł",
    "words": [
      "polish",
      "zloty",
      "złoty"
    ]
  },
  "PYG": { // https://en.wikipedia.org/wiki/Paraguayan_guaran%C3%AD
    "name": "Paraguayan Guaraní",
    "share": null,
    "symbols": ["₲"],
    "format": "₲%d",
    "words": [
      "paraguayan",
      "guarani",
      "guaraní"
    ]
  },
  "QAR": { // https://en.wikipedia.org/wiki/Qatari_riyal
    "name": "Qatari Riyal",
    "share": null,
    "symbols": ["ر.ق", "QR"],
    "format": "%dر.ق",
    "words": [
      "qatari",
      "riyal"
    ]
  },
  "RON": { // https://en.wikipedia.org/wiki/Romanian_leu
    "name": "Romanian Leu",
    "share": null,
    "symbols": ["leu", "lei"],
    "format": "%d lei %s",
    "words": [
      "romanian",
      "leu",
      "lei"
    ]
  },
  "RSD": { // https://en.wikipedia.org/wiki/Serbian_dinar
    "name": "Serbian Dinar",
    "share": null,
    "symbols": ["din", "dinar", "дин", "динар"],
    "format": "%d дин",
    "words": [
      "serbian",
      "dinar"
    ]
  },
  "RUB": { // https://en.wikipedia.org/wiki/Russian_ruble
    "name": "Russian Ruble",
    "share": 1.1,
    "symbols": ["₽", "руб"],
    "format": "%d₽",
    "words": [
      "russian",
      "ruble",
      "рубль",
      "рубли́"
    ]
  },
  "RWF": { // https://en.wikipedia.org/wiki/Rwandan_franc
    "name": "Rwandan Franc",
    "share": null,
    "symbols": ["R₣", "FRw", "RF"],
    "format": "%dR₣",
    "words": [
      "rwandan",
      "franc"
    ]
  },
  "SAR": { // https://en.wikipedia.org/wiki/Saudi_riyal
    "name": "Saudi Riyal",
    "share": null,
    "symbols": ["ر.س", "SR"],
    "format": "%dر.س",
    "words": [
      "saudi",
      "riyal"
    ]
  },
  "SBD": { // https://en.wikipedia.org/wiki/Solomon_Islands_dollar
    "name": "Solomon Islands Dollar",
    "share": null,
    "symbols": ["SI$", "$"],
    "format": "SI$%d",
    "words": [
      "solomon",
      "dollar"
    ]
  },
  "SCR": { // https://en.wikipedia.org/wiki/Seychellois_rupee
    "name": "Seychellois Rupee",
    "share": null,
    "symbols": ["SR", "SRe"],
    "format": "SR%d",
    "words": [
      "seychellois",
      "seychelles",
      "rupee",
      "roupi"
    ]
  },
  "SDG": { // https://en.wikipedia.org/wiki/Sudanese_pound
    "name": "Sudanese Pound",
    "share": null,
    "symbols": ["ج.س", "SD"],
    "format": "%dج.س",
    "words": [
      "sudanese",
      "pound"
    ]
  },
  "SEK": { // https://en.wikipedia.org/wiki/Swedish_krona
    "name": "Swedish Krona",
    "share": 2.2,
    "symbols": ["kr"],
    "format": "%d kr %s",
    "words": [
      "swedish",
      "krona",
      "kronor",
      "crown"
    ]
  },
  "SGD": { // https://en.wikipedia.org/wiki/Singapore_dollar
    "name": "Singapore Dollar",
    "share": 1.8,
    "symbols": ["S$", "$"],
    "format": "S$%d %s",
    "words": [
      "singapore",
      "dollar"
    ]
  },
  "SHP": { // https://en.wikipedia.org/wiki/Saint_Helena_pound
    "name": "Saint Helena Pound",
    "share": null,
    "symbols": ["£"],
    "format": "£%d %s",
    "words": [
      "helena",
      "pound"
    ]
  },
  "SLL": { // https://en.wikipedia.org/wiki/Sierra_Leonean_leone
    "name": "Sierra Leonean Leone",
    "share": null,
    "symbols": ["Le"],
    "format": "Le %d",
    "words": [
      "sierra",
      "leonean",
      "leone"
    ]
  },
  "SOS": { // https://en.wikipedia.org/wiki/Somali_shilling
    "name": "Somali Shilling",
    "share": null,
    "symbols": ["Sh.So."],
    "format": "%dSh.So.",
    "words": [
      "somali",
      "shilling"
    ]
  },
  "SRD": { // https://en.wikipedia.org/wiki/Surinamese_dollar
    "name": "Surinamese Dollar",
    "share": null,
    "symbols": ["Sr$", "$"],
    "format": "Sr$%d",
    "words": [
      "surinamese",
      "dollar"
    ]
  },
  "STD": { // https://en.wikipedia.org/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe_dobra
    "name": "São Tomé and Príncipe Dobra",
    "share": null,
    "symbols": ["Db"],
    "format": "Db%d",
    "words": [
      "sao",
      "são",
      "tome",
      "tomé",
      "principe",
      "príncipe",
      "dobra"
    ]
  },
  "SVC": { // https://en.wikipedia.org/wiki/Salvadoran_col%C3%B3n
    "name": "Salvadoran Colón",
    "share": null,
    "symbols": ["₡"],
    "format": "₡%d %s",
    "words": [
      "salvadoran",
      "colón"
    ]
  },
  "SYP": { // https://en.wikipedia.org/wiki/Syrian_pound
    "name": "Syrian Pound",
    "share": null,
    "symbols": ["£", "£S", "LS"],
    "format": "£%d %s",
    "words": [
      "syrian",
      "pound"
    ]
  },
  "SZL": { // https://en.wikipedia.org/wiki/Swazi_lilangeni
    "name": "Swazi Lilangeni",
    "share": null,
    "symbols": ["L", "E"],
    "format": "E%d %s",
    "words": [
      "swazi",
      "lilangeni",
      "emalangeni"
    ]
  },
  "THB": { // https://en.wikipedia.org/wiki/Thai_baht
    "name": "Thai Baht",
    "share": null,
    "symbols": ["฿"],
    "format": "฿%d",
    "words": [
      "thai",
      "baht"
    ]
  },
  "TJS": { // https://en.wikipedia.org/wiki/Tajikistani_somoni
    "name": "Tajikistani Somoni",
    "share": null,
    "symbols": ["ЅM"],
    "format": "ЅM%d",
    "words": [
      "tajikistani",
      "somoni"
    ]
  },
  "TMT": { // https://en.wikipedia.org/wiki/Turkmenistan_manat
    "name": "Turkmenistan Manat",
    "share": null,
    "symbols": ["T"],
    "format": "T%d",
    "words": [
      "turkmenistan",
      "manat"
    ]
  },
  "TND": { // https://en.wikipedia.org/wiki/Tunisian_dinar
    "name": "Tunisian Dinar",
    "share": null,
    "symbols": ["د.ت", "DT"],
    "format": "%dد.ت",
    "words": [
      "tunisian",
      "dinar"
    ]
  },
  "TOP": { // https://en.wikipedia.org/wiki/Tongan_pa%CA%BBanga
    "name": "Tongan Paʻanga",
    "share": null,
    "symbols": ["T$", "PT"],
    "format": "T$%d %s",
    "words": [
      "tongan",
      "paʻanga",
      "paanga",
      "anga"
    ]
  },
  "TRY": { // https://en.wikipedia.org/wiki/Turkish_lira
    "name": "Turkish Lira",
    "share": 1.4,
    "symbols": ["₺"],
    "format": "₺%d",
    "words": [
      "turkish",
      "lira"
    ]
  },
  "TTD": { // https://en.wikipedia.org/wiki/Trinidad_and_Tobago_dollar
    "name": "Trinidad and Tobago Dollar",
    "share": null,
    "symbols": ["TT$", "$"],
    "format": "TT$%d",
    "words": [
      "trinidad",
      "tobago",
      "dollar"
    ]
  },
  "TWD": { // https://en.wikipedia.org/wiki/New_Taiwan_dollar
    "name": "New Taiwan Dollar",
    "share": null,
    "symbols": ["NT$", "$"],
    "format": "NT$%d",
    "words": [
      "taiwan",
      "dollar"
    ]
  },
  "TZS": { // https://en.wikipedia.org/wiki/Tanzanian_shilling
    "name": "Tanzanian Shilling",
    "share": null,
    "symbols": ["TSh"],
    "format": "%d TSh",
    "words": [
      "tanzanian",
      "shilling"
    ]
  },
  "UAH": { // https://en.wikipedia.org/wiki/Ukrainian_hryvnia
    "name": "Ukrainian Hryvnia",
    "share": null,
    "symbols": ["₴"],
    "format": "₴%d",
    "words": [
      "ukrainian",
      "hryvnia",
      "hryvnya"
    ]
  },
  "UGX": { // https://en.wikipedia.org/wiki/Ugandan_shilling
    "name": "Ugandan Shilling",
    "share": null,
    "symbols": ["USh"],
    "format": "%d USh",
    "words": [
      "ugandan",
      "shilling"
    ]
  },
  "USD": { // https://en.wikipedia.org/wiki/United_States_dollar
    "name": "United States Dollar",
    "share": 80.6,
    "symbols": ["$"],
    "format": "$%d %s",
    "words": [
      "united",
      "states",
      "u.s.",
      "dollar",
      "buck"
    ]
  },
  "UYU": { // https://en.wikipedia.org/wiki/Uruguayan_peso
    "name": "Uruguayan Peso",
    "share": null,
    "symbols": ["$", "$U"],
    "format": "$%d %s",
    "words": [
      "uruguayan",
      "peso"
    ]
  },
  "UZS": { // https://en.wikipedia.org/wiki/Uzbekistani_so%CA%BBm
    "name": "Uzbekistani Soʻm",
    "share": null,
    "symbols": ["сўм", "soʻm"],
    "format": "%d сўм",
    "words": [
      "uzbekistani",
      "soʻm",
      "som"
    ]
  },
  "VEF": { // https://en.wikipedia.org/wiki/Venezuelan_bol%C3%ADvar
    "name": "Venezuelan Bolívar Fuerte",
    "share": null,
    "symbols": ["Bs.F."],
    "format": "Bs.F. %d",
    "words": [
      "venezuelan",
      "bolivar",
      "bolívar",
      "fuerte"
    ]
  },
  "VND": { // https://en.wikipedia.org/wiki/Vietnamese_%C4%91%E1%BB%93ng
    "name": "Vietnamese Đồng",
    "share": null,
    "symbols": ["₫"],
    "format": "%d₫",
    "words": [
      "vietnamese",
      "dong",
      "đồng"
    ]
  },
  "VUV": { // https://en.wikipedia.org/wiki/Vanuatu_vatu
    "name": "Vanuatu Vatu",
    "share": null,
    "symbols": ["VT"],
    "format": "%dVT",
    "words": [
      "vanuatu",
      "vatu"
    ]
  },
  "WST": { // https://en.wikipedia.org/wiki/Samoan_t%C4%81l%C4%81
    "name": "Samoan Tala",
    "share": null,
    "symbols": ["WS$", "SAT", "ST", "T"],
    "format": "WS$%d",
    "words": [
      "samoan",
      "tala"
    ]
  },
  "XAF": { // https://en.wikipedia.org/wiki/Central_African_CFA_franc
    "name": "Central African CFA Franc",
    "share": null,
    "symbols": ["FCFA"],
    "format": "%d FCFA",
    "words": [
      "african",
      "cfa",
      "franc"
    ]
  },
  "XAG": { // https://en.wikipedia.org/wiki/Troy_weight
    "name": "Silver (troy ounce)",
    "share": null,
    "symbols": ["silver"],
    "format": "%doz silver",
    "words": [
      "silver"
    ]
  },
  "XAU": { // https://en.wikipedia.org/wiki/Troy_weight
    "name": "Gold (troy ounce)",
    "share": null,
    "symbols": ["gold"],
    "format": "%doz gold",
    "words": [
      "gold"
    ]
  },
  "XCD": { // https://en.wikipedia.org/wiki/Eastern_Caribbean_dollar
    "name": "East Caribbean Dollar",
    "share": null,
    "symbols": ["EC$", "$"],
    "format": "EC$%d",
    "words": [
      "caribbean",
      "dollar"
    ]
  },
  "XDR": { // https://en.wikipedia.org/wiki/Special_drawing_rights
    "name": "Special Drawing Rights",
    "share": null,
    "symbols": [],
    "format": "%d %s",
    "words": []
  },
  "XOF": { // https://en.wikipedia.org/wiki/West_African_CFA_franc
    "name": "West African CFA Franc",
    "share": null,
    "symbols": ["CFA"],
    "format": "%d CFA",
    "words": [
      "african",
      "cfa",
      "franc"
    ]
  },
  "XPF": { // https://en.wikipedia.org/wiki/CFP_franc
    "name": "CFP Franc",
    "share": null,
    "symbols": ["₣", "CFP"],
    "format": "₣%d CFP",
    "words": [
      "african",
      "cfp",
      "franc"
    ]
  },
  "YER": { // https://en.wikipedia.org/wiki/Yemeni_rial
    "name": "Yemeni Rial",
    "share": null,
    "symbols": ["﷼"],
    "format": "%d﷼",
    "words": [
      "yemeni",
      "rial",
      "riyal"
    ]
  },
  "ZAR": { // https://en.wikipedia.org/wiki/South_African_rand
    "name": "South African Rand",
    "share": 1.0,
    "symbols": ["R"],
    "format": "R %d",
    "words": [
      "african",
      "rand"
    ]
  },
  "ZMK": { // https://en.wikipedia.org/wiki/Zambian_kwacha
    "name": "Zambian Kwacha (2003-2012)",
    "share": null,
    "symbols": ["K"],
    "format": "K%d %s",
    "words": [
      "zambian",
      "kwacha"
    ]
  },
  "ZMW": { // https://en.wikipedia.org/wiki/Zambian_kwacha
    "name": "Zambian Kwacha",
    "share": null,
    "symbols": ["K"],
    "format": "K%d %s",
    "words": [
      "zambian",
      "kwacha"
    ]
  },
  "ZWL": { // https://en.wikipedia.org/wiki/Zimbabwean_dollar
    "name": "Zimbabwean Dollar",
    "share": null,
    "symbols": ["Z$", "$"],
    "format": "Z$%d %s",
    "words": [
      "zimbabwean",
      "zimbabwe",
      "dollar"
    ]
  }
};