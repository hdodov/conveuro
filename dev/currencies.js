var CURRENCIES = {
  "AUD": { // https://en.wikipedia.org/wiki/Australian_dollar
    "occurence": 6.9,
    "symbols": ["$", "A$"],
    "format": "$%d %s",
    "words": [
      "australian",
      "dollar"
    ]
  },
  "BGN": { // https://en.wikipedia.org/wiki/Bulgarian_lev
    "occurence": null,
    "symbols": ["лв", "лв."],
    "format": "%dлв.",
    "words": [
      "bulgarian",
      "lev",
      "лев"
    ]
  },
  "BRL": { // https://en.wikipedia.org/wiki/Brazilian_real
    "occurence": 1,
    "symbols": ["$", "R$"],
    "format": "R$%d",
    "words": [
      "brazilian",
      "real",
      "reais"
    ]
  },
  "CAD": { // https://en.wikipedia.org/wiki/Canadian_dollar
    "occurence": 5.1,
    "symbols": ["$", "Can$", "C$"],
    "format": "$%d %s",
    "words": [
      "canadian",
      "dollar"
    ]
  },
  "CHF": { // https://en.wikipedia.org/wiki/Swiss_franc
    "occurence": 4.8,
    "symbols": ["Fr.", "SFr."],
    "format": "%d francs",
    "words": [
      "swiss",
      "franc",
      "franken",
      "franchi"
    ]
  },
  "CNY": { // https://en.wikipedia.org/wiki/Yuan_(currency)
    "occurence": 4.0,
    "symbols": ["元", "¥"],
    "format": "RMB %d",
    "words": [
      "chinese",
      "yuan",
      "人民币"
    ]
  },
  "CZK": { // https://en.wikipedia.org/wiki/Czech_koruna
    "occurence": null,
    "symbols": ["Kč"],
    "format": "%d Kč",
    "words": [
      "czech",
      "koruna",
      "česká",
      "koruny",
      "české"
    ]
  },
  "DKK": { // https://en.wikipedia.org/wiki/Danish_krone
    "occurence": null,
    "symbols": ["kr", "kr."],
    "format": "%d kroner",
    "words": [
      "danish",
      "krone",
      "kroner"
    ]
  },
  "EUR"; { // https://en.wikipedia.org/wiki/Euro
    "occurence": 37.4,
    "symbols": ["€"],
    "format": "€%d %s",
    "words": [
      "euro"
    ]
  },
  "GBP": { // https://en.wikipedia.org/wiki/Pound_sterling
    "occurence": 12.8,
    "symbols": ["£"],
    "format": "£%d %s",
    "words": [
      "pound",
      "sterling",
      "quid"
    ]
  },
  "HKD": { // https://en.wikipedia.org/wiki/Hong_Kong_dollar
    "occurence": 1.7,
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
    "occurence": null,
    "symbols": ["kn"],
    "format": "%d kn",
    "words": [
      "croatian",
      "hrvatska",
      "kuna"
    ]
  },
  "HUF": { // https://en.wikipedia.org/wiki/Hungarian_forint
    "occurence": null,
    "symbols": ["Ft"],
    "format": "%d Ft",
    "words": [
      "hungarian",
      "forint"
    ]
  },
  "IDR": { // https://en.wikipedia.org/wiki/Indonesian_rupiah
    "occurence": null,
    "symbols": ["Rp"],
    "format": "Rp %d",
    "words": [
      "indonesian",
      "rupiah",
      "perak"
    ]
  },
  "ILS": { // https://en.wikipedia.org/wiki/Israeli_new_shekel
    "occurence": null,
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
    "occurence": 1.1,
    "symbols": ["₹"],
    "format": "₹%d %s",
    "words": [
      "indian",
      "rupee",
      "rupiya"
    ]
  },
  "JPY": { // https://en.wikipedia.org/wiki/Japanese_yen
    "occurence": 21.6,
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
    "occurence": 1.7,
    "symbols": ["₩"],
    "format": "₩%d",
    "words": [
      "south",
      "korea",
      "won",
      "원"
    ]
  },
  "MXN": { // https://en.wikipedia.org/wiki/Mexican_peso
    "occurence": 1.9,
    "symbols": ["$", "Mex$"],
    "format": "$%d %s",
    "words": [
      "mexican",
      "peso",
      "mexicano"
    ]
  },
  "MYR": { // https://en.wikipedia.org/wiki/Malaysian_ringgit
    "occurence": null,
    "symbols": ["RM"],
    "format": "RM%d",
    "words": [
      "malaysian",
      "ringgit"
    ]
  },
  "NOK": { // https://en.wikipedia.org/wiki/Norwegian_krone
    "occurence": 1.7,
    "symbols": ["kr"],
    "format": "%d kr",
    "words": [
      "norwegian",
      "krone"
    ]
  },
  "NZD": { // https://en.wikipedia.org/wiki/New_Zealand_dollar
    "occurence": 2.1,
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
    "occurence": null,
    "symbols": ["₱"],
    "format": "₱%d",
    "words": [
      "philippine",
      "peso",
      "piso",
      "pilipinas"
    ]
  },
  "PLN": { // https://en.wikipedia.org/wiki/Polish_z%C5%82oty
    "occurence": null,
    "symbols": ["zł"],
    "format": "%dzł",
    "words": [
      "polish",
      "zloty",
      "złoty"
    ]
  },
  "RON": { // https://en.wikipedia.org/wiki/Romanian_leu
    "occurence": null,
    "symbols": ["leu"],
    "format": "%d lei",
    "words": [
      "romanian",
      "leu",
      "lei"
    ]
  },
  "RUB": { // https://en.wikipedia.org/wiki/Russian_ruble
    "occurence": 1.1,
    "symbols": ["₽", "руб"],
    "format": "%d₽",
    "words": [
      "russian",
      "ruble",
      "рубль",
      "рубли́"
    ]
  },
  "SEK": {
    "occurence": 2.2,
    "symbols": "kr",
    "format": "",
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
  "SGD": {
    "occurence": 1.8,
    "symbols": "S$",
    "format": "",
    "words": [
      "singapore",
      "dollar"
    ]
  },
  "THB": {
    "occurence": null,
    "symbols": "฿",
    "format": "",
    "words": [
      "thai",
      "baht",
      "บาท"
    ]
  },
  "TRY": {
    "occurence": 1.4,
    "symbols": "₺",
    "format": "",
    "words": [
      "turkish",
      "lira",
      "Türk",
      "lirası"
    ]
  },
  "USD": {
    "occurence": 80.6,
    "symbols": "$",
    "format": "",
    "words": [
      "united",
      "states",
      "U.S.",
      "american",
      "dollar",
      "buck"
    ]
  },
  "ZAR": {
    "occurence": 1.0,
    "symbols": "R",
    "format": "",
    "words": [
      "south",
      "african",
      "rand"
    ]
  }
};