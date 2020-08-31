import { data } from './data.js'
import FlexSearch from 'flexsearch'

class Flexsearch {
  constructor() {
    this.index = new FlexSearch({
      // default values:
      encode: 'balance',
      tokenize: 'forward',
      threshold: 0,
      async: false,
      worker: false,
      cache: false,
      depth: 3,
      doc: {
        id: 'id',
        field: ['name', 'description'],
      },
    })
    // .registerMatcher({
    //   й: 'и',
    //   ё: 'е',
    // })
    this.index.registerLanguage('ru')

    for (let i = 0; i < data.length; i++) {
      this.index.add(i, data[i].name)
    }
  }

  test = (q) => {
    console.log(this.index.search('Процессинг'))
  }
}

export default new Flexsearch()
