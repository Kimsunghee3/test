const service = require('../services/board.service')

exports.getList = async(req, res) => {
    const itemList = await service.serviceList()
    // res.send('list teest')
    res.render('board/list.html', {itemList})
}

exports.getWrite = (req, res) => {
    // console.log(req)
    res.render('board/write.html')
}

// this.getList()
exports.getView = async(req, res) => {
    const itemView = await service.serviceView(req.query.index)
    // res.send('view test')
    res.render('board/view.html',{itemView})
}

exports.postWrite = async(req, res) => {
    await service.serviceWrite(req.body)
    res.redirect('/board/list')
}

exports.getModify = async(req, res) => {
    onsole.log(req)
    const itemModify = await service.serviceModify(req.query.index) 
    res.render('board/modify.html', {itemModify})
}

exports.postModify = async(req, res) => {
    console.log(req)
    await service.servicePostModify(req.body, req.query.index)
    res.redirect(`/board/view?index=${req.query.index}`)
}

exports.postdelete = async (req, res) => {
    await service.serviceDelete(req.query.index)
    res.redirect('/board/list')
}