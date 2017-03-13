/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
		    module: 'MMM-Traffic',
		    position: 'bottom_left',
		    classes: 'dimmed medium', //optional, default is 'bright medium', only applies to commute info not route_name
		    config: {
		        api_key: '',
		        mode: 'driving',
		        origin: '34 Tudor St, Richmond, Victoria, Australia 3121',
		        destination: '41 Stewart St, Richmond, Victoria, Australia 3121',
		        arrival_time: '0800', //optional, but needs to be in 24 hour time if used.
		        route_name: 'Home to Work',
		        changeColor: true,
		        showGreen: false,
		        limitYellow: 5, //Greater than 5% of journey time due to traffic
		        limitRed: 20, //Greater than 20% of journey time due to traffic
		        traffic_model: 'pessimistic',
		        interval: 120000, //2 minutes
		        showWeekend: false,
		        allTime: false
		    }
		},
		// {
		// 	module: 'calendar',
		// 	header: 'AU Holidays',
		// 	position: 'top_left',
		// 	config: {
		// 		calendars: [
		// 			{
		// 				symbol: 'calendar-check-o ',
		// 				url: 'webcal://www.calendarlabs.com/templates/ical/Australia-Holidays.ics'
		// 			}
		// 		]
		// 	}
		// },
		// {
		// 	module: 'compliments',
		// 	position: 'lower_third'
		// },
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Melbourne',
				locationID: '2158177',  //ID from http://www.openweathermap.org
				appid: 'acb5faaedb2471807ecbddb05afeb691',
				showHumidity: true
			}
		},
		// {
		// 	module: 'weatherforecast',
		// 	position: 'top_right',
		// 	header: 'Weather Forecast',
		// 	config: {
		// 		location: 'Melbourne',
		// 		locationID: '2158177',  //ID from http://www.openweathermap.org
		// 		appid: 'acb5faaedb2471807ecbddb05afeb691'
		// 	}
		// },
		// {
		// 	module: 'newsfeed',
		// 	position: 'bottom_bar',
		// 	config: {
		// 		feeds: [
		// 			{
		// 				title: "ABC News",
		// 				url: "http://www.abc.net.au/news/feed/51120/rss.xml"
		// 			}
		// 		],
		// 		showSourceTitle: true,
		// 		showPublishDate: true
		// 	}
		// },
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
