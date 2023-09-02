const Forms = require("../models/formsModel");

exports.attachPhoto = async (req, res) => {
  try {
    let { name, city, phoneNumber, comment } = req.body;
    const photos = req.files;
    let photosToSave = [];

    Object.keys(photos).forEach((key, i) => {
      let photoPath;
      let photoPathName;
      const photo = photos[key];
      const photoName = photo.name;

      photoPathName = `image-${Date.now()}-${i}-${photoName}`;
      photosToSave.push(photoPathName);

      photoPath = `${__dirname}/../public/files/${photoPathName}`;

      photo.mv(photoPath, (err) => {
        if (err) {
          throw new Error(err);
        }
      });
    });

    await Forms.submitPhotoAttachmentForm({
      name,
      city,
      phoneNumber,
      photosToSave,
      comment,
    });

    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
    });
  }
};

exports.postConsultationForm = async (req, res) => {
  try {
    let { name, city, phoneNumber } = req.body;

    await Forms.postConsultation({
      name,
      city,
      phoneNumber,
    });
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
    });
  }
};

exports.getForms = async (req, res) => {
  try {
    const photoForms = await Forms.getAll();
    const consultationForms = await Forms.getAllConsultationForms();
    res.status(200).json({
      status: "success",
      forms: {
        photoForms: photoForms.rows,
        consultationForms: consultationForms.rows,
      },
    });
  } catch (err) {}
};
