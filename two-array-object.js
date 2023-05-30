/**This problem can be solved by iterating over the keys array and assigning each key the corresponding value from the values array. If there is no value for a key, we assign it null. */
function twoArrayObject(keys, values) {
    let result = {};

    for(let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i] !== undefined ? values[i] : null;
    }
    return result;
}
