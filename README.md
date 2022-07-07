![Screenshot](screenshot.png)

# Weather-Forcaster React  Application 
## Find the current weather and 7 days forecast of any city on earth with this  web app.
Technologies: React.js,Redux Styled Components
Live Demo on [Netlify](https://ermias-weather-app.netlify.app/).

---

Simple React web application written with jsx that returns the current weather. The app utilizes:

- OpenWeatherMap's API,
- OpenWeatherMap's icons for weather icons,  
- create-react-app tool,
- Axios and fetch for easy http requests,

## Requirements:
 -[ ] Your app should be set up to use ESLint with the Airbnb style guide and Prettier.
 -[ ] Your app should have the following devDependencies installed:` eslint eslint-config-airbnb eslint-config-node eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier`
 -[ ] Your app should also contain `.eslintignore, .eslintrc.json, and .prettierrc files` in the root directory, based on the demo files provided here. Note that you can choose to override some of the default linter rules if necessary, but should strive to stick with the recommended Airbnb rules as much as possible.
 No code should be merged into main until ALL linter errors are corrected.
 No code should be merged into main until all console and Terminal errors and warnings are corrected.
 -[ ] Your app should contain a `functional error boundary` that displays an alternate UI in case of component error.
 Each component that receives props must have React PropTypes and DefaultProps.
 -[ ] Your app should have passing component tests for at least two of your main components (SearchBar, DayCard, DayDetails, etc). Any utility functions your app uses (with exception to API calls) should have thorough unit test coverage.
 Upon initial render, your app should load a 7-day weather forecaset for the default location of your choice.
 -[ ] Your app should have a search bar that allows a user to specify a new location to search in. After user search, the app should render weather forecast data for the new location.
 -[ ] The user of your app should be able to enter either a `city/state, a zip code, an address, or a landmark` for their search term. If your weather API relies on a lat/lon for search, use a geocoder to convert the human-friendly search into location coordinates.
 Each component's props should be destructured for component readibility.
 Pull data from your external APIs using `axios, fetch,` or a similar tool.
 Hide any API keys using a .env.local file.
 -[ ] Your app should have multiple components. Use props to pass data from parent components into child components to allow customization of the child components. (Sometimes it's easiest to start with one or two big components, and to break code out into smaller, more specific components after the core functionality is in place.)
 -[ ] Make your code as DRY (**D**on't **R**epeat **Y**ourself) as possible!


 ## Use Cases for App

**User should be able to see**

1. Weather Icon

2. Input field with Search button

3. Eight day weather forcast


4. Detail weather for specific day

**User should be able to do**

1. The user of your app should be able to enter either a `city/state, a zip code, an address, or a landmark on the search bar

2.  Click on a single day and display detail weather information for that specfic day

3. detail page will show a background image that corospondes with the weather type


4. Click on refesh button to go back to the home page

5. user is able toggle the dark mode and light mode 

