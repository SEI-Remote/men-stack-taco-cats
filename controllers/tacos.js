import { Taco } from '../models/taco.js'

export {
  index,
  create,
  update,
  show,
  deleteTaco as delete,
  flipTasty,
  edit,
  addIngredient,
  removeIngredient
}

function removeIngredient(req, res) {
  Taco.findById(req.params.id)
  .then(taco => {
    let idx = taco.ingredients.indexOf(ingredient => ingredient.name === req.body.name)
    taco.ingredients[idx].remove()
    taco.save()
    .then(()=> {
      res.redirect(`/tacos/${taco._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/tacos/${taco._id}`)
  })
}

function addIngredient(req, res) {
  Taco.findById(req.params.id)
  .then(taco => {
    taco.ingredients.push(req.body)
    taco.save()
    .then(()=> {
      res.redirect(`/tacos/${taco._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/tacos/${taco._id}`)
  })
}

function edit(req, res) {
  Taco.findById(req.params.id)
  .then(taco => {
    res.render('tacos/edit', {
      taco,
      title: "edit 🌮"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tacos')
  })
}

function flipTasty(req, res) {
  Taco.findById(req.params.id)
  .then(taco => {
    taco.tasty = !taco.tasty
    taco.save()
    .then(()=> {
      res.redirect(`/tacos/${taco._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tacos')
  })
}

function deleteTaco(req, res) {
  Taco.findById(req.params.id)
  .then(taco => {
    if (taco.owner.equals(req.user.profile._id)) {
      taco.delete()
      .then(() => {
        res.redirect('/tacos')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tacos')
  })
}


function show(req, res) {
  Taco.findById(req.params.id)
  .populate("owner")
  .then(taco => {
    res.render('tacos/show', {
      taco,
      title: "🌮 show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tacos')
  })
}

function update(req, res) {
  Taco.findById(req.params.id)
  .then(taco => {
    if (taco.owner.equals(req.user.profile._id)) {
      req.body.tasty = !!req.body.tasty
      taco.update(req.body, {new: true})
      .then(()=> {
        res.redirect(`/tacos/${taco._id}`)
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/tacos`)
  })
}

function create(req, res) {
  req.body.owner = req.user.profile
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

function index(req, res) {
  Taco.find({})
  .then(tacos => {
    res.render('tacos/index', {
      tacos,
      title: "🌮"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/tacos")
  })
}