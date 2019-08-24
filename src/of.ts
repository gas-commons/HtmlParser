import HtmlParser_ from './HtmlParser_'

// NOTE: Below function will be public in Google Apps Script.
// eslint-disable-next-line camelcase
function of (value: GoogleAppsScript.XML_Service.Element) {
  return new HtmlParser_(value)
}

// NOTE: Below statement will be removed by clasp.
export default of
