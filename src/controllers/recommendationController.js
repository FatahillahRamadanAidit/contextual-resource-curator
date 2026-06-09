const { UserProfile, Resource, RecommendationLog } = require("../../models");

exports.getRecommendations = async (req, res) => {
  try {

    const profile = await UserProfile.findOne({
      where: {
      userId: req.user.id
    },
      order: [["id", "DESC"]]
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found"
      });
    }

    const resources = await Resource.findAll({
      where: {
        category: profile.interest,
        level: profile.skillLevel
      }
    });

    console.log("RESOURCES:", resources);

    for (const resource of resources) {

      await RecommendationLog.create({
        userId: req.user.id,
        resourceId: resource.id,
        recommendationReason:
          `Matched ${profile.interest} and ${profile.skillLevel}`
      });

    }

    res.status(200).json({
      profile,
      recommendations: resources
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getRecommendationHistory = async (req, res) => {
  try {
    const logs = await RecommendationLog.findAll({
      where: {
        userId: req.user.id
      },
      include: [
        {
          model: Resource,
          as: "resource"
        }
      ]
    });

    res.status(200).json(logs);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getHistory = async (req, res) => {
  try {

    const history =
      await RecommendationLog.findAll({

        where: {
          userId: req.user.id
        },

        include: [
          {
            model: Resource,
            as: "resource"
          }
        ],

        order: [
          ["createdAt", "DESC"]
        ]
      });

    res.status(200).json(history);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};