import {convertDatesToISOStrings, convertISOStringsToDates} from '../src/index';

describe('The convertISODatesToStrings() method', () => {
  it('should convert only date objects to strings', () => {
    const exampleDateObjectIn = {
      name: 'Eris',
      age: 23,
      weapons: ['kallisti'],
      runDate: new Date(),
      anotherDate: new Date(),
    };
    const exampleDateObjectOut = {
      name: 'Eris',
      age: 23,
      weapons: ['kallisti'],
      runDate: exampleDateObjectIn.runDate.toISOString(),
      anotherDate: exampleDateObjectIn.anotherDate.toISOString(),
    };
    expect(convertDatesToISOStrings(exampleDateObjectIn)).toEqual(
      exampleDateObjectOut
    );
  });
});

describe('The convertISOStringsToDates() methid', () => {
  it('should convert only strings in ISO8606 format to date objects', () => {
    const exampleISOStringObjectIn = {
      name: 'Bob',
      age: 42,
      weapons: ['pipe'],
      runDate: '2021-02-14T09:02:10.232Z',
      anotherDate: '2021-02-14T13:28:56.786Z',
      aDate: new Date(),
    };
    const exampleISOStringObjectOut = {
      name: 'Bob',
      age: 42,
      weapons: ['pipe'],
      runDate: new Date(exampleISOStringObjectIn.runDate),
      anotherDate: new Date(exampleISOStringObjectIn.anotherDate),
      aDate: exampleISOStringObjectIn.aDate,
    };
    expect(convertISOStringsToDates(exampleISOStringObjectIn)).toEqual(
      exampleISOStringObjectOut
    );
  });
});
