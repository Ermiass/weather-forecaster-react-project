import axios from 'axios';

const getLocation = async (location) => {
  try {
    return await axios.get(`https://geocode.maps.co/search?q=${location}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
export default getLocation;
