const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const salt = 10;

const studentData = mongoose.Schema({
    studentID:{
        type: Number,
        required: true,
        min: 1000000
    },
    password:{
        type: String,
        required: true
    },
    course:{
        type: String,
        required: true
    },
    hall :{
        type: String,
        required: true
    }
})

// studentData.pre('save', (next)=>{
//     let stud = this;
//     console.log(stud.password)
//     bcrypt.genSalt(salt , (err, salt)=>{
//         if(err){
//          return next(err)   
//         }
//         bcrypt.hash(stud.password, salt, (err, hash)=>{
//             if(err) {return next(err);}

//             stud.password = hash;
//             next();
//         })
//     })
// })

module.exports = StudentData = mongoose.model('StudentData', studentData);