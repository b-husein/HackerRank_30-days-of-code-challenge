function processData(input) {
    const inputs = input.split('\n');

    if (!inputs || inputs.length < 2) {
        return;
    }

    const [testCases, ...stringsToCheck] = inputs;

    if (testCases < 1 || testCases > 10) {
        return;
    }

    for (const stringToCheck of stringsToCheck) {
        if (!stringToCheck || stringToCheck.length < 2 || stringToCheck.length > 10000) {
            continue;
        }

        const isEven = num => num % 2 ? false : true;
        let evenGroup = '';
        let oddGroup = '';

        stringToCheck
            .split('')
            .forEach((letter, index) => {
                if (isEven(index)) {
                    evenGroup += letter;
                } else {
                    oddGroup += letter;
                }
            });

        console.log(`${evenGroup} ${oddGroup}`);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
