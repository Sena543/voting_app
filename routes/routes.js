const router = require('express').Router();
const bcrypt = require('bcryptjs');

const StudentData = require('../models/studentSchema')

router.get('/', (req, res)=>{
    const customers = [
        {id:1, firstname:'John', lastname:'Doe'},
        {id:2, firstname:'Marg', lastname:'Thatcher'},
        {id:1, firstname:'Kwame', lastname:'Nkrumah'}
    ]

    res.send(customers);
})

router.post('/login', (req, res)=>{
    //console.log(req.body)
  const {studentID, password} =  req.body
  if(studentID == ''|| password== '') return;
  //console.log(password)
  StudentData.findOne({studentID}, (err, student)=>{
      if(err)return console.error(err);
      //console.log(student.password)
      bcrypt.compare(password, student.password, (err, isMatch)=>{
          //console.log(isMatch)
          if(err)return console.error(err);
          if(isMatch){
              return res.json({isLoggedIn:'true'})
          }

          res.json({message:'could not verify'})
      })
  })
})

router.post('/register', (req, res)=>{
    let {studentID,password, confirmpassword, course, hall} = req.body;
    if(password !== confirmpassword){
        return res.json({message:'Passwords do not match'})
    }
   StudentData.findOne({studentID}, (err, found)=>{
       if( err) console.log(err);
       if(found) {console.log(found, 'student was found in the database'); return res.json({found:'student was found in database'})}
       else{
           bcrypt.genSalt(10, (err, salt)=>{
               if(err) console.log(err);
               bcrypt.hash(password, salt, (err, hash)=>{
                   if(err){ console.log(err)};
                   password = hash;
                   const student =new StudentData({
                    studentID,
                    password,
                    course,
                    hall,        
                })
                   //console.log('Hashed password:',password)
                   student.save((err, student)=>{
                       if(err) return console.error(err)
                       student
                   })
                   res.json({message:'student details were saved'})
               })
           } )
       }

   })
    
})

module.exports = router;

/**
 * put the react components in the back 
 * send it as a response to the client
 * use the state to receive the components and then use componentsDidMount to render on to DOM
 * OR
 * use conditional rendering to receive a boolean value from the server to render the page
 */

  /**
     * TODO for login route
     * find student in database
     * check if password is the same as entered pass
     * send a response if true
     */