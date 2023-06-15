import axios from "axios";

const baseSuccessCallback = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  axios
    .post(
      "https://back.studuniverse.ru/api/public/user",
      formData,
    )
    .then((response) => {
      console.log(response);
      if (typeof response.link !== "undefined" && response.link.length > 0) {
        return (window.location.href = response.authLink);
      }
      if (response.order_id && response.action === "userIsset") {
        return (window.location.href =
          "https://dev2.studservis-lk.ru/" +
          "orders/newOrder/id=" +
          response.order_id +
          "/new/");
      } else {
        return (window.location.href = "https://dev2.studservis-lk.ru/");
      }
      /* if (typeof response.link !== "undefined" && response.link.length > 0) {
        return (window.location.href = response.link);
      }
      if (response.order_id && response.action === "userIsset") {
        return (window.location.href =
          "https://studservis-lk.ru/" +
          "orders/newOrder/id=" +
          response.order_id +
          "/new/");
      } else {
        return (window.location.href = "https://studservis-lk.ru/");
      } */
    })
    .catch((error) => console.log(error));
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
