const profile1 = document.getElementById('profile1');
const profile2 = document.getElementById('profile2');
const combineBtn = document.getElementById('combineBtn');
const combineBox = document.getElementById('outputBox');


const profiles = [
  {
    value: 0,
    name: 'Ali',
    age: 25,
    address: { city: 'Cairo', country: 'Egypt' },
    skills: ['JS', 'HTML' , 'c++']
  },
  {
    value: 1,
    name: 'sara',
    age: 35,
    address: { city: 'alex', country: 'Egypt' },
    skills: ['JS', 'HTML' , 'css' , 'react']
   },
  {
    value:2 ,
    name: 'omar',
    age: 20,
    address: { city: 'hurghada', country: 'Egypt' },
    skills: ['JS', 'HTML' , 'python']
  }
];




const profilesCombined = ((one , two) => {
    
    

    const mergedSkillsAlt = one.skills.concat(two.skills)
    .filter((skill, index, array) => array.indexOf(skill) === index);

    const updatedProfile = {
        ...one,
        ...two,
        mergedSkillsAlt,
    }
    
    combineBox.textContent =JSON.stringify(updatedProfile)
})

combineBtn.addEventListener('click' , () =>{
    const profile1value = profile1.options[profile1.selectedIndex].value ;
    const profile2value = profile2.options[profile2.selectedIndex].value ;

    // console.log(profiles.find((profile) => profile.value == profile1value ? profile : 0))
    const profile1Selected = profiles.find(profile => {
        if(profile.value == profile1value){
            return profile;
        } else {
            return;
        }
    });
    const profile2Selected = profiles.find(profile => {
        if(profile.value == profile2value){
            return profile;
        }
    });
    profilesCombined(profile1Selected , profile2Selected);
});



