/* eslint no-unused-vars: off */

const env = require('dotenv').config();

require('nightwatch-cucumber')({
  nightwatchOutput: true,
  cucumberArgs: [
    '--require', 'tests/helper/hooks.js',
    '--require', 'tests/step_definitions', // include step_definitions folder
    '--format', 'json:reports/phantomjs/cucumber_phantomjs.json', // include cucumber.json folder
    '--format', 'node_modules/cucumber-pretty', // print nice looking cucumber in console
    '--format-options', '{"colorsEnabled":true}', // print colour scenario title
    'tests/features'],
});

module.exports = {
  test_workers: { // for paralel test
    enabled: true,
    workers: 4,
  },
  page_objects_path: 'tests/page-objects', // page object options
  output_folder: 'reports', // output reports
  custom_assertions_path: '',
  globals_path: '', // Execute Js Before and After All Test Run
  live_output: true, // live console output
  disable_colors: false, // scenarios colors
  test_settings: {
    default: {
      launch_url: process.env.BASE_URL,
      selenium_port: 4443,
      selenium_host: '172.17.0.1',
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: false,
        path: 'screenshots',
      },
      desiredCapabilities: {
        browserName: 'phantomjs',
        acceptInsecureCerts: true,
        acceptSslCerts: true,
        'phantomjs.page.settings.userAgent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
      },
    },
  },
};
