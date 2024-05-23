#!/usr/bin/env node
import { getArgs } from './helpers/args.helper.js'

const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
};

initCLI();