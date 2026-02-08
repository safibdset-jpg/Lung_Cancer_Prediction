function predict() {
    const data = {
        GENDER: gender.value, // This is encoded in your notebook (M=1, F=0)
        AGE: Number(age.value),
        SMOKING: Number(smoking.value),
        YELLOW_FINGERS: Number(yellow_fingers.value),
        ANXIETY: Number(anxiety.value),
        PEER_PRESSURE: Number(peer_pressure.value),
        CHRONIC_DISEASE: Number(chronic_disease.value),
        FATIGUE: Number(fatigue.value),
        ALLERGY: Number(allergy.value),
        WHEEZING: Number(wheezing.value),
        ALCOHOL_CONSUMING: Number(alcohol_consuming.value),
        COUGHING: Number(coughing.value),
        SHORTNESS_OF_BREATH: Number(shortness_of_breath.value),
        SWALLOWING_DIFFICULTY: Number(swallowing_difficulty.value),
        CHEST_PAIN: Number(chest_pain.value)
};

    fetch("https://lung-cancer-prediction-mjgd.onrender.com/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        document.getElementById("result").innerText = result.result;
    })
    .catch(err => {
        alert("API Error");
        console.error(err);
    });
}
