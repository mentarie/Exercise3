$(document).ready(function(){
	// API
	var _url="https://swapi.co/api/planets/?format=json";

	// STORE DATA
	var result = '';

	// OPTION
	var swapi_option='';
	swapi_option+='<option value="Semua">Semua</option>'; 

	// STORE ALL DATA FROM API
	var option=[];

	// GET DATA
	$.get (_url,function(data){
		// store data
		$.each(data,function(key,items){
            //Store Nama
            _names = items.name;
            result +=   '<div class="col-3 card">' +
                            '<p><b>' + items.name + '</b></p>' +
                            '<p>' + _names + '</p>' +
                        '</div>';
            if ($.inArray(_names, name) === -1){
                //if Nama not Found
                //then input Nama opt
                option.push(_names);
                gender_opt += '<option value="' + _names + '">' + _names +'</option>';
            }
        });

		// use Selector by Id swapi list
		// replace inner html
		$('#tabel_data').html(result);

		$('#filter_select').html(swapi_option);

		$('#gender-select').on('change',function(){
			updateData($(this).val());
		})		
	});	
});

function updateData(_names){
	newResult = '';
	var _newUrl = "https://swapi.co/api/planets/?format=json";
	if(_names!='Semua'){
        _newUrl = _newUrl + "?name=" + _names;
    }

    $.get (_newUrl,function(data){
    	$.each(data,function(key,items){
    		_names = items.name;
    		newResult +=   '<div class="col-3 card">' +
                            '<p><b>' + items.name + '</b></p>' +
                            '<p>' + _names + '</p>' +
                        	'</div>';
        });
    // use Selector by Id swapi list
	// replace inner html
	$('#tabel_data').html(newResult);
    });

}

//Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
