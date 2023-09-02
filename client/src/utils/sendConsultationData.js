import axios from "axios";

export const sendConsultationData = (
  data,
  setLoading,
  setMessage,
  setIsShown,
  setIsOpen
) => {
  setLoading(true);
  console.log(data);

  axios
    .post(`http://127.0.0.1:4000/api/v1/forms/consultation`, data, {
      withCredentials: true,
    })
    .then((res) => {
      setMessage(
        "Форма отправлена. В ближайшее время с вами свяжется менеджер."
      );
      setIsShown(true);
    })
    .catch((err) => {
      console.log(err);
      setMessage("Ошибка отправки формы!");
      setIsShown(true);
    })
    .finally(() => {
      setLoading(false);
      setIsOpen(false);
    });
};
