import Vue from 'vue';

export const state = () => ({
    notifications: [],
    numberOfUnreadNotifications: 0,
    hasMoreNotifications: false
});

export const getters = {
    numberOfUnreadNotifications: state => {
        return state.numberOfUnreadNotifications;
    },
    notifications: state => {
        return state.notifications;
    }
};

export const mutations = {
    RESET_NOTIFICATION: function (state) {
        state.notifications = [];
        state.numberOfUnreadNotifications = 0;
        state.hasMoreNotifications = false
    },
    SET_NOTIFICATION: function (state, notification) {
        state.notifications = state.notifications.concat(notification.notifications);
        state.numberOfUnreadNotifications = notification.numberOfUnreadNotifications;
        state.hasMoreNotifications = notification.hasMoreNotifications;
    },
    SET_NUMBER_OF_UNREAD_NOTIFICATIONS: function (state, numberOfUnreadNotifications) {
        state.numberOfUnreadNotifications = numberOfUnreadNotifications;
    },
    NOTIFICATION_READ: function (state, notificationToRemove) {
        let index = state.notifications.indexOf(notificationToRemove);
        if (index > -1) {
            state.notifications[index].read = true;
        }
        state.numberOfUnreadNotifications--;
    },
    SHOW_QUESTION: function (state, {notificationToRemove, showQuestion}) {
        let index = state.notifications.indexOf(notificationToRemove);
        if (index > -1) {
            Vue.set(state.notifications[index], 'showQuestion', showQuestion);
            Vue.set(state.notifications[index], 'read', true);
        }
        state.numberOfUnreadNotifications--;
    },
    ADD_NOTIFICATION: function (state, notificationToAdd) {
        state.notifications.unshift(notificationToAdd);
        state.numberOfUnreadNotifications++;
    }
};

let checkNotificationTimer;

const checkNotificationChanged = async function (axios, commit) {
    try {
        let status = await axios.$get('user/notification/status', {progress: false});
        commit('SET_NUMBER_OF_UNREAD_NOTIFICATIONS', status.numberOfUnreadNotifications);
    } catch (error) {
        console.log(error);
    }
};

export const actions = {
    async getNotifications({commit, state}) {
        try {
            let notifications = await this.$axios.$get('user/notification',
                {params: {skip: state.notifications.length, limit: 20}});
            commit('SET_NOTIFICATION', notifications);
        } catch (error) {
            console.log(error);
        }
    },
    async startCheckNotificationChanged({commit}) {
        if (!checkNotificationTimer) {
            await checkNotificationChanged(this.$axios, commit);
            checkNotificationTimer = setInterval(checkNotificationChanged, 120000, this.$axios, commit);
        }
    },
    stopCheckNotificationChanged() {
        if (checkNotificationTimer) {
            clearInterval(checkNotificationTimer);
            checkNotificationTimer = null;
        }
    },
    async notificationRead({commit}, notification) {
        await this.$axios.$put('user/notification/read',
            {notificationId: notification.notificationId});
        commit('NOTIFICATION_READ', notification);
    }
};