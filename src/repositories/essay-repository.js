'use strict'

const mongoose = require('mongoose');
const Essay = mongoose.model('Essay');

exports.get = async() => {
    let res = await Essay.find({}, 'created');
    return res;
}

exports.getById = async(id) => {
    let res = await Essay.findById(id, 'created');
    return res;
}

exports.create = async(data) => {
    let essay = new Essay(data);
    await essay.save();
}

