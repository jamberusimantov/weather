const Validator = require('validator')
const isEmpty = require('is-empty')

const validateCityName = (data) => {
    data.name = !isEmpty(data.name) ? data.name : '';
    const query = {}
    if (!Validator.isEmpty(data.name)) {
        query.name = data.name
    }
    return {
        query,
        isQuery: !isEmpty(query)
    }
}
const validateCityId = (data) => {
    data.id = !isEmpty(data.id) ? data.id : '';
    const query = {}
    if (!Validator.isEmpty(data.id)) {
        query.id = data.id
    }
    return {
        query,
        isQuery: !isEmpty(query)
    }
}


module.exports = { validateCityName, validateCityId }