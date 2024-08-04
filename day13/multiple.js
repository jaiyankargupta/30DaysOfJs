export function mul(a,b){
    return a*b;
}

export function div(a,b){
    if(b!=0){
        return a/b;
    }
    else{
        throw new Error('Division by zero is not allowed');
    }
}