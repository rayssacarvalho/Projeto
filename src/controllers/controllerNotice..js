const Notice = require('../models/notice')
class NoticeControllers {
  async store (req, res) {
    const notice = Notice.create(req.body)
    return res.json(Notice)
  }
  async update (req, res) {
    const notice = await Notice.findByldAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.json(Notice)
  }
  async delete (req, res) {
    await Notice.findByldAndDelete(req.params.id)
    return res.json({ mensage: 'deleted' })
  }
  async list (req, res) {
    const notice = await Notice.find()
    return res.json(Notice)
  }
  async show (req, res) {
    const notice = await Notice.findById(req.params.id)
    return res.json(Notice)
  }
}
module.exports = new NoticeControllers()
