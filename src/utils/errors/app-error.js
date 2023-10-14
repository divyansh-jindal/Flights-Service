class AppError extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
        this.explanation=this.message;
    }
}

module.exports=AppError;