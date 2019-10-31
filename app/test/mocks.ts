declare module 'document' {
    const document;
    export default document;
}

declare module 'clock' {
    export interface TickEvent {
        date;
    }
    const clock: Clock;
    export default clock;
}

declare module 'user-settings' {
    const preferences;
}
