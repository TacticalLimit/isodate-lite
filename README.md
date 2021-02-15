# isodate-lite

[![Build](https://github.com/TacticalLimit/isodate-lite/workflows/Build/badge.svg)](https://github.com/TacticalLimit/isodate-lite)
[![dependencies Status](https://status.david-dm.org/gh/tacticallimit/isodate-lite.svg)](https://david-dm.org/tacticallimit/isodate-lite)
[![Known Vulnerabilities](https://snyk.io/test/github/TacticalLimit/isodate-lite/badge.svg)](https://snyk.io/test/github/TacticalLimit/isodate-lite)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)
[![License: Apache-2.0](https://img.shields.io/github/license/tacticallimit/isodate-lite)](https://choosealicense.com/licenses/apache-2.0/)
[![Documentation: Provided](https://img.shields.io/badge/documentation-provided-blue)](https://tacticallimit.github.io/isodate-lite/)

ISO Date Lite is a `node/typescript` library for coverting object values between
ISO8601 date strings and native javascript `date` objects.

It was originally written as part of another project to cope with the 
[@aws-sdk/util-dynamodb]() DynamoDB limitations while 
[storing dates](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBMapper.DataTypes.html).

## Documentation
The API documentation can be found at https://tacticallimit.github.io/isodate-lite/

## Installation

Use the `npm` or `yarn` package manager to install isodate-lite.

```bash
npm install isodate-lite
```

```bash
yarn install isodate-lite
```

## Usage

```typescript
import {convertDatesToISOStrings, convertISOStringsToDates} from 'isodate-lite';

const exampleDateObject = {
  name: 'Eris',
  age: 23,
  weapons: ['kallisti'],
  runDate: new Date(),
};

const exampleISOStringObject = {
  name: 'Bob',
  age: 42,
  weapons: ['pipe'],
  runDate: '2021-02-14T09:02:10.232Z',
};

function main() {
  const toStringExample = convertDatesToISOStrings(exampleDateObject);
  console.log('To string example:', toStringExample);
  const toDateExample = convertISOStringsToDates(exampleISOStringObject);
  console.log('To date example:', toDateExample);
}

main();
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Apache-2.0](https://choosealicense.com/licenses/apache-2.0/)