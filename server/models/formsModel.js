const pool = require("../db");
const {
  jsArrayToSQLArrayConverter,
} = require("../libs/jsArrayToPostgresConverter");

exports.submitPhotoAttachmentForm = async (data) => {
  const { name, city, phoneNumber, photosToSave, comment } = data;
  const arrayOfFileNames = jsArrayToSQLArrayConverter(photosToSave);

  return pool.query(
    `INSERT INTO photo_attachments
       (name, city, phone_number, file_names, comment)
       VALUES('${name}', '${city}', '${phoneNumber}', ARRAY ${arrayOfFileNames}, '${comment}') 
     `
  );
};

exports.postConsultation = async (data) => {
  const { name, city, phoneNumber } = data;

  return pool.query(
    `INSERT INTO consultation_forms
       (name, city, phone_number)
       VALUES('${name}', '${city}', '${phoneNumber}') 
     `
  );
};

exports.getAll = async () => {
  return pool.query(
    `
    SELECT * 
    FROM photo_attachments
    ORDER BY id DESC;
    `
  );
};

exports.getAllConsultationForms = async () => {
  return pool.query(
    `
    SELECT * 
    FROM consultation_forms 
    ORDER BY id DESC;
    `
  );
};
