import axios from "axios";

const baseSuccessCallback = (event) => {
  const formData = new FormData(event.target);
  console.log(formData);
  event.target
    .querySelector("button[type='submit'")
    .setAttribute("disabled", "true");
  axios
    .post(
      "https://dev.studservis.ru/wp-content/themes/studservice/ajax/createOrder.php",
      formData,
      {
        auth: {
          username: "admin",
          password: "zde3jnm4HTD.gbq@amv",
        },
      }
    )
    .then((response) => {
      console.log(response);
      if (typeof response.link !== "undefined" && response.link.length > 0) {
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
      }
    })
    .catch((error) => {
      event.target
        .querySelector("button[type='submit'")
        .setAttribute("disabled", "false");
      console.log("error");
    });
  event.preventDefault();
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
