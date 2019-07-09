function throttle(fn, delay) {
    var timer;
    return function() {
        if(timer) {
            return;
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null
        }, delay)
    }
}

function debounce(fn, wait) {
    var timer = null;
    return function () {
        var context = this
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function () {
            fn.apply(context, arguments)
        }, wait)
    }
  }