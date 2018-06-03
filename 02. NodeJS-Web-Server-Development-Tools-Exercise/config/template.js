module.exports = {
    movieTemplate: moviePoster => ` 
             <div class="movie">
                  <img class="moviePoster" src=${decodeURIComponent(moviePoster)}/>
             </div>
    `,
    errorTemplate: '<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>',
    successTemplate: '<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>',
    movieDetailsTemplate: `
                <div class="content">
                      <img src="{{moviePoster}}" alt=""/>
                      <h3>Title {{movieTitle}}</h3>
                      <h3>Year {{movieYear}}</h3>
                      <p> {{movieDescription}}</p>
                </div>`
}