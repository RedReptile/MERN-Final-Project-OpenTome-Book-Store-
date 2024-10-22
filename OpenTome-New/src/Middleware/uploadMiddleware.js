const multer = require('multer');
const { diskStorage } = require('multer');
const path = require('path');

// Function to sanitize file names
const sanitizeFileName = (imageName) => {
  return imageName
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^a-zA-Z0-9_\-\.]/g, ""); // Allow only alphanumeric characters, hyphens, and periods
};

// Filename function to set file names
const filename = (req, file, next) => {
  const ext = path.extname(file.originalname); // Get the file extension
  const name = path.basename(file.originalname, ext); // Get the base name without extension
  next(null, `${sanitizeFileName(name)}-${Date.now()}${ext}`);
};

// File filter function to allow only certain types of files
const filter = (req, file, next) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "application/pdf"];
  if (allowedTypes.includes(file.mimetype)) {
    next(null, true);
  } else {
    next(new Error("Only .jpeg, .jpg, .png, .gif, and .pdf formats allowed!"));
  }
};

// Function to get the destination path dynamically
const getDestination = (folderName) => {
  return (req, file, next) => {
    next(null, path.join(__dirname, `../../uploads/${folderName}`));
  };
};

// Storage configurations for book images
const bookImageStorage = diskStorage({
  destination: getDestination("books"),
  filename: filename,
});

// Multer instance for book images
const bookImage = multer({
  storage: bookImageStorage,
  fileFilter: filter,
});

// Storage configurations for profile images
const profileImageStorage = diskStorage({
  destination: getDestination("profileImages"),
  filename: filename,
});

// Multer instance for profile images
const profileImageUpload = multer({
  storage: profileImageStorage,
  fileFilter: filter,
});

module.exports = { bookImage, profileImageUpload };
