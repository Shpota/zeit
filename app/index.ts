import clock, {TickEvent} from "clock";
import document from "document";
import {preferences} from "user-settings";
import {Time} from "./time";

clock.granularity = "seconds";

const timeBox = document.getElementById("timeBox");
const timeBoxShadow = document.getElementById("timeBoxShadow");
const wordBox = document.getElementById("wordBox");
const wordBoxShadow = document.getElementById("wordBoxShadow");

function handleTick(event: TickEvent): void {
    const now = event.date;
    const twelveHoursFormat = preferences.clockDisplay === "12h";
    const time = new Time(
        now.getHours(),
        now.getMinutes(),
        twelveHoursFormat
    );
    const timeInNumbers = time.inNumbers();
    const timeInWords = time.inWords();
    timeBox.text = timeInNumbers;
    timeBoxShadow.text = timeInNumbers;
    wordBox.text = timeInWords;
    wordBoxShadow.text = timeInWords;
}

clock.ontick = handleTick;
