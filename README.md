# validazz

[![Generated with nod](https://img.shields.io/badge/generator-nod-2196F3.svg?style=flat-square)](https://github.com/diegohaz/nod)
[![NPM version](https://img.shields.io/npm/v/validazz.svg?style=flat-square)](https://npmjs.org/package/validazz)
[![Build Status](https://img.shields.io/travis//master.svg?style=flat-square)](https://travis-ci.org/) [![Coverage Status](https://img.shields.io/codecov/c/github//master.svg?style=flat-square)](https://codecov.io/gh//branch/master)

Magical, Flexible and Extendible Javascript Validation.

## Install

npm:

    npm i validazz

Yarn:

    yarn add validazz

## Usage

```js
import Validator, { rules } from 'validazz'

const mySuperCoolValidator = Validator.factory()

// Let's add some rules
mySuperCoolValidator.addRule(rules.isRequired)
mySuperCoolValidator.addRules([rules.minLength(2), rules.maxLength(8)])
mySuperCoolValidator.addRule(rules.isString)

// How about a custom rule?
const customRule = {
  runWithValue: value => {
    if (value !== '🤪') return false
    return true
  },
  message: 'Houston, we got a problem',
}
mySuperCoolValidator.addRule(customRule)

// Okay let's start validating
const { success, failed } = mySuperCoolValidator.runWithValue('hello')
if (success) {
  console.log('Wow, this was validated just like that')
} else {
  const { message } = failed
  console.log(`Okay so here's the error message: ${failed}`)
}
```

For a list of all the included rules, be sure to check the [RULES.md]() file

## API

# validazz

[![Generated with nod](https://img.shields.io/badge/generator-nod-2196F3.svg?style=flat-square)](https://github.com/diegohaz/nod)
[![NPM version](https://img.shields.io/npm/v/validazz.svg?style=flat-square)](https://npmjs.org/package/validazz)
[![Build Status](https://img.shields.io/travis//master.svg?style=flat-square)](https://travis-ci.org/) [![Coverage Status](https://img.shields.io/codecov/c/github//master.svg?style=flat-square)](https://codecov.io/gh//branch/master)

Magical, Flexible and Extendible Javascript Validation.

## Install

npm:

    npm i validazz

Yarn:

    yarn add validazz

## Usage

```js
import Validator, { rules } from 'validazz'

const mySuperCoolValidator = Validator.factory()

// Let's add some rules
mySuperCoolValidator.addRule(rules.isRequired)
mySuperCoolValidator.addRules([rules.minLength(2), rules.maxLength(8)])
mySuperCoolValidator.addRule(rules.isString)

// How about a custom rule?
const customRule = {
  runWithValue: value => {
    if (value !== '🤪') return false
    return true
  },
  message: 'Houston, we got a problem',
}
mySuperCoolValidator.addRule(customRule)

// Okay let's start validating
const { success, failed } = mySuperCoolValidator.runWithValue('hello')
if (success) {
  console.log('Wow, this was validated just like that')
} else {
  const { message } = failed
  console.log(`Okay so here's the error message: ${failed}`)
}
```

For a list of all the included rules, be sure to check the [RULES.md]() file

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

- [Validator](#validator)
  - [Parameters](#parameters)
  - [addRule](#addrule)
    - [Parameters](#parameters-1)
  - [addRules](#addrules)
    - [Parameters](#parameters-2)
  - [runWithValue](#runwithvalue)
    - [Parameters](#parameters-3)
  - [validate](#validate)
    - [Parameters](#parameters-4)
    - [Examples](#examples)
  - [factory](#factory)
    - [Parameters](#parameters-5)
    - [Examples](#examples-1)
- [runWithValue](#runwithvalue-1)
  - [Parameters](#parameters-6)
  - [Examples](#examples-2)
- [ValidationRule](#validationrule)
  - [Properties](#properties)
  - [Examples](#examples-3)
- [ValidatorResult](#validatorresult)
  - [Properties](#properties-1)
  - [Examples](#examples-4)

### Validator

Validation Factory, where all the validation magic happens

Type: [Validator](#validator)

#### Parameters

- `rules` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[ValidationRule](#validationrule)>** List of rules to initalize with (optional, default `[]`)

#### addRule

Add a rule to the factory

##### Parameters

- `rule` **[ValidationRule](#validationrule)** A validation rule

Returns **[Validator](#validator)** Validator instance

#### addRules

Add a rules to the factory

##### Parameters

- `rules` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[ValidationRule](#validationrule)>** An array of rules to add

Returns **[Validator](#validator)** Validator instance

#### runWithValue

- **See: validate**

Run the factory and validate!

##### Parameters

- `value` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The string to be validated

Returns **[ValidatorResult](#validatorresult)** The validation outcome

**Meta**

- **deprecated**: Use `validate(value: string)` instead. Depricated since v1.1

#### validate

Validates a string

##### Parameters

- `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The string to be validated

##### Examples

```javascript
const { success, failed } = Validator.factory(rules.isRequired).validate(
  'hello'
)
```

Returns **[ValidatorResult](#validatorresult)** The validation outcome

#### factory

Create a new validation factory

##### Parameters

- `rules` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[ValidationRule](#validationrule)>** List of rules to initalize the factory with (optional, default `[]`)

##### Examples

```javascript
const validator = Validator.factory([])
```

Returns **[Validator](#validator)** Validator instance

### runWithValue

The validation function for this rule. It takes the a string/integer value and returns a boolean.

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

#### Parameters

- `value` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Value of array element

#### Examples

```javascript
const rule = {
  runWithValue(value) {
    return value != null
  },
}
```

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** If it returns true, the field is valid.

### ValidationRule

A validation rule

Type: [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

#### Properties

- `message` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** A custom error message for this validation rule
- `runWithValue` **[runWithValue](#runwithvalue)** Validation callback

#### Examples

```javascript
// Basic Example
const validationRule = {
  message: 'This field is required',
  runWithValue(value) {
    return value != null
  },
}

// Example with parameters
const minimum = min => ({
  message: `Amount must be greater than ${min}`,
  runWithValue(value) {
    const value = Number(value)
    return value > min
  },
})
```

### ValidatorResult

The validation result

Type: [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

#### Properties

- `success` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** The outcome of the validation
- `failed` **[ValidationRule](#validationrule)** An optional value. Returns the rule that failed to validate

#### Examples

```javascript
const { success, failed } = Validator.factory(rules.isRequired).validate(
  'hello'
)
if (success) {
  alert('validated')
} else {
  const { message } = failed
  alert(`Failed: ${message}`)
}
```

## License

MIT © [Jesse Onolememen](https://github.com/jesster2k10)

### Table of Contents

## License

MIT © [Jesse Onolememen](https://github.com/jesster2k10)
