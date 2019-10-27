import clock, {TickEvent} from "clock";
import document from "document";
import {preferences} from "user-settings";

clock.granularity = "seconds";

const timeBox = document.getElementById("timeBox");

function zeroPad(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
}

function handleTick(event: TickEvent): void {
    const today = event.date;
    let hours: string;
    if (preferences.clockDisplay === "12h") {
        hours = String(today.getHours() % 12 || 12);
    } else {
        hours = zeroPad(today.getHours());
    }
    const mins = zeroPad(today.getMinutes());
    if (today.getSeconds() % 2) {
        timeBox.text = `${hours}:${mins}`;
    } else {
        timeBox.text = `${hours} ${mins}`;
    }
}

clock.ontick = handleTick;
