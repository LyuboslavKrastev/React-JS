let subscriptions = { 
    'loginUser': [],
    'logoutUser': [],
    'notification': [],
};

export default { // event-driven architecture
    events: {
        loginUser: 'loginUser',
        logoutUser: 'logoutUser',
        notification: 'notification'
    },
    subscribe: (eventName, func) => subscriptions[eventName].push(func),
    trigger: (eventName, data) => subscriptions[eventName].forEach(func => func(data))
}