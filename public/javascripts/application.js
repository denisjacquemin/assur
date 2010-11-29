var quicksearch = null;
document.observe("dom:loaded", function() {
  quicksearch = new CustomerFilter('customers');
  //var filters = new Array();
  //
  //listing = new AwesomeListing($$('.awesomelisting .company'), filters);

});