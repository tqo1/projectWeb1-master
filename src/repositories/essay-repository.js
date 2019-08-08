'use strict'

const mongoose = require('mongoose');
const Essay = mongoose.model('Essay');

exports.get = async() => {
    let res = await Essay.find({}, 'content deadline wordCount isRequired');
    return res;
}

exports.getById = async(id) => {
    let res = await Essay.findById(id, 'content deadline wordCount isRequired');
    return res;
}

exports.getBySchoolId = async(schoolId) => {
    let res = await Essay.find({schoolid:mongoose.Types.objectid(schoolId)});
    return res;
}

exports.create = async(data) => {
    let essay = new Essay(data);
    await essay.save();
}

