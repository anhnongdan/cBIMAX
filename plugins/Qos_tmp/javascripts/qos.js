$(document).ready(function () {

	// setInterval(function () {
	//
	// 	// get the root element for our report
	// 	var $dataTableRoot = $('.dataTable[data-report="QoS.overViewBandwidthGraph"]');
	//
	// 	// in the UI, the root element of a report has a JavaScript object associated to it.
	// 	// we can use this object to reload the report.
	// 	var dataTableInstance = $dataTableRoot.data('uiControlObject');
	//
	// 	// we want the table to be completely reset, so we'll reset some
	// 	// query parameters then reload the report
	// 	dataTableInstance.resetAllFilters();
	// 	dataTableInstance.reloadAjaxDataTable();
	//
	// }, 3600 * 1000);

	// setInterval(function () {
	//
	// 	// get the root element for our report
	// 	var $dataTableRoot = $('.dataTable[data-report="QoS.overViewHttpCodeGraph"]');
	//
	// 	// in the UI, the root element of a report has a JavaScript object associated to it.
	// 	// we can use this object to reload the report.
	// 	var dataTableInstance = $dataTableRoot.data('uiControlObject');
	//
	// 	// we want the table to be completely reset, so we'll reset some
	// 	// query parameters then reload the report
	// 	dataTableInstance.resetAllFilters();
	// 	dataTableInstance.reloadAjaxDataTable();
	//
	// }, 15 * 1000);

	// setInterval(function () {
	//
	// 	// get the root element for our report
	// 	var $dataTableRoot = $('.dataTable[data-report="QoS.overViewIspGraph"]');
	//
	// 	// in the UI, the root element of a report has a JavaScript object associated to it.
	// 	// we can use this object to reload the report.
	// 	var dataTableInstance = $dataTableRoot.data('uiControlObject');
	//
	// 	// we want the table to be completely reset, so we'll reset some
	// 	// query parameters then reload the report
	// 	dataTableInstance.resetAllFilters();
	// 	dataTableInstance.reloadAjaxDataTable();
	//
	// }, 15 * 1000);
	//
	// setInterval(function () {
	//
	// 	// get the root element for our report
	// 	var $dataTableRoot = $('.dataTable[data-report="QoS.overViewCountryGraph"]');
	//
	// 	// in the UI, the root element of a report has a JavaScript object associated to it.
	// 	// we can use this object to reload the report.
	// 	var dataTableInstance = $dataTableRoot.data('uiControlObject');
	//
	// 	// we want the table to be completely reset, so we'll reset some
	// 	// query parameters then reload the report
	// 	dataTableInstance.resetAllFilters();
	// 	dataTableInstance.reloadAjaxDataTable();
	//
	// }, 15 * 1000);
});

// $(function() {
// 	var refreshWidget = function (element, refreshAfterXSecs) {
// 		// if the widget has been removed from the DOM, abort
// 		if (!element.length || !$.contains(document, element[0])) {
// 			return;
// 		}
//
// 		function scheduleAnotherRequest()
// 		{
// 			setTimeout(function () { refreshWidget(element, refreshAfterXSecs); }, refreshAfterXSecs * 1000);
// 		}
//
// 		if (Visibility.hidden()) {
// 			scheduleAnotherRequest();
// 			return;
// 		}
//
// 		var lastMinutes = $(element).attr('data-last-minutes') || 3,
// 			translations = JSON.parse($(element).attr('data-translations'));
// 		var ajaxRequest = new ajaxHelper();
// 		ajaxRequest.addParams({
// 			module: 'API',
// 			method: 'QoS.overviewGetUserSpeed',
// 			format: 'json',
// 			lastMinutes: lastMinutes,
// 			metrics: 'avg_speed',
// 			refreshAfterXSecs: 5
// 		}, 'get');
// 		ajaxRequest.setFormat('json');
// 		ajaxRequest.setCallback(function (data) {
// 			data = data[0];
//
// 			var user_speed 			= data['user_speed'];
// 			var refreshafterxsecs 	= data['refreshAfterXSecs'];
// 			var lastMinutes 		= data['lastMinutes'];
// 			var userSpeedMessage 	= translations['user_speed'];
//
// 			$('.simple-realtime-visitor-counter', element)
// 				.attr('title', userSpeedMessage)
// 				.find('div').text(user_speed);
// 			$('.simple-realtime-visitor-widget', element).attr('data-refreshafterxsecs', refreshAfterXSecs).attr('data-last-minutes', lastMinutes);
//
// 			scheduleAnotherRequest();
// 		});
// 		ajaxRequest.send(true);
// 	};
//
// 	var exports = require("piwik/QoS");
// 	exports.initSimpleRealtimeVisitorWidget = function () {
// 		$('.simple-realtime-visitor-widget').each(function() {
// 			var $this = $(this),
// 				refreshAfterXSecs = $this.attr('data-refreshAfterXSecs');
// 			if ($this.attr('data-inited')) {
// 				return;
// 			}
//
// 			$this.attr('data-inited', 1);
//
// 			setTimeout(function() { refreshWidget($this, refreshAfterXSecs ); }, refreshAfterXSecs * 1000);
// 		});
// 	};
// });

/* Refresh widget bandwidth in overview */
// $(function() {
// 	var refreshWidget = function (element, refreshAfterXSecs) {
// 		// if the widget has been removed from the DOM, abort
// 		if (!element.length || !$.contains(document, element[0])) {
// 			return;
// 		}
//
// 		function scheduleAnotherRequest()
// 		{
// 			setTimeout(function () { refreshWidget(element, refreshAfterXSecs); }, refreshAfterXSecs * 1000);
// 		}
//
// 		if (Visibility.hidden()) {
// 			scheduleAnotherRequest();
// 			return;
// 		}
//
// 		var lastMinutes = $(element).attr('data-last-minutes') || 3,
// 			translations = JSON.parse($(element).attr('data-translations'));
// 		var ajaxRequest = new ajaxHelper();
// 		ajaxRequest.addParams({
// 			module: 'API',
// 			method: 'QoS.overviewGetBandwidth',
// 			format: 'json',
// 			lastMinutes: lastMinutes,
// 			metrics: 'traffic_ps',
// 			refreshAfterXSecs: 5
// 		}, 'get');
// 		ajaxRequest.setFormat('json');
// 		ajaxRequest.setCallback(function (data) {
// 			data = data[0];
//
// 			var bandwidth 			= data['bandwidth'];
// 			var refreshafterxsecs 	= data['refreshAfterXSecs'];
// 			var lastMinutes 		= data['lastMinutes'];
// 			var bandwidthMessage 	= translations['bandwidth'];
//
// 			$('.overview-widget-bandwidth-counter', element)
// 				.attr('title', bandwidthMessage)
// 				.find('div').text(bandwidth);
// 			$('.overview-widget-bandwidth-widget', element).attr('data-refreshafterxsecs', refreshAfterXSecs).attr('data-last-minutes', lastMinutes);
//
// 			scheduleAnotherRequest();
// 		});
// 		ajaxRequest.send(true);
// 	};
//
// 	var exports = require("piwik/QoS");
// 	exports.initOverviewBandwidthWidget = function () {
// 		$('.overview-widget-bandwidth-widget').each(function() {
// 			var $this = $(this),
// 				refreshAfterXSecs = $this.attr('data-refreshAfterXSecs');
// 			if ($this.attr('data-inited')) {
// 				return;
// 			}
//
// 			$this.attr('data-inited', 1);
//
// 			setTimeout(function() { refreshWidget($this, refreshAfterXSecs ); }, refreshAfterXSecs * 1000);
// 		});
// 	};
// });

/* widgetthruput */
$(function() {
	var refreshWidget = function (element, refreshAfterXSecs) {
		// if the widget has been removed from the DOM, abort
		if (!element.length || !$.contains(document, element[0])) {
			return;
		}
		function scheduleAnotherRequest() {
			setTimeout(function () { refreshWidget(element, refreshAfterXSecs); }, refreshAfterXSecs * 1000);
		}
		if (Visibility.hidden()) {
			scheduleAnotherRequest();
			return;
		}
		var lastMinutes = $(element).attr('data-last-minutes') || 2;
		var ajaxRequest = new ajaxHelper();
		ajaxRequest.addParams({
			module: 'API',
			method: 'QoS.getTraffps',
			format: 'json',
			lastMinutes: lastMinutes,
			metric: 'traffic_ps',
			refreshAfterXSecs: 5
		}, 'get');
		ajaxRequest.setFormat('json');
		ajaxRequest.setCallback(function (data) {
			data = data[0];
			// set text and tooltip of visitors count metric
			var traff = data['traffic_ps'];
			var unit  = data['unit'];
			$('.realtime-thruput-counter', element)
				.attr('title', traff+' '+unit+'bps')
				.find('div').text(traff)
			$('.realtime-thruput-counter', element)
				.find('span').text(unit+'bps');
			$('.realtime-thruput-widget', element).attr('data-refreshafterxsecs', refreshAfterXSecs).attr('data-last-minutes', lastMinutes);

			scheduleAnotherRequest();
		});
		ajaxRequest.send(true);
	};

	var exports = require("piwik/QoS");
	exports.initRealtimeThruputWidget = function () {
		$('.realtime-thruput-widget').each(function() {
			var $this = $(this),
				refreshAfterXSecs = $this.attr('data-refreshAfterXSecs');
			if ($this.attr('data-inited')) {
				return;
			}
			$this.attr('data-inited', 1);
			setTimeout(function() { refreshWidget($this, refreshAfterXSecs ); }, refreshAfterXSecs * 1000);
		});
	};

	/* Avg Widget */
    var refreshWidgetAvg = function (element, refreshAfterXSecs) {
        // if the widget has been removed from the DOM, abort
        if (!element.length || !$.contains(document, element[0])) {
            return;
        }
        function scheduleAnotherRequest() {
            setTimeout(function () { refreshWidget(element, refreshAfterXSecs); }, refreshAfterXSecs * 1000);
        }
        if (Visibility.hidden()) {
            scheduleAnotherRequest();
            return;
        }
        var lastMinutes = $(element).attr('data-last-minutes') || 2;
        var ajaxRequest = new ajaxHelper();
        ajaxRequest.addParams({
            module: 'API',
            method: 'QoS.getAvgDl',
            format: 'json',
            lastMinutes: lastMinutes,
            metric: 'avg_speed',
            refreshAfterXSecs: 5
        }, 'get');
        ajaxRequest.setFormat('json');
        ajaxRequest.setCallback(function (data) {
            data = data[0];
            // set text and tooltip of visitors count metric
            var traff = data['avg_speed'];
            var unit  = data['unit'];
            $('.realtime-avg-counter', element)
                .attr('title', traff+' '+unit+'bps')
                .find('div').text(traff)
            $('.realtime-avg-counter', element)
                .find('span').text(unit+'bps');
            $('.realtime-avg-widget', element).attr('data-refreshafterxsecs', refreshAfterXSecs).attr('data-last-minutes', lastMinutes);

            scheduleAnotherRequest();
        });
        ajaxRequest.send(true);
    };

    var exports = require("piwik/QoS");
    exports.initRealtimeAvgWidget = function () {
        $('.realtime-avg-widget').each(function() {
            var $this = $(this),
                refreshAfterXSecs = $this.attr('data-refreshAfterXSecs');
            if ($this.attr('data-inited')) {
                return;
            }
            $this.attr('data-inited', 1);
            setTimeout(function() { refreshWidgetAvg($this, refreshAfterXSecs ); }, refreshAfterXSecs * 1000);
        });
    };
});