# Conveuro

Chrome Extension that allows you to convert currencies with a simple selection. [Get it for FREE!](https://chrome.google.com/webstore/detail/conveuro/hchlbehbbfdiogoeigibfgjpcmhogaop)

# Demo
![Dropdown functionality on eBay](https://media.giphy.com/media/3ov9jFk1VmNO9s9pSM/giphy.gif)
![Popup functionality](https://media.giphy.com/media/3o7aD2tcKtpAr1DgUU/giphy.gif)

# How it works

## Detection

When a selection occurs, the text is checked for a number. If a number is found, it tries to find some indication of a currency in the form of:

- Currency codes: `USD`, `EUR`, `GBP`...
- Symbols: `$`, `€`, `£`...
- Keywords: `australian`, `dollar`, `pound`, `yen`, `bulgarian`, `lev`...

If more than one currency is found, the one with the highest daily share value is chosen. For example, `$` could be US dollar, australian dollar, canadian dollar, mexican peso... However, US dollar will be chosed since it has the highest daily share value and is most likely.

## Data

Actual conversion data is provided by the European Central Bank through the [](http://fixer.io/) API.

# Contribution

## Support

The extension can provide data for only 32 currency due to using a free API. You could **[donate](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QL95RFKLGS236)**  and help with moving to a paid API that has a broader range of currency data.

## Detection

Most data used for currency detection is manually taken from Wikipedia. Some currencies might not have the correct data set. You could improve the detection accuracy of any currency by changing [this file](https://github.com/hdodov/conveuro/blob/master/extension/event-page/_src/js/currencies.js). 😎
