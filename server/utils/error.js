/* eslint-disable max-classes-per-file */

class CustomError extends Error {
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

class RequestError extends CustomError {
  constructor(messages) {
    super(400, messages);
  }
}

class ValidationError extends CustomError {
  constructor(messages) {
    super(422, messages);
  }
}

class ServerError extends CustomError {
  constructor(messages) {
    super(500, messages);
  }
}

class DatabaseError extends CustomError {
  constructor(messages) {
    super(500, messages);
  }
}

const handleError = (err, res) => {
  const { name } = err;
  if (!res.headersSent) {
    res.status(err.statusCode || 500).json({
      error: {
        name,
        statusCode: err.statusCode || 500,
        messages: err.messages || [err.message],
      },
    });
  }
};

module.exports = {
  RequestError, ValidationError, ServerError, DatabaseError, handleError,
};
