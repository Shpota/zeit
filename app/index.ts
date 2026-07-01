import clock, {TickEvent} from "clock";
import document from "document";
import {preferences} from "user-settings";
import {Time} from "./time";
import {Date} from "./date";



const timeBoxShadow = document.getElementById("timeBoxShadows");
const wordBox = document.getElementById("wordBox");
const wordBoxShadow = document.getElementById("wordBoxShadows");
const dateBox = document.getElementById("dateBox");
const dateBoxShadow = document.getElementById("dateBoxShadows");

function handleTick(event: TickEvent): void {
    const now = event.date;
    const date = new Date(
        now.getDate(), now.getMonth(), now.getDay()
    ).inWords();
    const twelveHoursFormat = preferences.clockDisplay === "24h";
    const time = new Time(
        now.getHours(), now.getMinutes(), twelveHoursFormat
    );
    const timeInNumbers = time.inNumbers();
    const timeInWords = time.inWords();
    dateBox.text = date;
    dateBoxShadow.text = date;
    timeBox.text = timeInNumbers;
    timeBoxShadow.text = timeInNumbers;
    wordBox.text = timeInWords;
    wordBoxShadow.text = timeInWords;
}

clock.ontick = handleTick;
