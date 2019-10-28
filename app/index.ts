import clock, {TickEvent} from "clock";
import document from "document";
import {preferences} from "user-settings";
import {Time} from "./time";

clock.granularity = "seconds";

const timeBox = document.getElementById("timeBox");
const wordBox = document.getElementById("wordBox");

function handleTick(event: TickEvent): void {
    const now = event.date;
    const twelveHoursFormat = preferences.clockDisplay === "12h";
    const time = new Time(
        now.getHours(),
        now.getMinutes(),
        now.getSeconds(),
        twelveHoursFormat
    );
    timeBox.text = time.inNumbers();
    wordBox.text = time.inWords();
}

clock.ontick = handleTick;
