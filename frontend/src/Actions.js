// Actions/events that can be triggered in our app
// These actions will be used to update our state
// These actions will be triggered by the socket events

const ACTIONS = {
    JOIN: 'join',                       // to join
    JOINED: 'joined',                   // has joined (updates user list)
    USER_JOINED: 'user-joined',         // notification that a user joined
    DISCONNECTED: 'disconnected',
    CODE_CHANGE: 'code-change',
    SYNC_CODE: 'sync-code',
    LANGUAGE_CHANGE: 'language-change',
    OUTPUT_CHANGE: 'output-change',
    LEAVE: 'leave', 
};

export default ACTIONS;