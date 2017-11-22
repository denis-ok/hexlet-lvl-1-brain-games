#!/usr/bin/env node

import askName from '../askName';
import * as message from '../message';

message.welcome();
const userName = askName();
message.hello(userName);

