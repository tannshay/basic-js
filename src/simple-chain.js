const { NotImplementedError } = require("../extensions/index.js")

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  links: [],
  getLength() {
    return this.links.length
  },
  addLink(value) {
    if (value === undefined) {
      this.links.push("( )")
    } else {
      this.links.push(`( ${String(value)} )`)
    }
    return this
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      isNaN(position) ||
      position % 1 !== 0 ||
      position >= this.getLength() + 1 ||
      position < 1
    ) {
      this.links.length = 0
      throw new Error("You can't remove incorrect link!")
    } else {
      this.links.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    this.links.reverse()
    return this
  },
  finishChain() {
    const resStr = this.links.join("~~")
    this.links.length = 0
    return resStr
  },
}

module.exports = {
  chainMaker,
}
