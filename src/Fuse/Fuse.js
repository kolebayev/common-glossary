import Fuse from 'fuse.js'
import { glossary_common } from './glossary_common.js'
import { abbreviations_oil } from './abbreviations_oil.js'
import { abbreviations_units } from './abbreviations_units.js'

class FuseSearch {
  constructor() {
    this.fuse = new Fuse(
      [...glossary_common, ...abbreviations_oil, ...abbreviations_units],
      {
        includeScore: true,
        isCaseSensitive: false,
        includeMatches: true,
        // includeMatches: false,
        // minMatchCharLength: 3,
        // shouldSort: true,
        // findAllMatches: true,
        keys: ['name', 'description'],
      }
    )
  }

  search = (queryString) => {
    console.log(this.fuse.search(queryString))
    return this.fuse.search(queryString)
  }
}

export default new FuseSearch()
