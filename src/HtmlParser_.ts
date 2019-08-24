// NOTE: Below class will be private in Google Apps Script.
class HtmlParser_ {
  // eslint-disable-next-line camelcase
  private readonly element: GoogleAppsScript.XML_Service.Element

  // eslint-disable-next-line camelcase
  constructor (element: GoogleAppsScript.XML_Service.Element) {
    this.element = element
  }

  // eslint-disable-next-line camelcase
  getElementById (id: string): GoogleAppsScript.XML_Service.Element {
    const descendantElements = this.getDescendantElements()
    return descendantElements.filter(element => {
      const idAttribute = element.getAttribute('id')
      if (idAttribute == null) {
        return false
      }
      const idAttributeValue = idAttribute.getValue()
      return idAttributeValue === id
    })[0]
  }

  // eslint-disable-next-line camelcase
  getElementsByClassName (className: string): GoogleAppsScript.XML_Service.Element[] {
    const descendantElements = this.getDescendantElements()
    descendantElements.push(this.element)
    return descendantElements.filter(element => {
      const classAttribute = element.getAttribute('class')
      if (classAttribute == null) {
        return false
      }
      const classAttributeValue = classAttribute.getValue()
      return (classAttributeValue === className) || (classAttributeValue.split(' ').some(name => name === className))
    })
  }

  // eslint-disable-next-line camelcase
  getElementsByTagName (tagName: string): GoogleAppsScript.XML_Service.Element[] {
    const descendantElements = this.getDescendantElements()
    return descendantElements.filter(element => element.getName() === tagName)
  }

  // eslint-disable-next-line camelcase
  private getDescendantElements (): GoogleAppsScript.XML_Service.Element[] {
    return this.element.getDescendants()
      .map(content => content.asElement())
      .filter(element => element != null)
  }
}

// NOTE: Below statement will be removed by clasp.
export default HtmlParser_
