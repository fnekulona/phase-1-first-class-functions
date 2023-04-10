function receivesAFunction(callback){
    console.log(callback());
}
receivesAFunction(callback);

function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return (function() {});
}