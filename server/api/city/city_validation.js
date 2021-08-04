const Validator = require('validator')
const isEmpty = require('is-empty')

const validateCityName = (data, searchMethod) => {
    data.name = !isEmpty(data.name) ? data.name : '';
    const query = {}
    if (!Validator.isEmpty(data.name)) {
        query.name = searchMethod ? searchMethod(data.name) : data.name
    }
    return {
        query,
        isQuery: !isEmpty(query)
    }
}
const validateCityId = (data, searchMethod) => {
    data.id = !isEmpty(data.id) ? data.id : '';
    const query = {}
    if (!Validator.isEmpty(data.name)) {
        query.id = searchMethod ? searchMethod(data.id) : data.id
    }
    return {
        query,
        isQuery: !isEmpty(query)
    }
}

const validateSearch = (data, searchMethod) => {
    data.id = !isEmpty(data.id) ? data.id : '';
    data.name = !isEmpty(data.name) ? data.name : '';
    const query = {}

    if (!Validator.isEmpty(data.id)) {
        query.id = searchMethod ? searchMethod(data.id) : data.id
    }
    if (!Validator.isEmpty(data.name)) {
        query.name = searchMethod ? searchMethod(data.name) : data.name
    }
    return {
        query,
        isQuery: !isEmpty(query)
    }
}

module.exports = { validateCityName, validateCityId }