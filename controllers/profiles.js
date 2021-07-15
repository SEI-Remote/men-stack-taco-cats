import { Profile } from '../models/profile.js'

export {
  createCat,
  index,
  show,
  deleteCat,
}

function deleteCat(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    let idx = profile.cats.indexOf(cat => cat._id === req.params.id)
    profile.cats.splice(idx, 1)
    profile.save()
    .then(()=> {
      res.redirect(`/profiles/${req.user.profile}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile}`)
  })
}

function createCat(req, res) {
  Profile.find(req.user.profile)
  .then(profile => {
    profile.cats.push(req.body)
    profile.save()
    .then(() => {
      res.redirect('')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile}`)
  })
}

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: "🐱"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile}`)
  })
}

// function show(req, res) {
//   Profile.findById(req.params.id)
//   .then(profile => {
//     res.render('profiles/show', {
//       profile
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect(`/profiles/${req.user.profile}`)
//   })
// }

function show(req, res) {
  Profile.findById(req.params.id)
  .populate("friends")
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render("profiles/show", {
        title: `🐱 ${profile.name}'s profile`,
        profile,
        self,
        isSelf,
      })
    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect("/")
  })
}