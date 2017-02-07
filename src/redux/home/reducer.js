export default function (state = {
    tester:""
}, action) {
    let nextState = state
    switch (action.type) {
        case 'TEST':
            return Object.assign({}, state, {
                tester: action.value
            });
            break;
        default:
            nextState = state;
            return nextState
    }
}
