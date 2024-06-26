const createNewScale = (accidental, scaleDict, assignedKey) => {
    const chosenScale = accidental === 'flat' ? scaleDict.scale : scaleDict.scale_2;
    const posScale = chosenScale.indexOf(assignedKey);
    const newScale = [];

    for (let i = 0; i < 12; i++) {
        newScale.push(chosenScale[(posScale + i) % 12]);
    }

    return newScale;
}

export default createNewScale