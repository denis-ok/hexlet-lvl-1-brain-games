#!/usr/bin/env node

import start from '../games/game-even';

import * as message from '../message';
import askName from '../askName';

message.welcome();
message.brainEvenStart();

const userName = askName();
message.hello(userName);

start(userName, 3);

