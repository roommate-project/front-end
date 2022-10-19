export const convertFileToBase64 = (file: File, callback: CallableFunction) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = e => {
    const convertedImage: any = e.target?.result;
    callback(convertedImage.replace(/data:.*base64,/, ''));
  };
};
