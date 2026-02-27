import multer from 'multer'
import path from "path"





// image storage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }

})

const fileFilter = (req, file, cb) => {
  // Allow only JPEG and JPG files
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Only JPEG/JPG images are allowed!'), false); // Reject the file
  }
};


    const uploads = multer({
        storage: storage,
        fileFilter: fileFilter,
        limits: {
            fileSize: 1024 * 1024 * 5 // Optional: Limit file size to 5MB
        }
    });

export default uploads;