import { data } from './data.js'
import Fuse from 'fuse.js'

class FuseSearch {
  constructor() {
    this.fuse = new Fuse(data, {
      includeScore: true,
      isCaseSensitive: false,
      includeMatches: true,
      minMatchCharLength: 3,
      shouldSort: true,
      // findAllMatches: true,
      keys: ['name', 'description'],
    })
  }

  test = (q) => {
    let result = this.fuse.search(q)
    result.forEach((item, i) => {
      if (item.item.name.includes(q) || item.item.description.includes(q)) {
        console.log(q, i, item.item.name, item.item.description)
      } else {
        console.log('gg')
      }
    })
    // console.log(result.filter((res) => res.score < 1))
  }
}

export default new FuseSearch()
