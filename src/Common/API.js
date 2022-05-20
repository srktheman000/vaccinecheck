export const getCentersData = async (date) => {
  const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=363&date=${date}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
