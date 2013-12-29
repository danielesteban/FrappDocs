window.addEventListener('frapp.init', function(e) {
	var select = $('header select'),
		iframe = $('#viewer'),
		docs = $('#frappDocs');

	[
		{
			name : 'Frapp'
		},
		{
			name : 'Bootstrap',
			url : 'http://getbootstrap.com/getting-started/'
		},
		{
			name : 'jQuery',
			url : 'http://api.jquery.com/'
		},
		{
			name : 'Less',
			url : 'http://lesscss.org/#synopsis'
		},
		{
			name : 'Handlebars',
			url : 'http://handlebarsjs.com/'
		}
	].forEach(function(doc) {
		select.append($('<option value="' + (doc.url || doc.name) + '">' + doc.name + '</option>'));
	});

	select.change(function() {
		if(select.val() === 'Frapp') {
			iframe.hide();
			docs.show();
		} else {
			iframe.attr('src', select.val());
			docs.hide();
			iframe.show();
		}
	});

	$('body').show();
});
