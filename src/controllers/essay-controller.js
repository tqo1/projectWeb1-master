'use strict'

const repository = require('../repositories/essay-repository');
const validationContract = require('../validators/validator');
//const authService = require('../services/auth-service');
//const md5 = require('md5');
// User = require('.user');//
/**
 * @api {get} /essay Request Essay information
 * @apiName GetEssays
 * @apiGroup Essay
 * 
 * @apiSuccess {ObjectId} schoolId Full name of the school
 * @apiSuccess {Integer} wordCount City of User.
 * @apiSuccess {Date} deadline Country of the User.
 * @apiSuccess {Boolean} isRequired  Require was created.
 * @apiSuccess {String} content  content was created.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "schoolId": some id,
 *              "wordCount": "New York"
 *              "deadline": "2018-01-01"
 *              "isRequired": "true",
 *          }
 *     ]
 *
 */
exports.get = async(req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({message: 'Fail to get all essays'});
    }
}

exports.getById = async(req, res, next) => {
    try {
        let data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({message: 'Fail to get the specific essay'});
    }
}

exports.getBySchoolId = async(req, res, next) => {
    try {
        let data = await repository.getBySchoolId(req.params.schoolId);
        res.status(200).send(data);
    } catch(e) {
        console.log(e);
        res.status(500).send({message: 'Fail to get the specific essay'});
    }
}

/**
 * @api {post} /user/ Create a new School
 * @apiName CreateSchool
 * @apiGroup School
 *
 * @apiSuccess {String} name Full name of the school
 * @apiSuccess {String} city City of User.
 * @apiSuccess {String} country Country of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "User created"
 *     }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *        "errors": {}
 *     }
 *   
 * 
 */
exports.post = async(req, res, next) => {
    try {
        // let contract = new validationContract();
        // contract.hasMinLen(req.body.name, 3, 'The name has to be at least 3 characters');
        // contract.isEmail(req.body.email, 'Invalid email');
        // contract.hasMinLen(req.body.password, 6, 'The password has to be at least 3 characters');

        // if(!contract.isValid()) {
        //     res.status(400).send(contract.errors()).end();
        //     return;
        //
        // }    
        await repository.create({
            schoolId: req.body.schoolId,
            wordCount: req.body.wordCount,
            deadline: req.body.deadline,
            isRequired: req.body.isRequired,
            content: req.body.content,
        });
  
        res.status(200).send({message: 'Essay created'});
    } catch(e) {
        res.status(500).send({error: e});
    }
}

