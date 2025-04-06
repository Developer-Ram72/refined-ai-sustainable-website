class NotificationSystem {
    constructor() {
        this.notifications = [];
        this.subscribers = new Map();
        this.setupBroadcastChannel();
    }

    setupBroadcastChannel() {
        this.channel = new BroadcastChannel('learning_system_channel');
        this.channel.onmessage = (event) => {
            this.handleNotification(event.data);
        };
    }

    broadcast(notification) {
        this.channel.postMessage(notification);
    }

    handleNotification(notification) {
        this.notifications.push(notification);
        this.showNotification(notification);
        this.notifySubscribers(notification);
    }

    showNotification(notification) {
        const toast = document.createElement('div');
        toast.className = 'system-notification';
        toast.innerHTML = `
            <div class="notification-content">
                <span class="notification-title">${notification.title}</span>
                <p>${notification.message}</p>
            </div>
            <button class="notification-close">×</button>
        `;

        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 5000);
    }

    subscribe(source, callback) {
        this.subscribers.set(source, callback);
    }

    notifySubscribers(notification) {
        this.subscribers.forEach(callback => callback(notification));
    }
}
