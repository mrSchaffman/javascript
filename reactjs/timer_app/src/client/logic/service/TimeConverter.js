import {TimePaddingAlgorithm} from "../algorithm/TimePaddingAlgorithm";

export default class TimeConverter {
    static renderElapsedString(elapsed, runningSince) {
        let totalElapsed = elapsed;
        if (runningSince) {
            totalElapsed += Date.now() - runningSince;
        }
        return this.millisecondsToHuman(totalElapsed);
    }
    static millisecondsToHuman(ms) {
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / 1000 / 60) % 60);
        const hours = Math.floor(ms / 1000 / 60 / 60);

        return [
            TimePaddingAlgorithm(hours.toString(), 2),
            TimePaddingAlgorithm(minutes.toString(), 2),
            TimePaddingAlgorithm(seconds.toString(), 2),
        ].join(':');
    }
}