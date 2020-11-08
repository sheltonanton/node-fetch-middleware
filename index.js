const fetch = require('node-fetch');
const {compose} = require('node-fetch-middleware');

let middlewares = [function(url, init, next){next(url, init);}]
let middlewareFetch = fetch;

function addMiddleware(mw){
    middlewares.push(mw);
    middlewareFetch = compose(middlewares);
}

middlewareFetch.addMiddleware = addMiddleware;

module.exports = middlewareFetch;