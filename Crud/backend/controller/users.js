const { errorMonitor } = require('events');
const User = require('../model/users');


module.exports.createUser = (req, res)=>{

    User.findOne({email: req.body.email}, (err, user)=>{
        if(err){
            console.log(`error in finding while signing up`);
            res.send({message: "error in finding mail"})
            // return ;
        }
        if(!user){
            console.log(req.body);
            User.create({
                name : req.body.name,
                email: req.body.email,
                designation: req.body.designation,
                password: req.body.password
            }, (err, user)=>{
                if (err) {
                    console.log(`error in creation`);
                    res.send(err)
                    // return res.status(500).json({error:"internal server issue"});
                }
                res.send({message: "Created Successfully, Plz Login Now"});
                // return res.status(200).json({data:{
                //     message: "Created successfully"
                //     }
                // });
            })
        }else{
            res.send({message: "User already exist"})
            // return res.status(404).json({error:" field data is incorrect"});
        }
    })
}

module.exports.viewUsers = (req, res)=>{
    User.find({}, (err, user)=>{
        if(err){
            return res.status(500).json({error:"internal server issue"});
        }else{
            let users = user.map((value)=>{
                return {
                    name : value.name,
                    email: value.email,
                }
            });
            return res.status(200).json({data: {Users: users}});
        }   
    })
}

module.exports.login = (req, res)=>{

    User.findOne({email: req.body.email}, (err, user)=>{
        if(err){
            res.send({message: "Error in finding mail"});
        }else{
            if(user){
                if(user.password === req.body.password){
                    // let details = {
                    //     email : user.email,
                    //     password: user.password,
                    // }
                   res.send({message: "successfully logged",
                        user: user })
                }else{
                    res.send({message: "Password incorrect"})
                }
               
            }else{
                res.send({message: "User not registered"});
            }
        }
    })
}

module.exports.update = async (req, res)=>{
    // console.log(req.params);
    // console.log(req.body);
   let usr = await User.findByIdAndUpdate(req.params.id, {name: req.body.name, email: req.body.email, designation: req.body.designation});
   res.send({message: " updated successfully" , user : usr
})

}

module.exports.delete = (req, res)=>{
    console.log(req.params);
  User.findByIdAndDelete(req.params.id, (err)=>{
    if (err) {
        res.send({message: "deletion unsuccessfull"});
    }else{
        res.send({message: "Deleted successfully"});
    }
  });
 
    
}

