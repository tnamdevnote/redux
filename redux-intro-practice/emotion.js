const emotion = document.querySelector(`#emotion`);
const happy = document.querySelector(`#happy`);
const sad = document.querySelector(`#sad`);
const bored = document.querySelector(`#bored`);
const confused = document.querySelector(`#confused`);


happy.addEventListener('click', () => {
    store.dispatch({ type: "HAPPY" });
    const currentEmotion = store.getState().emotion;
    emotion.innerText = currentEmotion;
});

sad.addEventListener('click', () => {
    store.dispatch({ type: "SAD" });
    const currentEmotion = store.getState().emotion;
    emotion.innerText = currentEmotion;
});

bored.addEventListener('click', () => {
    store.dispatch({ type: "BORED" });
    const currentEmotion = store.getState().emotion;
    emotion.innerText = currentEmotion;
});

confused.addEventListener('click', () => {
    store.dispatch({ type: "CONFUSED" });
    const currentEmotion = store.getState().emotion;
    emotion.innerText = currentEmotion;
});