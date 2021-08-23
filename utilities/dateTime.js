exports.getDisplayTime = (dt) => {
    try {
        const now = new Date();

        let diffMs = now - dt;
        let diffDays = Math.floor(diffMs / 86400000); // days
        let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

        if (diffMins === 0 && diffHrs === 0 && diffDays === 0) return `now`;

        if (diffMins > 0 && diffHrs <= 0) return `${diffMins} minutes ago`;

        if (diffHrs > 0 && diffDays <= 0) return `${diffHrs} hours ago`;

        return `${diffDays} days ago`;
    } catch (err) {
        throw err;
    }
}