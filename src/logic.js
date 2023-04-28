import supabase from './supaBase';

// fetch from supabase

export default async function getCrimeData(location, month) {
  // Query crime data for the specified location and month, regardless of the year
  const { data, error } = await supabase
    .from('crimedata')
    .select('*')
    .eq('location', location)
    .eq('month', month);

  if (error) {
    console.error('Error fetching crime data:', error);
    return;
  }

  // Log the fetched data
  console.log('Fetched data:', data);

  // Calculate total crimes and crime counts per category
  const crimeCounts = data.reduce((counts, crime) => {
    counts[crime.crimetype] = (counts[crime.crimetype] || 0) + 1;
    return counts;
  }, {});

  const totalCrimes = data.length;

  // Calculate crime rates as a percentage of total crimes and combine them with the crime count in an array
  const crimes = Object.entries(crimeCounts).map(([type, count]) => ({
    type,
    count,
    rate: parseFloat(((count / totalCrimes) * 100).toFixed(2)),
  }));

  return {
    totalCrimes,
    crimes,
  };
}
