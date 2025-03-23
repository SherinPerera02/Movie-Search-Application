function search(){
    console.log("Searching...")
    let movieTag = document.getElementById("movieTag")
    let movie = movieTag.value
    console.log(movie)
    let apiKey = "96bbc71"
    let url = "http://www.omdbapi.com/?apikey="+apiKey+"&t="+movie

    let httpRequest = new XMLHttpRequest()
    httpRequest.open("GET",url)
    httpRequest.responseType = "json"
    httpRequest.send()

    httpRequest.onload = function(){
        console.log(httpRequest.response)
        let posterTag = document.getElementById("poster")
        let titleTag = document.getElementById("title")
        let plotTag = document.getElementById("plot")
        let writerTag = document.getElementById("writer")
        let directorTag = document.getElementById("director")
        let actorsTag = document.getElementById("actors");
        let awardsTag = document.getElementById("awards");
        let boxOfficeTag = document.getElementById("boxOffice");
        let countryTag = document.getElementById("country");
        let dvdTag = document.getElementById("dvd");
        let genreTag = document.getElementById("genre");
        let languageTag = document.getElementById("language");

        posterTag.src = httpRequest.response.Poster
        titleTag.innerHTML = httpRequest.response.Title
        plotTag.innerHTML = httpRequest.response.Plot
        writerTag.innerHTML = `<strong>Writer:</strong> ${httpRequest.response.Writer}`;
        directorTag.innerHTML = `<strong>Director:</strong> ${httpRequest.response.Director}`;
        actorsTag.innerHTML = `<strong>Actors:</strong> ${httpRequest.response.Actors}`;
        awardsTag.innerHTML = `<strong>Awards:</strong> ${httpRequest.response.Awards}`;
        boxOfficeTag.innerHTML = `<strong>Box Office:</strong> ${httpRequest.response.BoxOffice}`;
        countryTag.innerHTML = `<strong>Country:</strong> ${httpRequest.response.Country}`;
        dvdTag.innerHTML = `<strong>DVD Release:</strong> ${httpRequest.response.DVD}`;
        genreTag.innerHTML = `<strong>Genre:</strong> ${httpRequest.response.Genre}`;
        languageTag.innerHTML = `<strong>Language:</strong> ${httpRequest.response.Language}`;
    };
        
}
