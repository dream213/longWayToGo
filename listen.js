let listeners = [];
/**
 * 订阅事件的调用方是listen
 * @param {*} fn 
 */
const appendListener = fn => {
    let isActive = true;

    const listener = (...args) => {
        if (isActive) fn(...args);
    };
    listeners.push(listener);
    // 返回一个可以取消listen的函数
    return () => {
        isActive = false;
        listeners = listeners.filter(item => item !== listener);
    };
};

/**
 * 发布事件的调用方是setState
 * @param  {...any} args 
 */
const notifyListeners = (...args) => {
    listeners.forEach(listener => listener(...args));
};

/**
 * setState方法, 将当前state存入history,
 */