# CLI Weather

A simple command-line interface (CLI) application for retrieving weather information using the OpenWeatherMap API.

## Features

- Get current weather information for a specified city.
- Save your preferred city and API key for repeated use.
- Display helpful information and usage instructions.

## Installation

To install the CLI Weather application, clone the repository and install the dependencies:

```bash
git clone https://github.com/ToyLess78/cli-weather.git
cd cli-weather
npm install
```

## Usage

You can run the application using the following command:

```bash
node weather.js
```

### Commands

- `-s [CITY]`: Set the city for which to retrieve the weather information.
- `-t [API_KEY]`: Save your OpenWeatherMap API key.
- `-h`: Display help information.

### Examples

1. Display help information:

```bash
node weather.js -h
```

2. Set the city:

```bash
node weather.js -s "New York"
```

3. Save your API key:

```bash
node weather.js -t "your_api_key_here"
```

4. Get the current weather for the saved city:

```bash
node weather.js
```

## Project Structure

- `weather.js`: Entry point of the application.
- `args.helper.js`: Contains a helper function to parse command-line arguments.
- `log.service.js`: Handles logging and output formatting.
- `storage.service.js`: Manages saving and retrieving data from the file system.
- `api.service.js`: Handles API calls to OpenWeatherMap.

## Dependencies

- `axios`: For making HTTP requests to the OpenWeatherMap API.
- `chalk`: For styling the command-line output.
- `dedent-js`: For formatting multiline strings.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## License

This project is licensed under the ISC License.

## Author

ToyLess78

- GitHub: [ToyLess78](https://github.com/ToyLess78)
- Email: toyless@gmail.com

---

For any issues or bug reports, please visit the [GitHub Issues page](https://github.com/ToyLess78/cli-weather/issues).