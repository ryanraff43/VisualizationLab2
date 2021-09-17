let attractions;
fetch('/VisualizationLab2/attractions.json')
    .then(response => response.json())
    .then(data => {
        attractions = data;

		attractions.sort(function (a, b) {
			return b.Visitors - a.Visitors;
		});

		let top5attractions = attractions.slice(0,5);

		renderBarChart(top5attractions);
    });

let category = document.querySelector('#attraction-category');
category.addEventListener('change', function(){
	console.log(category.value);
	filterData(category.value);
});

function filterData(category) {

	if (category == 'all') {
        let top5attractions = attractions.slice(0, 5);
        renderBarChart(top5attractions);
        return;
    }

	let filteredAttractions = attractions.filter((attraction) => {
		return attraction.Category == category;
	});

	filteredAttractions = filteredAttractions.slice(0,5);
	renderBarChart(filteredAttractions);
}

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category