class ApiError {
  constructor(message, code) {
    this.name = "ApiError";
    this.message = message;
    this.code = code;
  }

  static badRequest(msg) {
    return new ApiError(msg, "400");
  }
  static serverError(msg) {
    return new ApiError(msg, "500");
  }
  static unauthenticated(msg) {
    return new ApiError(msg, "401");
  }
}

export default ApiError;
