
import map from 'map-obj';

// Define a type for the function that will be passed as the second argument to mapToArray.
// This function takes two parameters: key and value, both of type string, and returns a value of any type.
type MapFunction = (key: string, value: string) => any;

// Define the type for the mapToArray function. It takes an object and a function as parameters.
// The object is of type Record<string, string>, which means it's an object with string keys and string values.
// The function is of type MapFunction.
// The return type is an array of any type, as the map function can return any type of value.
function mapToArray(obj: Record<string, string>, fn: MapFunction): any[] {
    let idx = 0;
    const result = map(obj, (key, value) => [(idx++).toString(), fn(key, value)]);
    result.length = idx;
    return Array.from(result as any[]);
}

export default mapToArray;