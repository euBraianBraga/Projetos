import Formatters from "./Formatters";

export default class SignupValidations {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  checkValidations() {
    let errors = [];

    if (!Formatters.checkEmail(this.email)) {
      errors["email"] = "Email Invalido";
    }

    if (!Formatters.minLength(this.password, 6)) {
      errors["password"] = "A senha precisa ter no minimo 6 caracteres";
    }

    return errors;
  }

  static getErrorMessageFromCode(errorCode) {
    switch (errorCode) {
      case "EMAIL_EXISTS":
        return "O e-mail já se encontra na nossa base!";
      case "EMAIL_NOT_FOUND":
        return "O e-mail não se encontra na nossa base!";
      case "INVALID_PASSWORD":
        return "Senha invalida";
      default:
        return "Ocorreu um erro inesperado. Por favor, tente novamente";
    }
  }
}
