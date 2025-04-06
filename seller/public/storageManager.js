class StorageManager {
    static get(key, defaultValue = []) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (error) {
            console.error(`Error reading ${key} from localStorage:`, error);
            return defaultValue;
        }
    }

    static set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error(`Error saving ${key} to localStorage:`, error);
            return false;
        }
    }

    static append(key, item) {
        const items = this.get(key, []);
        items.push(item);
        return this.set(key, items);
    }

    static update(key, id, updatedData) {
        const items = this.get(key, []);
        const index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            items[index] = { ...items[index], ...updatedData };
            return this.set(key, items);
        }
        return false;
    }

    static remove(key, id) {
        const items = this.get(key, []);
        const filteredItems = items.filter(item => item.id !== id);
        return this.set(key, filteredItems);
    }

    static clear(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error(`Error clearing ${key} from localStorage:`, error);
            return false;
        }
    }
}
