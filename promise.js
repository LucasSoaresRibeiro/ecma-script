const firstPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('firstPromise finished');
    }, 1000);
});

const secondPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('secondPromise finished')
    }, 2000);
});

// Promise.all([firstPromise, secondPromise]).then(data => console.log(data))
firstPromise.then(data => console.log(data));
secondPromise.then(data => console.log(data));