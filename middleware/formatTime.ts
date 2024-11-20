const formatTime = (seconds: any) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedHours = hours > 0 ? hours.toString() + ":" : "";
    const formattedMinutes =
        minutes < 10 && hours > 0
            ? "0" + minutes.toString() + ":"
            : minutes.toString() + ":";
    const formattedSeconds =
        remainingSeconds < 10
            ? "0" + remainingSeconds.toString()
            : remainingSeconds.toString();

    return formattedHours + formattedMinutes + formattedSeconds;
};

export default formatTime;