#!/usr/bin/env node
import { getArgs } from './helpers/args.helper.js'
import { printError, printHelp, printSuccess, printWeather } from './services /log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services /storage.service.js';
import { getIcon, getWeather } from './services /api.service.js';

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

const saveCity = async (city) => {
    if (!city.length) {
        printError('City not transferred');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('City saved');
    } catch (e) {
        printError(e.message);
    }
}

const getForecast = async () => {

    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
        const currentWeather = await getWeather(city);
        console.log('currentWeather', currentWeather,)
        printWeather(currentWeather, getIcon(currentWeather?.weather[0]?.icon));
    } catch (e) {
        if (e?.response?.status == 404) {
            printError('Invalid city');
        } else if (e?.response?.status == 401) {
            printError('Invalid token');
        } else {
            printError(e.message);
        }
    }
}

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        return printHelp();
    }
    if (args.s) {
        return saveCity(args.s);
    }
    if (args.t) {
        return saveToken(args.t);
    }
    return getForecast();
};

initCLI();
