# Default Parameters in JavaScript

Default parameters are a feature in JavaScript that allows you to set default values for function parameters. This can be useful when a parameter is not required, and a default value can be provided in case no value is passed or if the argument is undefined when called.

## Syntax

The syntax for default parameters is:

```javascript
function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2, parameter3 = defaultValue3) {
  // code block
}
```

The default parameter will be used if no argument is passed or if the argument is undefined when called.

A function block can have required parameters, optional parameters, and default parameters.

## Example

Here is an example of a function block with required parameters, optional parameters, and default parameters:

```javascript
function exampleFunction(requiredParam1, requiredParam2, optionalParam1, optionalParam2 = 'default value') {
  console.log(requiredParam1);
  console.log(requiredParam2);
  console.log(optionalParam1);
  console.log(optionalParam2);
}

exampleFunction('hello', 'world', 'optional value');
// Output:
// hello
// world
// optional value
// default value
```

In the above example, `requiredParam1` and `requiredParam2` are required parameters, whereas `optionalParam1` and `optionalParam2` are optional parameters with default values.

## Tips and Best Practices

- Use default parameters sparingly: Default parameters should only be used when necessary, and when their use would make the function more concise and easier to read.
- Use simple default values: Default values should be simple and straightforward, such as null, false, or an empty string.
- Use undefined to indicate missing arguments: If a parameter is optional and not passed, use undefined instead of a default value. This will make it clear that the argument was intentionally left blank.

Default parameters can also be assumed as optional parameters. Optional parameters are parameters that are not required when calling a function.