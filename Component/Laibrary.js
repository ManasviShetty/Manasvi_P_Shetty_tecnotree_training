import React from 'react';


const LibraryForm = () => {
  return (
    <div className="form-container">
      <h2>Library Form</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />
        <br />
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" />
        <br />
        <label htmlFor="publisher">Publisher:</label>
        <input type="text" id="publisher" name="publisher" />
        <br />
        <label htmlFor="year">Year:</label>
        <input type="number" id="year" name="year" />
        <br />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default LibraryForm;
