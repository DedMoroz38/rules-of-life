import axios from "axios";

export const sendPhotoAttachment = (
  photos,
  props,
  setLoading,
  setMessage,
  setIsShown,
  setIsOpen
) => {
  setLoading(true);

  const data = new FormData();

  Object.keys(photos).forEach((key) => {
    const item = photos[key];
    data.append(item.name, item);
  });
  Object.keys(props).forEach((key) => {
    const item = props[key];
    data.append(`${key}`, item);
  });

  axios
    .post(`http://127.0.0.1:4000/api/v1/forms/attachPhoto`, data, {
      withCredentials: true,
    })
    .then((res) => {
      console.log("success");
      setMessage(
        "Форма отправлена. В ближайшее время с вами свяжется менеджер."
      );
      setIsShown(true);
    })
    .catch((err) => {
      setMessage("Ошибка отправки формы!");
      setIsShown(true);
    })
    .finally(() => {
      setLoading(false);
      setIsOpen(false);
    });
};
