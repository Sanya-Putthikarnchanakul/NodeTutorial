class Result {
    isError = false;

    constructor (isError, errorCode, errorMessage) {
        this.isError = isError;
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }
}

module.exports = Result;