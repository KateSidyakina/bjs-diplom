"use strict";

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
  try {
    ApiConnector.login(data, (response) => {
      if (response.success === true) {
        location.reload();
      }
    });
  } catch (error) {
    console.error(error);
  }
};

userForm.registerFormCallback = (data) => {
  try {
    ApiConnector.register(data, (response) => {
      if (response.success === true) {
        location.reload();
      }
    });
  } catch (error) {
    console.error(error);
  }
};