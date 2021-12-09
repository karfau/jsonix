var Jsonix = require("../../jsonix").Jsonix;

module.exports = {

	"ValidateMonthDay" : function(test) {
		var gMonthDay = Jsonix.Schema.XSD.Calendar.INSTANCE;

		// added an optional parameter for leap year. if not passed
		// in, it assumes that it is a leap year (prevents breakage)
		test.throws(function() {
			Jsonix.XML.Calendar.validateMonthDay(02, 29, false);
		});

		test.doesNotThrow(function() {
			Jsonix.XML.Calendar.validateMonthDay(02, 29, true);
		});

		test.doesNotThrow(function() {
			Jsonix.XML.Calendar.validateMonthDay(02, 29);
		});

		test.throws(function() {
			Jsonix.XML.Calendar.validateMonthDay(02, 30);
		}, "Error");

		test.throws(function() {
			Jsonix.XML.Calendar.validateMonthDay(04, 31);
		}, "Error");

		test.throws(function() {
			Jsonix.XML.Calendar.validateMonthDay(11, 31);
		}, "Error");

		test.doesNotThrow(function() {
			Jsonix.XML.Calendar.validateMonthDay(12, 31);
		}, "Error");

		test.done();
	}
}