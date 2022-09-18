class ApiError {
  constructor(message, code) {
    this.name = "ApiError";
    this.message = message;
    this.code = code;
  }

  static badRequest(msg) {
    return new ApiError(msg, "400");
  }
}

export default ApiError;
