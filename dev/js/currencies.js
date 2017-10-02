// Most traded currencies: https://en.wikipedia.org/wiki/Template:Most_traded_currencies

var CURRENCIES = {
  "AUD": { // https://en.wikipedia.org/wiki/Australian_dollar
    "share": 6.9,
    "symbols": ["$", "A$"],
    "format": "$%d %s",
    "words": [
      "australian",
      "dollar"
    ]
  },
  "BGN": { // https://en.wikipedia.org/wiki/Bulgarian_lev
    "share": null,
    "symbols": ["лв"],
    "format": "%dлв",
    "words": [
      "bulgarian",
      "lev",
      "лев"
    ]
  },
  "BRL": { // https://en.wikipedia.org/wiki/Brazilian_real
    "share": 1,
    "symbols": ["$", "R$"],
    "format": "R$%d %s",
    "words": [
      "brazilian",
      "real",
      "reais"
    ]
  },
  "CAD": { // https://en.wikipedia.org/wiki/Canadian_dollar
    "share": 5.1,
    "symbols": ["$", "Can$", "C$"],
    "format": "$%d %s",
    "words": [
      "canadian",
      "dollar"
    ]
  },
  "CHF": { // https://en.wikipedia.org/wiki/Swiss_franc
    "share": 4.8,
    "symbols": ["Fr.", "SFr."],
    "format": "%d francs",
    "words": [
      "swiss",
      "franc",
      "franken",
      "franchi"
    ]
  },
  "CNY": { // https://en.wikipedia.org/wiki/Renminbi
    "share": 4.0,
    "symbols": ["元", "¥"],
    "format": "RMB %d",
    "words": [
      "chinese",
      "yuan",
      "人民币"
    ]
  },
  "CZK": { // https://en.wikipedia.org/wiki/Czech_koruna
    "share": null,
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
    "share": null,
    "symbols": ["kr", "kr."],
    "format": "%d kroner",
    "words": [
      "danish",
      "krone",
      "kroner"
    ]
  },
  "EUR": { // https://en.wikipedia.org/wiki/Euro
    "share": 37.4,
    "symbols": ["€"],
    "format": "€%d %s",
    "words": [
      "euro"
    ]
  },
  "GBP": { // https://en.wikipedia.org/wiki/Pound_sterling
    "share": 12.8,
    "symbols": ["£"],
    "format": "£%d %s",
    "words": [
      "pound",
      "sterling",
      "quid"
    ]
  },
  "HKD": { // https://en.wikipedia.org/wiki/Hong_Kong_dollar
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
    "share": null,
    "symbols": ["kn"],
    "format": "%d kn",
    "words": [
      "croatian",
      "hrvatska",
      "kuna"
    ]
  },
  "HUF": { // https://en.wikipedia.org/wiki/Hungarian_forint
    "share": null,
    "symbols": ["Ft"],
    "format": "%d Ft",
    "words": [
      "hungarian",
      "forint"
    ]
  },
  "IDR": { // https://en.wikipedia.org/wiki/Indonesian_rupiah
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
    "share": 1.9,
    "symbols": ["$", "Mex$"],
    "format": "$%d %s",
    "words": [
      "mexican",
      "peso",
      "mexicano"
    ]
  },
  "MYR": { // https://en.wikipedia.org/wiki/Malaysian_ringgit
    "share": null,
    "symbols": ["RM"],
    "format": "RM%d",
    "words": [
      "malaysian",
      "ringgit"
    ]
  },
  "NOK": { // https://en.wikipedia.org/wiki/Norwegian_krone
    "share": 1.7,
    "symbols": ["kr"],
    "format": "%d kr",
    "words": [
      "norwegian",
      "krone"
    ]
  },
  "NZD": { // https://en.wikipedia.org/wiki/New_Zealand_dollar
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
    "share": null,
    "symbols": ["zł"],
    "format": "%dzł",
    "words": [
      "polish",
      "zloty",
      "złoty"
    ]
  },
  "RON": { // https://en.wikipedia.org/wiki/Romanian_leu
    "share": null,
    "symbols": ["leu"],
    "format": "%d lei",
    "words": [
      "romanian",
      "leu",
      "lei"
    ]
  },
  "RUB": { // https://en.wikipedia.org/wiki/Russian_ruble
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
    "share": 2.2,
    "symbols": ["kr"],
    "format": "%d kr",
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
    "share": 1.8,
    "symbols": ["$", "S$"],
    "format": "S$%d %s",
    "words": [
      "singapore",
      "dollar"
    ]
  },
  "THB": { // https://en.wikipedia.org/wiki/Thai_baht
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
    "share": 80.6,
    "symbols": ["$"],
    "format": "$%d %s",
    "words": [
      "united",
      "states",
      "U.S.",
      "american",
      "dollar",
      "buck"
    ]
  },
  "ZAR": { // https://en.wikipedia.org/wiki/South_African_rand
    "share": 1.0,
    "symbols": ["R"],
    "format": "R %d",
    "words": [
      "south",
      "african",
      "rand"
    ]
  }
};