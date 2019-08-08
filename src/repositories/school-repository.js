'use strict'

const mongoose = require('mongoose');
const School = mongoose.model('School');

exports.get = async() => {
    let res = await School.find();
    return res;
}

exports.getById = async(id) => {
    let res = await School.findById(id, 'name city country created');
    return res;
}

exports.create = async(data) => {
    let school = new School(data);
    await school.save();
}

exports.delete = async(id) => {
    let school = School.findByIdAndDelete(id);
    await school;//.remove()
}

