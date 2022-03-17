import userInfo from './information.js';
import cowsay from "cowsay";

//console.log(userInfo.person.name);

console.log(cowsay.say({
    text : "I'm " + userInfo.person.name + " from " + userInfo.person.campus,
    e : "oO",
    T : "U "
}));