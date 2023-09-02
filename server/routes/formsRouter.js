const express = require("express");
const formsController = require("../controllers/formsController");
const fileUpload = require("express-fileupload");

const router = express.Router();

router.route("/").get(formsController.getForms);

router
  .route("/attachPhoto")
  .post(fileUpload({ createParentPath: true }), formsController.attachPhoto);

router.route("/consultation").post(formsController.postConsultationForm);

module.exports = router;
