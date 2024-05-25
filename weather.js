#!/usr/bin/env node
import { getArgs } from './helpers/args.helper.js'
import { printError, printHelp, printSuccess } from './services /log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services /storage.service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('Token not transferred');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Toke saved');
    } catch (e) {
        printError(e.message);
    }
}

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        return printHelp();
    }
    if (args.t) {
        return saveToken(args.t);
    }
};

initCLI();
