class ApiError extends Error{
    constructor(statusCode,msg,errors=[],stack){
        super(msg)
        this.statusCode=statusCode
        this.error = errors
        this.data=null
        this.message=msg
        this.success= false

        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }

}

export {ApiError}