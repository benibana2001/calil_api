import {Calil, options} from './Calil'

let options: options = {
    'appkey': 'key',
    'isbn': [111],
    'systemid':[111] 
}
let c = new Calil(options)
console.log(process.env.DB_HOST);
// import c from './calilapi'

// let isbn_list = [4103534222];
// let systemid_list = ['Tokyo_NDL'];
// var calil = new c.Calil({
//     'appkey': '',
//     'render': new c.CalilRender(),
//     'isbn': isbn_list,
//     'systemid': systemid_list
// });
// calil.search();