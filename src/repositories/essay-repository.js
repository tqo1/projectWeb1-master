'use strict'

const mongoose = require('mongoose');
const Essay = mongoose.model('Essay');

exports.get = async() => {
    let res = await Essay.find({}, 'content deadline wordCount isRequired');
    return res;
}

exports.getById = async(schoolId) => {
    let res = await Essay.findById(schoolId, 'content deadline wordCount isRequired');
    return res;
}

exports.create = async(data) => {
    let essay = new Essay(data);
    await essay.save();
}

