class DefaultMap extends Map {
    constructor(defaultValue) {
        super();
        if (typeof defaultValue == 'function') {
            this.defaultGenerator = defaultValue;
        }
        else {
            this.defaultGenerator = () => defaultValue;
        }
    }
    get(key) {
        if (!this.has(key)) {
            this.set(key, this.defaultGenerator(key, this));
        }
        return super.get(key);
    }
}

module.exports = { DefaultMap };