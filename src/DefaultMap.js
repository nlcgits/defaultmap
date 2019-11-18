export default class DefaultMap extends Map {
    constructor(defaultValue) {
        if (typeof defaultValue == 'function') {
            this.defaultGenerator = defaultValue;
        }
        else {
            this.defaultGenerator = () => defaultValue;
        }
        super();
    }
    get(key) {
        if (!this.has(key)) {
            this.set(key, this.defaultGenerator(key, this));
        }
        return super.get(key);
    }
}