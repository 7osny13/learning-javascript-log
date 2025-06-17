const mergeSettingsBtn = document.getElementById('mergeSettingsBtn');
const output = document.getElementById('output');






const greetUser = () => {
    
const defaultSettings = {
  theme: 'light',
  fontSize: 'medium',
  notifications: true
};

const userSettings = {
  theme: 'dark',
  fontSize: 'large'
};
    // After merging:
const finalSettings = {...defaultSettings , ...userSettings};
const notification = finalSettings.notifications === true ? "ON" : "OFF";
output.textContent = `"Welcome back! Your current theme is ${finalSettings.theme} with ${finalSettings.fontSize} font size. Notifications are ${notification}."
`
}



// Greeting message (using template literals):
"Welcome back! Your current theme is dark with large font size. Notifications are ON."


mergeSettingsBtn.addEventListener('click' , greetUser);