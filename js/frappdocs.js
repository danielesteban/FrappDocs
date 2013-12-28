var onLoad = function(e) {
		var select = $('header select'),
			viewer = $('#viewer'),
			onChange = function() {
				viewer.attr('src', select.val());
			};

		[
			{
				name : 'Frapp',
				url : 'docs/frapp/index.html'
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
			select.append($('<option value="' + doc.url + '">' + doc.name + '</option>'));
		});

		select.change(onChange);
		onChange();
		window.removeEventListener('frapp.init', onLoad);
	};

window.addEventListener('frapp.init', onLoad);
