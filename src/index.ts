import {Calil, options} from './Calil'

let options: options = {
    'appkey': <string>process.env.APP_KEY,
    'isbn': [111],
    'systemid':[111] 
}
let c = new Calil(options)
c.search()