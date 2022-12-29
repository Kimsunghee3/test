const repository = require('../repository/board.repository')

exports.serviceList = async()=> {
    const result = await repository.findAll()

    return result
}

exports.serviceView = async(idx) => {
    const [result] = await repository.findOne(idx)

    return result
}

exports.serviceWrite = async(body) => {
    const {subject, user_id, content} = body
    await repository.insert(subject, user_id, content)
}

exports.serviceModify = async(body, idx) =>  {
    const {content} = body
    const [result] = await repository.modi(idx, content)

    return result
}