[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# HtmlParser
HTML Parser for Googe Apps Script

## Usage
### Add library
project key: `1gMNYu6-SlYdKbfFMSXZz718quQVgll-qKhNobIaJwMVYL_9EgZ9GQlmp`

### Use in your script
Example:

```js
var html = UrlFetchApp.fetch('http://en.wikipedia.org/wiki/Document_Object_Model').getContentText()
var doc = XmlService.parse(html)
var rootElement = doc.getRootElement()

var parser = HtmlParser.of(rootElement)
var element = parser.getElementById('firstHeading')
```

## API
API is inspired by [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document).

### getElementById(id)
```js
var element = parser.getElementById('firstHeading')
```

### getElementsByClassName(className)
```js
var elements = parser.getElementsByClassName('firstHeading')
```

### getElementsByTagName(tagName)
```js
var elements = parser.getElementsByTagName('h1')
```

## Reference
* [Parsing HTML - Google Apps Script Examples](https://sites.google.com/site/scriptsexamples/learn-by-example/parsing-html)
