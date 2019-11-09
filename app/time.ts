import {numbers} from "./translation";

export class Time {
    constructor(
        private hours: number,
        private minutes: number,
        private twelveHourFormat: boolean = false
    ) {}

    inWords(): string {
        const hour = this.inTwelveHourFormat(this.hours);
        const currentHour = this.toWords(hour);
        const m = this.minutes;
        if (m === 0) {
            if (hour === 1) {
                return "ein Uhr";
            } else {
                return currentHour + " Uhr";
            }
        }
        if (m === 15) {
            return `Viertel nach ${currentHour}`;
        }
        const next = this.inTwelveHourFormat(this.hours + 1);
        const nextHour = this.toWords(next);
        if (m === 45) {
            return `Viertel vor ${nextHour}`;
        }
        if (m < 20) {
            const mins = this.toWords(m);
            return `${mins} nach ${currentHour}`;
        }
        if (m === 30) {
            return `halb ${nextHour}`;
        }
        if (m < 30) {
            const mins = this.toWords(30 - m);
            return `${mins} vor halb ${nextHour}`;
        }
        if (m <= 40) {
            const mins = this.toWords(m - 30);
            return `${mins} nach halb ${nextHour}`;
        }
        const mins = this.toWords(60 - m);
        return `${mins} vor ${nextHour}`;
    }

    inNumbers(): string {
        let hours: string;
        if (this.twelveHourFormat) {
            hours = String(this.inTwelveHourFormat(this.hours));
        } else {
            hours = String(this.hours);
        }
        const mins = this.zeroPad(this.minutes);
        return `${hours}:${mins}`;

    }

    private inTwelveHourFormat(hours: number): number {
        return hours % 12 || 12;
    }

    private toWords(num: number): string {
        return numbers[num];
    }

    private zeroPad(num: number): string {
        return num < 10 ? `0${num}` : `${num}`;
    }
}
