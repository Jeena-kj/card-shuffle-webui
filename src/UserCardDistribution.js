import React, { useState } from 'react';

const UserCardDistribution = () => {
  const [players, setPlayers] = useState('');
  const [output, setOutput] = useState('');
  const [isError, setIsError] = useState(false); // New state for error handling

  // Handle input changes and update the players state
  const handleInputChange = (e) => {
    setPlayers(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset output and error state at the beginning of the submission
    setOutput('');
    setIsError(false);

    try {
      const res = await fetch(`http://127.0.0.1:8000/shuffle/${players}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check if the response is OK
      if (!res.ok) {
        const errorData = await res.json(); // Set success message
        throw new Error(errorData.error || 'Unknown error occurred');
      }

      // Parse the response data
      const data = await res.json();
      setOutput(data.resData || 'No cards distributed');
    } catch (error) {
      setIsError(true); // Set error state
      setOutput(`Error in card distribution: ${error.message}`); // Display error message
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1>Card Distribution</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="player">Choose Number Of Player: </label>
        <input
          type="number"
          id="player"
          name="player"
          required
          value={players}
          onChange={handleInputChange}
        />
        <button type="submit">Distribute Cards</button>
      </form>

      <div
        id="show_output"
        style={{
          marginTop: '20px',
          whiteSpace: 'pre-wrap',
          color: isError ? 'red' : 'blue', // Change color based on error state
        }}
      >
        {output}
      </div>
    </div>
  );
};

export default UserCardDistribution;
