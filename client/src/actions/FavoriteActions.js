export function createFavorite(title, description, category, source_url) {
  return dispatch => {
    return fetch('favorites', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, category, source_url })
    })
      .then(response => response.json())
      .then(payload => {
        dispatch({ type: 'CREATE_FAVORITE', payload });
      });
  };
}
