import { Taco } from '../models/taco.js'

function index(req, res) {
  Taco.find({})
  .then(tacos => {
    res.render('tacos/index', {
      tacos, // tacos: tacos,
      title: "🌮",
      user: req.user ? req.user : null
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.tasty = !!req.body.tasty
  Taco.create(req.body)
  .then(taco => {
    res.redirect('/tacos')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tacos')
  })
}

function show(req, res) {
  Taco.findById(req.params.id)
  .populate('owner')
  .then(taco => {
    console.log(taco)
    res.render('tacos/show',{
      taco, // taco: taco
      title: "🌮 show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/tacos")
  })
}

export {
  index,
  create,
  show
}