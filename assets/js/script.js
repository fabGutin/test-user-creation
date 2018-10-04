var formId = "user_creation_form";
var firstnameInputId = "firstname";
var lastnameInputId = "lastname";
var emailInputId = "email";
var birthdateInputId = "birthdate";
var address1InputId = "address1";
var address2InputId = "address2";
var zipcodeInputId = "zipcode";
var cityInputId = "city";
var countrySelectId = "country";
var phoneCountryCodeSelectId = "phone_country_code";
var phoneInputId = "phone";


$( document ).ready(function() {

	$.getJSON( "assets/data/countries.json", function( data ) {

		var phoneCountryCodeOptionToAppend = "";
		var countryOptionToAppend = "";

		$.each( data, function( key, val ) {

			phoneCountryCodeOptionToAppend = '<option value="' + val.alpha2Code + '" phone_country_code_number="' + val.phone_code + '"';

			if (val.alpha2Code == "FR") { phoneCountryCodeOptionToAppend += ' selected'; }

			phoneCountryCodeOptionToAppend += '>' + val.trans_fr + ' (' + val.phone_code + ')</option>';

			$('#' + phoneCountryCodeSelectId).append(phoneCountryCodeOptionToAppend);


			countryOptionToAppend = '<option value="' + val.alpha2Code + '"';

			if (val.alpha2Code == "FR") { countryOptionToAppend += ' selected'; }

			countryOptionToAppend += '>' + val.trans_fr + '</option>';

			$('#' + countrySelectId).append(countryOptionToAppend);

		});
	});

	var cleaveZipcode = new Cleave('#zipcode', {
		numeral: true,
		numeralPositiveOnly: true,
		numeralThousandsGroupStyle:"none",
		numeralDecimalScale:0
	});


	$( "#" + countrySelectId ).change(function() {
		$( "#" + phoneCountryCodeSelectId ).val(this.value).change();
	});

	var cleavePhone = new Cleave('#' + phoneInputId, {
		phone: true,
		phoneRegionCode: 'FR'
	});

	$( "#" + phoneCountryCodeSelectId ).change(function() {
		cleavePhone.setPhoneRegionCode(this.value);
		cleavePhone.setRawValue($('#' + phoneInputId).val());
	});



	moment.locale('fr');

	$('#' + birthdateInputId).daterangepicker({
		singleDatePicker: true,
		showDropdowns: true,
		startDate: moment().subtract(10, "years").format('DD/MM/YYYY'),
		autoUpdateInput: false,
		minDate: "01/01/1901",
		maxDate: moment().format('DD/MM/YYYY'),
		locale: {
			format: 'DD/MM/YYYY'
		}
	}, function(chosen_date) {
		$('#' + birthdateInputId).val(chosen_date.format('DD/MM/YYYY'));
		$('#' + birthdateInputId).parsley().validate();
	});


	window.Parsley.addValidator('date', {
		validateString: function(value) {
			return moment(value, "DD/MM/YYYY", true).isValid();
		},
		messages: {
			en: 'Please specify a valid date',
			fr: "Veuillez spécifier une date valide."
		}
	});



	$('#' + formId).parsley().on('field:validated', function() {
		var ok = $('.parsley-error').length === 0;
		$("#" + formId).toggleClass('is-invalid', !ok);
		$("#" + formId).toggleClass('is-valid', ok);
	})
	.on('form:submit', function() {
		var jsonFormResults = {
			"firstname" : $("#" + firstnameInputId).val(),
			"lastname" : $("#" + lastnameInputId).val(),
			"email" : $("#" + emailInputId).val(),
			"birthdate" : $("#" + birthdateInputId).val(),
			"address1" : $("#" + address1InputId).val(),
			"address2" : $("#" + address2InputId).val(),
			"zipcode" : $("#" + zipcodeInputId).val(),
			"city" : $("#" + cityInputId).val(),
			"country_code" : $("#" + countrySelectId).val(),
			"country" : $("#" + countrySelectId + " option:selected").text(),
			"phone_country_code" : $("#" + phoneCountryCodeSelectId).val(),
			"phone_country_code_number" : $("#" + phoneCountryCodeSelectId + " option:selected").attr('phone_country_code_number'),
			"phone" : $("#" + phoneInputId).val()
		};

		$('#formResultModal .modal-body').html(JSON.stringify(jsonFormResults, null, 2));

		$('#formResultModal').modal('show');
		return false;
	});


});