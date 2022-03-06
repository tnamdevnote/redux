const INITIAL_STATE = { emotion: "⊙.☉"};

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "HAPPY":
            return { emotion: "^ㅂ^" };
        case "SAD":
            return { emotion: "Q_Q" };
        case "BORED":
            return { emotion: "ಠ_ಠ"};
        case "CONFUSED":
            return { emotion: "⊙.☉"};
        default:
            return state;
    }
}
const store = Redux.createStore(rootReducer);
