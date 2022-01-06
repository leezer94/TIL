export const root = document.querySelector('.autocomplete');
root.innerHTML = `
<label><b>Search For a Movie</b></label>
<input type="text" class="input">
<div class="dropdown">
  <div class="dropdown-menu">
    <div class="dropdown-content results"></div>
  </div>
</div>
`;

export const movieTemplate = (movieDetail) => {
  return `
      <article class="media">
             <figure class="media-left">
               <p class="image">
                 <img src="${movieDetail.Poster}" alt="" />
               </p>
             </figure>
             <div class="media-content">
               <div class="content">
                 <h1>${movieDetail.Title}</h1>
                 <h4>${movieDetail.Genre}</h4>
                 <p>${movieDetail.Plot}</p>
               </div>
             </div>
           </article>

           <article class="notification is-primary">
          <p class="title">${movieDetail.Awards}</p>
          <p class="subtitle">Awards</p>
        </article>
   
           <article class="notification is-primary">
          <p class="title">${movieDetail.BoxOffice}</p>
          <p class="subtitle">BoxOffice</p>
        </article>
   
           <article class="notification is-primary">
          <p class="title">${movieDetail.Metascore}</p>
          <p class="subtitle">Metascore</p>
        </article>
   
           <article class="notification is-primary">
          <p class="title">${movieDetail.imdbRating}</p>
          <p class="subtitle">IMDB Rating</p>
        </article>

           <article class="notification is-primary">
          <p class="title">${movieDetail.imdbVotes}</p>
          <p class="subtitle">IMDB Votes</p>
        </article>
   
      `;
};
