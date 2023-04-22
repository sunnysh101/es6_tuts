// The Syntax for default parameters is:

function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2, parameter3 = defaultValue3) {
    // code block
}

// Default parameter will be used if no argument is passed or if the argument is undefined when called

// A function block can have required parameters, optional parameters, and default parameters

// Example of a function block with required parameters, optional parameters, and default parameters
function functionName(parameter1, parameter2, parameter3 = defaultValue3) {
    // code block
}


// Tips / Best practises for default parameters

// Use default parameters sparingly: Default parameters should only be used when necessary, and when their use would make the function more concise and easier to read.
// Use simple default values: Default values should be simple and straightforward, such as null, false, or an empty string.
//Use undefined to indicate missing arguments: If a parameter is optional and not passed, use undefined instead of a default value. This will make it clear that the argument was intentionally left blank.

// Default parameter can also be assumed as optional parameter
// Optional parameter is a parameter that is not required when calling a function