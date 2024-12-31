const updateClock = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en", { hour12: true });
    document.getElementById('clock').textContent = timeString;
};
setInterval(updateClock, 1000);
updateClock(); 