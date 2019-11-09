import {Time} from "../time";

test('should convert 1:00 to words', () =>
    expect(words('1:00')).toBe('ein Uhr')
);

test('should convert 10:00 to words', () =>
    expect(words('10:00')).toBe('zehn Uhr')
);

test('should convert 10:01 to words', () =>
    expect(words('10:01')).toBe('eins nach zehn')
);

test('should convert 10:03 to words', () =>
    expect(words('10:03')).toBe('drei nach zehn')
);

test('should convert 10:11 to words', () =>
    expect(words('10:11')).toBe('elf nach zehn')
);

test('should convert 10:15 to words', () =>
    expect(words('10:15')).toBe('Viertel nach zehn')
);

test('should convert 10:19 to words', () =>
    expect(words('10:19')).toBe('neunzehn nach zehn')
);

test('should convert 10:20 to words', () =>
    expect(words('10:20')).toBe('zehn vor halb elf')
);

test('should convert 10:22 to words', () =>
    expect(words('10:22')).toBe('acht vor halb elf')
);

test('should convert 10:27 to words', () =>
    expect(words('10:27')).toBe('drei vor halb elf')
);

test('should convert 10:30 to words', () =>
    expect(words('10:30')).toBe('halb elf')
);

test('should convert 10:32 to words', () =>
    expect(words('10:32')).toBe('zwei nach halb elf')
);

test('should convert 10:35 to words', () =>
    expect(words('10:35')).toBe('fünf nach halb elf')
);

test('should convert 10:40 to words', () =>
    expect(words('10:40')).toBe('zehn nach halb elf')
);

test('should convert 10:43 to words', () =>
    expect(words('10:43')).toBe('siebzehn vor elf')
);

test('should convert 10:45 to words', () =>
    expect(words('10:45')).toBe('Viertel vor elf')
);

test('should convert 10:46 to words', () =>
    expect(words('10:46')).toBe('vierzehn vor elf')
);

test('should convert 10:51 to words', () =>
    expect(words('10:51')).toBe('neun vor elf')
);

test('should convert 12:00 to words', () =>
    expect(words('12:00')).toBe('zwölf Uhr')
);

test('should convert 15:00 to words', () =>
    expect(words('15:00')).toBe('drei Uhr')
);

test('should convert 00:00 to words', () =>
    expect(words('00:00')).toBe('zwölf Uhr')
);

test('should convert to numbers', () =>
    expect(numeric('15:20')).toBe('15:20')
);

test('should convert to numbers in 12h format', () =>
    expect(numeric('15:20', true)).toBe('3:20')
);

function words(timeStr: string, twelveHourFormat: boolean = false): string {
    return time(timeStr, twelveHourFormat).inWords()
}

function numeric(timeStr: string, twelveHourFormat: boolean = false): string {
    return time(timeStr, twelveHourFormat).inNumbers()
}

function time(time: string, twelveHourFormat: boolean = false): Time {
    const parts = time.split(':');
    return new Time(Number(parts[0]), Number(parts[1]), twelveHourFormat);
}
