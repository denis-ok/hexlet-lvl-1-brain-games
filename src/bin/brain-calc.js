#!/usr/bin/env node

import start from '../games/game-calc';

import * as message from '../message';
import askName from '../askName';

message.welcome();
message.calcStart();

const userName = askName();
message.hello(userName);

start(userName, 3);
