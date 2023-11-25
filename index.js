
const greetWithCallback = (callback) => {
    setTimeout(() => {
        const message = 'Hi! I am Saifullah and greeting from callback';
        callback(null, message);
    }, 1000); 
};


const greetWithPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const message = 'Hi! I am Saifullah and greeting from callback';
        resolve(message);
    }, 3000); 
    });
};

const greetWithAsyncAwait = async () => {
    setTimeout(() => {
        return 'Hi! I am Saifullah and greeting from callback';
    }, 2000);
};

module.exports = { greetWithCallback, greetWithPromise, greetWithAsyncAwait };