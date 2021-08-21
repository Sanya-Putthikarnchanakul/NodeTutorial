exports.genId = () => {
    try {
        let length = 10;
        let result = '';
        let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    } catch (err) {
        throw err;
    }
}