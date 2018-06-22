function iterator() {
    let i = 0;
    return {
        next() {
            return {
                value: i++
            }
        },
        [Symbol.iterator]() {
            return this
        }
    };
}

function take(n, iter) {
    return {
        next() {
            const val = iter.next();
            if (val.value < n) {
                return {
                    value: val.value++
                }
            } else {
                return {
                    done: true
                }
            }
        },
        [Symbol.iterator]() {
            return this
        }
    }
}

for (let elt of take(3, iterator())) {;
    console.log(elt);
}