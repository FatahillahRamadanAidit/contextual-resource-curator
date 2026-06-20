const { Resource } = require("../../models");

exports.createResource = async (req, res) => {
  try {

    const resource = await Resource.create({
      title: req.body.title,
      category: req.body.category,
      level: req.body.level,
      topic: req.body.topic,
      description: req.body.description,
      url: req.body.url
    });

    res.status(201).json({
      message: "Resource created successfully",
      resource
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getResources = async (req, res) => {
  try {

    const resources = await Resource.findAll();

    res.status(200).json(resources);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};