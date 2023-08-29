import axios from "axios";

const baseSuccessCallback = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  axios
    .post("https://back.studuniverse.ru/api/public/user", formData)
    .then((response) => {
      console.log(response);
      if (
        typeof response.data.data.authlink !== "undefined" &&
        response.data.data.authlink > 0
      ) {
        return (window.location.href = response.link);
      } else {
        return (window.location.href = "https://studservis-lk.ru/");
      }
    })
    .catch((error) => {
      alert("Ошибка! Попробуйте ещё раз");
      console.log("error");
    });
  // В данном колбеке бэкендер, либо разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер
};

const baseErrorCallback = (event) => {
  console.log(event);
  console.log("error");
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
