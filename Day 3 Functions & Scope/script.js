const step = document.getElementById('stepDisplay');
const increase = document.getElementById('increaseBtn');
const decrease = document.getElementById('decreaseBtn');
const reset = document.getElementById('resetBtn');
 


 function createCounter() {
    let currentStep = 0;
    let resetStep ;;
    return {
        increase: () => {
            currentStep++;
            step.textContent = currentStep;
        },
        decrease: function decreaseStep(){
            currentStep--;
            console.log(currentStep);
            step.textContent = currentStep;
        },
        reset: resetStep = function(){
            currentStep = 0;
            step.textContent = currentStep;
        },
    }
}


const counter = createCounter();

increase.addEventListener('click' , counter.increase);

decrease.addEventListener('click' , counter.decrease);
reset.addEventListener('click' , counter.reset);