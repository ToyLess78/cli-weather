import chalk from 'chalk';
import dedent from 'dedent-js';

export const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

export const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

export const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
		Without parameters - weather output
        -s [CITY] to set the city
        -h to display help
        -t [API_KEY] to save the token
		`
    );
};

export const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} Weather in the city ${res.name}
		 ${icon} ${res.weather[0].description}
		 Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
		 Humidity: ${res.main.humidity}%
		 Wind speed: ${res.wind.speed}`
    );
};