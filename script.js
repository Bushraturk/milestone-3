"use strict";
var _a;
// get listing
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // type section
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;
        // create resume output
        const resumeOutput = `
<h2>Resume</h2>
<p> <strong>Name:</strong> ${name} </p> 
<p> <strong>Email:</strong> ${email} </p> 
<p> <strong>phonen Number:</strong> ${phone} </p> 

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>

`;
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    // 
});
// chat gpt
// document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
//     event.preventDefault();
//     // Type section
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLInputElement;
//     const experienceElement = document.getElementById('experience') as HTMLInputElement;
//     const skillsElement = document.getElementById('skills') as HTMLInputElement;
//     if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const skills = skillsElement.value;
//         const experience = experienceElement.value;
//         // Create resume output
//         const resumeOutput = `
//             <h2>Resume</h2>
//             <p> <strong>Name:</strong> ${name} </p> 
//             <p> <strong>Email:</strong> ${email} </p> 
//             <p> <strong>Phone Number:</strong> ${phone} </p> 
//             <h3>Education</h3>
//             <p>${education}</p>
//             <h3>Experience</h3>
//             <p>${experience}</p>
//             <h3>Skills</h3>
//             <p>${skills}</p>
//         `;
//         const resumeOutputElement = document.getElementById('resumeOutput');
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//         } else {
//             console.error('The resume output element is missing');
//         }
//     } else {
//         console.error('Some form elements are missing');
//     }
// });
