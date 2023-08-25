const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const btnEl = document.getElementById("btn");
const bmiEl = document.getElementById("bmi");
const categoryEl = document.getElementById("category");


btnEl.addEventListener("click", () => {
    const heightInCm = heightEl.value;
    const weightInKg = weightEl.value;

    if(heightInCm>0 && weightInKg>0){
        const heightInM = (heightInCm/100);
        const heightSq = heightInM*heightInM;
        bmiEl.value = weightInKg/heightSq;
        const opt = bmiEl.value;
        
        if(opt<18.5){
            categoryEl.innerText = "Underweight";
        }else if(opt>=18.5 && opt<25){
            categoryEl.innerText = "Normal Weight";
        }else if(opt>=25 && opt<30){
            categoryEl.innerText = "Overweight";
        }else{
            categoryEl.innerText = "Obese";
        }
    }else{
        bmiEl.value = null;
        categoryEl.innerText = "";
    }
})