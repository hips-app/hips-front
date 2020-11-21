const getUrlFormFile = async (file) => {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = () => {
      reject(new Error('Error when try to read file'));
    };
    reader.readAsDataURL(file);
  });
};
export default {
  getUrlFormFile,
};
