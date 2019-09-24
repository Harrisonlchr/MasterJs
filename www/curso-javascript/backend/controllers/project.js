'use strict'

var Project = require('../models/project');

var controller = {
  home: function(req, res){
    return res.status(200).send({
      message: 'Soy la home'
    });
  },

  test: function(req, res){
    return res.status(200).send({
      message: 'Soy el metodo test del controlador'
    });
  },

  saveProject: function(req, res){
    var project = new Project();

    var params = req.body;
    project.name = params.name;
    project.description = params.description;
    project.category = params.category;
    project.year = params.year;
    project.langs = params.langs;
    project.image = null;

    project.save((err, projectStored) => {
      if (err) return res.status(500).send({message: 'Error al guardar el documento'});

      if (!projectStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto'});

      return res.status(200).send({project: projectStored});


    });
  },

  getProjects: function (req, res) {
    Project.find({}).sort('-year').exec((err, projects) => {

      if (err) return res.status(500).send({message: 'Error al devolver los datos'});

      if (!projects) return res.status(404).send({message: 'No hay proyectos para mostrar'});

      return res.status(200).send({projects});
    })

  },

  updateProjects: function (req, res) {
    var projectId = req.params.id;
    var update = req.body;

    Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) => {
      if (err) return res.status(500).send({message: 'Error al actualizar'});

      if (!projectUpdated) return res.status(400).send({message: 'No existe el proyectos'});

      return res.status(200).send({
        project: projectUpdated
      });

    });
  },

  deleteProject: function (req, res){
    var projectId = req.params.id;

    Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
      if (err) return res.status(500).send({message: 'No se ha podido borrar el proyecto'});
      if (!projectRemoved) return res.status(404).send({message: 'No se puede eliminar ese proyecto'});
      return res.status(200).send({

        project: projectRemoved
      });
    });
  }

};

module.exports = controller;
