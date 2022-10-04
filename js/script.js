'use strict';
( function () {
    const deepFreeze = item => {
        for (const itemKey in item) {
            if (typeof item[itemKey] === 'object') {
                Object.freeze(item);
                deepFreeze(item[itemKey]);
            }
        }
    }
    const user = {
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: {
                a1: 1,
                b1: 2,
                c1: 3,
                d1: {
                    a2: 3,
                    b2: 3,
                    c2: 3,
                }
            }
        }
    }
    deepFreeze(user)

})()