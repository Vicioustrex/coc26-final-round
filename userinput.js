const events = {};
const eventsPrev = Object.assign({}, events);

// When key down, mark it as true
document.addEventListener("keydown", e => {
    events[e.code] = true;
    // Shift shortcut
    events.Shift = events.ShiftLeft || events.ShiftRight;
})

// Similar to above
document.addEventListener("keyup", e => {
    events[e.code] = false;
    events.Shift = events.ShiftLeft || events.ShiftRight;
})