import {Date} from "../date";

test('should convert November 7 to words', () =>
    expect(new Date(7, 10, 4).inWords())
        .toBe('Donnerstag, den 7 November')
);

test('should convert to words when week starts from Monday', () =>
    expect(new Date(10, 10, 7).inWords())
        .toBe('Sonntag, den 10 November')
);
