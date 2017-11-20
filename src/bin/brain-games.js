#!/usr/bin/env node

import askName from '../askName';

const welcomeText = 'Welcome to the Brain Games!';
const showWelcomeText = () => console.log(welcomeText);

showWelcomeText();
askName();

