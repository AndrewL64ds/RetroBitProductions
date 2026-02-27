const diaManager = new DialogueManager(
    textbox // the dialogue box
);

diaManager.Once(DialogueEvent.Load, async () => {
    await diaManager.SetActive(true); // required to be awaited

    await diaManager.Type(
        "Reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", // text
        1 // speed
    );
});