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
    "format": "%d L",
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
    "format": "%d kwanzas",
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
    "format": "$%d %s",
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
    "format": "$%d %s",
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
    "symbols": ["lv", "лв"],
    "format": "%dлв",
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
    "format": "BD$%d %s",
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
    "format": "₡%d",
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
    "format": "CUC$%d %s",
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
    "format": "%d دج",
    "words": [
      "algerian",
      "dinar"
    ]
  },
  "EGP": { // https://en.wikipedia.org/wiki/Egyptian_pound
    "name": "Egyptian Pound",
    "share": null,
    "symbols": ["E£", "ج.م", "L.E.", "LE"],
    "format": "E£%d %s",
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


// HERE
// fix styles of very long numbers


  "EUR": { // https://en.wikipedia.org/wiki/Euro
    "name": "Euro",
    "share": 37.4,
    "symbols": ["€"],
    "format": "€%d %s",
    "words": [
      "euro"
    ]
  },
  "GBP": { // https://en.wikipedia.org/wiki/Pound_sterling
    "name": "British Pound",
    "share": 12.8,
    "symbols": ["£"],
    "format": "£%d %s",
    "words": [
      "great",
      "british",
      "pound",
      "sterling",
      "quid"
    ]
  },
  "HKD": { // https://en.wikipedia.org/wiki/Hong_Kong_dollar
    "name": "Hong Kong Dollar",
    "share": 1.7,
    "symbols": ["$", "HK$", "元"],
    "format": "$%d %s",
    "words": [
      "hong",
      "kong",
      "dollar",
      "港元",
      "Góng yùn"
    ]
  },
  "HRK": { // https://en.wikipedia.org/wiki/Croatian_kuna
    "name": "Croatian Kuna",
    "share": null,
    "symbols": [/kn\b/i],
    "format": "%d kn",
    "words": [
      "croatian",
      "hrvatska",
      "kuna"
    ]
  },
  "HUF": { // https://en.wikipedia.org/wiki/Hungarian_forint
    "name": "Hungarian Forint",
    "share": null,
    "symbols": [/Ft\b/],
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
      "rupiah",
      "perak"
    ]
  },
  "ILS": { // https://en.wikipedia.org/wiki/Israeli_new_shekel
    "name": "Israeli New Shekel",
    "share": null,
    "symbols": ["₪"],
    "format": "₪%d %s",
    "words": [
      "israeli",
      "shekel",
      "שֶׁקֶל",
      "חָדָשׁ‎",
      "شيقل",
      "جديد",
      "shēqel",
      "jadīd"
    ]
  },
  "INR": { // https://en.wikipedia.org/wiki/Indian_rupee
    "name": "Indian Rupee",
    "share": 1.1,
    "symbols": ["₹"],
    "format": "₹%d %s",
    "words": [
      "indian",
      "rupee",
      "rupiya"
    ]
  },
  "JPY": { // https://en.wikipedia.org/wiki/Japanese_yen
    "name": "Japanese Yen",
    "share": 21.6,
    "symbols": ["¥", "円", "圓"],
    "format": "¥%d %s",
    "words": [
      "japanese",
      "yen",
      "円",
      "圓"
    ]
  },
  "KRW": { // https://en.wikipedia.org/wiki/South_Korean_won
    "name": "South Korean Won",
    "share": 1.7,
    "symbols": ["₩"],
    "format": "₩%d %s",
    "words": [
      "south",
      "korea",
      "won",
      "원"
    ]
  },
  "MXN": { // https://en.wikipedia.org/wiki/Mexican_peso
    "name": "Mexican Peso",
    "share": 1.9,
    "symbols": ["$", "Mex$"],
    "format": "$%d %s",
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
  "NOK": { // https://en.wikipedia.org/wiki/Norwegian_krone
    "name": "Norwegian Krone",
    "share": 1.7,
    "symbols": [/kr\b/i],
    "format": "%s %d kr",
    "words": [
      "norwegian",
      "krone"
    ]
  },
  "NZD": { // https://en.wikipedia.org/wiki/New_Zealand_dollar
    "name": "New Zealand Dollar",
    "share": 2.1,
    "symbols": ["$"],
    "format": "$%d %s",
    "words": [
      "zealand",
      "dollar",
      "Tāra",
      "Aotearoa",
      "kiwi"
    ]
  },
  "PHP": { // https://en.wikipedia.org/wiki/Philippine_peso
    "name": "Philippine Peso",
    "share": null,
    "symbols": ["₱"],
    "format": "₱%d %s",
    "words": [
      "philippine",
      "peso",
      "piso",
      "pilipinas"
    ]
  },
  "PLN": { // https://en.wikipedia.org/wiki/Polish_z%C5%82oty
    "name": "Polish Zloty",
    "share": null,
    "symbols": ["zł", /zl\b/i],
    "format": "%dzł",
    "words": [
      "polish",
      "zloty",
      "złoty"
    ]
  },
  "RON": { // https://en.wikipedia.org/wiki/Romanian_leu
    "name": "Romanian Leu",
    "share": null,
    "symbols": [/leu\b/i],
    "format": "%d lei",
    "words": [
      "romanian",
      "leu",
      "lei"
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
  "SEK": { // https://en.wikipedia.org/wiki/Swedish_krona
    "name": "Swedish Krona",
    "share": 2.2,
    "symbols": [/kr\b/i],
    "format": "%s %d kr",
    "words": [
      "swedish",
      "krona",
      "kronor",
      "spänn",
      "pix",
      "daler",
      "riksdaler",
      "crowns",
      "bagare",
      "bagis",
      "lök"
    ]
  },
  "SGD": { // https://en.wikipedia.org/wiki/Singapore_dollar
    "name": "Singapore Dollar",
    "share": 1.8,
    "symbols": ["$", "S$"],
    "format": "S$%d %s",
    "words": [
      "singapore",
      "dollar"
    ]
  },
  "THB": { // https://en.wikipedia.org/wiki/Thai_baht
    "name": "Thai Baht",
    "share": null,
    "symbols": ["฿"],
    "format": "฿%d %s",
    "words": [
      "thai",
      "baht",
      "บาท"
    ]
  },
  "TRY": { // https://en.wikipedia.org/wiki/Turkish_lira
    "name": "Turkish Lira",
    "share": 1.4,
    "symbols": ["₺"],
    "format": "₺%d %s",
    "words": [
      "turkish",
      "lira",
      "Türk",
      "lirası"
    ]
  },
  "USD": { // https://en.wikipedia.org/wiki/United_States_dollar
    "name": "United States Dollar",
    "share": 80.6,
    "symbols": ["$", "US"],
    "format": "$%d %s",
    "words": [
      "united",
      "states",
      "u.s.",
      "american",
      "dollar",
      "buck"
    ]
  },
  "ZAR": { // https://en.wikipedia.org/wiki/South_African_rand
    "name": "South African Rand",
    "share": 1.0,
    "symbols": [/R\b/],
    "format": "R %d",
    "words": [
      "south",
      "african",
      "rand"
    ]
  }
};