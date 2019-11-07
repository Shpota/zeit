import {days, months} from "./translation";

export class Date {
    constructor(
        public date: number,
        public month: number,
        public day: number
    ) { }

    inWords(): string {
        const month = months[this.month];
        return `${this.weekDay()}, ${this.date} ${month}`;
    }

    private weekDay(): string {
        const day = this.day === 7 ? 0 : this.day;
        return days[day];
    }
}
