#!/usr/bin/env node
import { getArgs } from './helpers/args.helper.js'
import { printHelp } from "./services /log.service.js";

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        return printHelp();
    }
};

initCLI();
