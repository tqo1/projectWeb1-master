'use strict'

const mongoose = require('mongoose');
const Essay = mongoose.model('Essay');
var ObjectId = require('mongoose').Types.ObjectId; 

exports.get = async() => {
    let res = await Essay.find({}, 'content deadline wordCount isRequired');
    return res;
}

exports.getById = async(id) => {
    let res = await Essay.findById(id, 'content deadline wordCount isRequired');
    return res;
}

exports.getBySchoolId = async(schoolId) => {
    let res = await Essay.find({schoolId: ObjectId(schoolId)});
    return res;
}

exports.create = async(data) => {
    let essay = new Essay(data);
    await essay.save();
}

