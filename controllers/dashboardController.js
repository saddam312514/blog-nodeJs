
const Flash = require('../utils/Flash')
const Profile = require('../models/Profile')
exports.dashboardGetController = async (req,res,next) => {

    try
    {
        let profile = await Profile.findOne({
            user: req.user._id})
        if(profile){
            res.render('pages/dashboard/dashboard',
            {
                title: 'My Dashboard',
                flashMessage:Flash.geMessage(req)
               })
        }
        res.redirect('/dashboard/create-profile')
    }catch(e){
        next(e)
    }
    res.render('pages/dashboard/dashboard',
     {
         title: 'My Dashboard',
         flashMessage:Flash.geMessage(req)
        })
}

exports.createProfileGetController = async (req,res,next) =>{
    try {
        let profile = await Profile.findOne({user: req.user._id})
            if(profile){
               return res.redirect('/dashboard/edit-profile')
            }
          res.render('pages/dashboard/create-profile',
        {title: 'Create your profile',
    flashMessage: Flash.geMessage(req)
    }
            )
    }catch(e){
        next(e)
    }
   
}

exports.createProfilePostController = (req,res,next) =>{
    next()
}
exports.editProfileGetController = (req,res,next) =>{
    next()
}