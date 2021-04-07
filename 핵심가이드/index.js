function test(o) {
    let i = 0;
    if (o == 1) {
        let j = 0;
        for (let k = 0; k < 10; k++) {
            document.write(k);
        }
        document.write(`last k: ${k}`);
    }
    document.write(j);
}

let o = 1;
test(o);