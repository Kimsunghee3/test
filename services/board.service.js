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

exports.serviceModify = async(idx) =>  {
    const [result] = await repository.findOne(idx)
    return result
}

exports.servicePostModify = async(body, idx) => {
    const {content} = body
    await repository.update(content, idx)
}

exports.serviceDelete = async (idx) => {
    await repository.delete(idx)
}