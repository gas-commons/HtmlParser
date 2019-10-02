import HtmlParser_ from './HtmlParser_'

// NOTE: Below function will be public in Google Apps Script.
// eslint-disable-next-line @typescript-eslint/camelcase
function of (value: GoogleAppsScript.XML_Service.Element): HtmlParser_ {
  return new HtmlParser_(value)
}

// NOTE: Below statement will be removed by clasp.
export default of
