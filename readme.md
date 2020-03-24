# n-vgen

[![Build Status](https://travis-ci.org/AlexanderMac/n-vgen.svg?branch=master)](https://travis-ci.org/AlexanderMac/n-vgen)
[![Code Coverage](https://codecov.io/gh/AlexanderMac/n-vgen/branch/master/graph/badge.svg)](https://codecov.io/gh/AlexanderMac/n-vgen)
[![npm version](https://badge.fury.io/js/n-vgen.svg)](https://badge.fury.io/js/n-vgen)

## Features

Generates all variants for the charset.

For example, for the charset `123` and the secret length equals 2, it generates the following variants:

```js
[
  '11', '21', '31',
  '12', '22', '32',
  '13', '23', '33'
]
```

## Commands

```sh
# install
npm i n-vgen
```

## Usage

```js
const VGenerator = require('n-vgen');

let vgen = new VGenerator('123', 2);
vgen.getNext(); // returns 111
vgen.getNext(); // returns 211
...

vgen.getAll(); // returns ['111', '211', ...]
```

## API

### VGenerator

#### constructor(charset: string, secretLen: number)

- `charset` - the charset.
- `secretLen` - the secret length.

#### totalVariants: number
Returns the total variants.

#### getNext(): string
Returns the next variant or null if the last one is already generated.

#### getAll(): string[]
Returns all variants.

## Author
Alexander Mac

## Licence
Licensed under the MIT license.
