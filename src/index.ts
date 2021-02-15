// See http://www.w3.org/TR/NOTE-datetime
const isoFormat = /^\d{4}-\d{2}-\d{2}((T\d{2}:\d{2}(:\d{2})?)(\.\d{1,6})?(Z|(\+|-)\d{2}:\d{2})?)?$/;

/**
 * Tests the input is a string that conforms to an ISO string format.
 *
 * Only tests the format, does not test the validity of the date (eg, 32nd of December, leap years etc)
 * @param input
 */
export function isISODate(input: unknown) {
  if (typeof input !== 'string') {
    return false;
  }
  return isoFormat.test(input);
}

/**
 * Converts all the date values of an object to ISO 8601 strings.
 *
 * This function only does a shallow conversion, it does not handle nested values.
 * @param input
 */
export function convertDatesToISOStrings(input: unknown): unknown {
  const output = {
    ...(input as Record<string, unknown>),
  };
  Object.entries(output).forEach(([key, value]) => {
    output[key] = value instanceof Date ? value.toISOString() : value;
  });
  return output;
}

/**
 * Converts all valid ISO 8601 strings to date objects.
 *
 * This function only does a shallow conversion, it does not handle nested values.
 * @param input
 */
export function convertISOStringsToDates(input: unknown): unknown {
  const output = {
    ...(input as Record<string, unknown>),
  };
  Object.entries(output).forEach(([key, value]) => {
    try {
      output[key] = isISODate(value) ? new Date(value as string) : value;
    } catch (_error) {
      output[key] = value;
    }
  });
  return output;
}
