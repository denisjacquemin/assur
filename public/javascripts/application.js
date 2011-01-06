var quicksearch = null;

document.observe("dom:loaded", function() {
  
  // init Quick Search on customers/index
  if ($('qs-target') != undefined) {
    quicksearch = new CustomerFilter('qs-target');
    quicksearch.filter($F('quicksearch'));
  }
  
  // put the focus on input with a .focus selector
  $$('.focus').invoke('select');
  
});

// build a collection of <option> and add it to the target (<select>)
function buildOptions(request, target, selectedOptionValue) {
    var data = request.responseText.evalJSON();
    var oldSelect = $(target);
    var newSelect = new Element('select', {id: target});
    data.each(function(d, i){
       var opt = new Element('option');
       opt.text = d.name;
       opt.value = d.id;
       newSelect.options.add(opt);
    });
    oldSelect.replace(newSelect);
    newSelect.value = selectedOptionValue;
}

// remove an option from a select
function remove_option_by_value(select, value) {
    if ($(select) != undefined) {
        $(select).select('option[value=' + value + ']').invoke('remove');
        $(select).value = '';
        
    }
}

function reload_options(url, selectId) {
    var selectedOption = $F(selectId);
	new Ajax.Request(url, {
		onSuccess: function(response) {
			buildOptions(response, selectId, selectedOption);
    	}
	});
}

function fillFormFromEid(card) {
    $('customer_firstname').value = card.getFirstName1();
    $('customer_lastname').value = card.getSurname();
    $('customer_address_attributes_street').value = card.getStreet();
    $('customer_address_attributes_number').value = card.getStreetNumber();
    $('customer_address_attributes_zipcode').value = card.getZipCode();
    $('customer_address_attributes_box').value = card.getBoxNumber();
    $('customer_address_attributes_city').value = card.getMunicipality();
    $('customer_idnum').value = card.getNationalNumber();
    $('customer_nationality_id').value = 1; // eid only for belgian
    if(card.getCountry() == 'be') { $('customer_address_attributes_country_id').value = 1;}
	if(card.getCountry() == 'fr') { $('customer_address_attributes_country_id').value = 2;}
	if(card.getCountry() == 'lu') { $('customer_address_attributes_country_id').value = 3;}
	if(card.getCountry() == 'nl') { $('customer_address_attributes_country_id').value = 4;}
	if(card.getSex() == 'M') {$('customer_sex_id').value = 1;}
	if(card.getSex() == 'F') {$('customer_sex_id').value = 2;}
		
}