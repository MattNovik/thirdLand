const formWrapper = document.querySelector(".custom-form.first-form");

const initFormSteps = () => {
  if (formWrapper) {
    const firstStepInput = formWrapper.querySelector(
      ".custom-form__input--theme input"
    );
    const firstStepInputWrapper = formWrapper.querySelector(
      ".custom-form__input--theme"
    );
    const firstStepButton = formWrapper.querySelector(
      ".custom-form__button--next"
    );
    const secondStepInputWrapper = formWrapper.querySelector(
      ".custom-form__input--first-email"
    );
    const secondStepButton = formWrapper.querySelector(
      ".custom-form__button--last"
    );

    firstStepInputWrapper.classList.contains("visibility-hidden")
      ? firstStepInput.classList.remove("visibility-hidden")
      : null;
    firstStepButton.classList.contains("visibility-hidden")
      ? firstStepButton.classList.remove("visibility-hidden")
      : null;
    !secondStepInputWrapper.classList.contains("visibility-hidden")
      ? secondStepInputWrapper.classList.add("visibility-hidden")
      : null;
    !secondStepButton.classList.contains("visibility-hidden")
      ? secondStepButton.classList.add("visibility-hidden")
      : null;

    firstStepButton.addEventListener("click", function click() {
      if (firstStepInput.value.length) {
        firstStepInputWrapper.classList.add("visibility-hidden");
        firstStepButton.classList.add("visibility-hidden");
        secondStepButton.classList.remove("visibility-hidden");
        secondStepInputWrapper.classList.remove("visibility-hidden");
      }
    });
  }
};

export { initFormSteps };
