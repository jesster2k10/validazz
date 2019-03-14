# Default Validation Rules

These rules are included default with validazz.
You can use them like so in your application:

```js
import Validator, { rules } from 'validazz'
const { isRequired, isEmail } = rules
const factory = Validator.factory([isRequired, isEmail])
```

## Included Rules

#### rules.isRequired

- Validates agains emtpy fields
- Example `rules.isRequired`

#### rules.minLength(min)

- Validates strings to contain a minimum number of characters
- Example: `rules.minLength(2)`

#### rules.maxLength(max)

- Validates strings to contain a maximum number of characters
- Example: `rules.maxLength(19)`

#### rules.exactLength(exact)

- Validates strings to contain an exact number of characters
- Example: `rules.exactLength(19)`

#### rules.isPattern(pattern)

- Validates strings against a `RegexExp`
- Example: `rules.isPattern('[A-Z]')`

#### rules.isMatch

- **decpricated** use `rules.isPattern` instead. Will be removed in a future version
- Validates strings against a `RegexExp`
- Example: `rules.isMatch('[A-Z]')`

#### rules.isString

- Validates a text to ensure it is a string .i.e. without special characters and numbers
- Example `rules.isString`

#### rules.isDigit

- Validates a string to ensure it is a number
- Example `rules.isDigit`

#### rules.isNumeric

- Validates a string to ensure it is numeric .i.e. contains a number
- Example `rules.isNumeric`

#### rules.isEmail

- Validates a string to ensure it is a valid email as per [Email Regex](https://emailregex.com)
- Example `rules.isEmail`

#### rules.isUppercase

- Validates a string to ensure it is completely uppercase
- Example `rules.isUppercase`

#### rules.containsUppercase

- Validates a string to ensure it contains at least one uppercase character
- Example `rules.containsUppercase`

#### rules.containsLowercase

- Validates a string to ensure it contains at least one lowercase character
- Example `rules.containsLowercase`
