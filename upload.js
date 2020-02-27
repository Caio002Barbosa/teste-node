const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');

module.exports = function upload(req, res) {
  const form = new IncomingForm();

  form.maxFileSize = 5120 * 1024 * 1024;
  try {
    form.on('file', async (field, file) => {
      // Do something with the file
      // e.g. save it to the database
      // you can access it using file.path
      console.log('file', file.name);
      const readStream = fs.createReadStream(file.path);
    });
    form.on('end', () => {
      res.json({'message': 'Uploaded! :)'});
    });
    form.parse(req);
  }catch(e) {
    res.json({'message': 'SEVER ERROR'});
  }
};
