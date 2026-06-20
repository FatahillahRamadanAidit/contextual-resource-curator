const { UserProfile } = require("../../models");

exports.createProfile = async (req, res) => {
  try {

    const existingProfile = await UserProfile.findOne({
      where: {
        userId: req.user.id
      }
    });

    if (existingProfile) {

      await existingProfile.update({
        skillLevel: req.body.skillLevel,
        interest: req.body.interest,
        goal: req.body.goal,
        progressScore: req.body.progressScore || 0
      });

      return res.status(200).json({
        message: "Profile updated successfully",
        profile: existingProfile
      });
    }

    const profile = await UserProfile.create({
      userId: req.user.id,
      skillLevel: req.body.skillLevel,
      interest: req.body.interest,
      goal: req.body.goal,
      progressScore: req.body.progressScore || 0
    });

    res.status(201).json({
      message: "Profile created successfully",
      profile
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getProfile = async (req, res) => {
  try {

    const profile = await UserProfile.findOne({
      where: {
        userId: req.user.id
      }
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found"
      });
    }

    res.status(200).json(profile);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {

    const profile = await UserProfile.findOne({
      where: {
        userId: req.user.id
      }
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found"
      });
    }

    await profile.update({
      skillLevel: req.body.skillLevel,
      interest: req.body.interest,
      goal: req.body.goal,
      progressScore: req.body.progressScore
    });

    res.status(200).json({
      message: "Profile updated successfully",
      profile
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};