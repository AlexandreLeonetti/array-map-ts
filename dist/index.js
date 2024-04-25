import map from 'map-obj';
// Define the type for the mapToArray function. It takes an object and a function as parameters.
// The object is of type Record<string, string>, which means it's an object with string keys and string values.
// The function is of type MapFunction.
// The return type is an array of any type, as the map function can return any type of value.
function mapToArray(obj, fn) {
    let idx = 0;
    const result = map(obj, (key, value) => [(idx++).toString(), fn(key, value)]);
    result.length = idx;
    return Array.from(result);
}
export default mapToArray;
