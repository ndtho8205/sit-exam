/* eslint-disable max-classes-per-file */

class ExtendableError extends Error {
  constructor(statusCode, messages) {
    super();

    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.messages = [].concat(messages);
  }

  toJSON() {
    return {
      error: {
        name: this.name,
        statusCode: this.statusCode,
        messages: this.messages,
        stack: this.stack,
      },
    };
  }
}

class RequestError extends ExtendableError {
  constructor(messages) {
    super(400, messages);
  }
}

class ValidationError extends ExtendableError {
  constructor(messages) {
    super(422, messages);
  }
}

class ServerError extends ExtendableError {
  constructor(messages) {
    super(500, messages);
  }
}

class DatabaseError extends ExtendableError {
  constructor(messages) {
    super(500, messages);
  }
}

class NotFoundError extends ExtendableError {
  constructor() {
    super(404, 'Not Found.');
  }
}

module.exports = {
  RequestError,
  ValidationError,
  ServerError,
  DatabaseError,
  NotFoundError,
};
