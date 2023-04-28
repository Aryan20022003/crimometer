const months = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};
const generateTravelAdvisory = async (
  location,
  month,
  crimeData,
  onProgress
) => {
  console.log('fuck you crime');
  let dataString = '';
  for (let i = 0; i < crimeData.length; i++) {
    dataString +=
      crimeData[i].type +
      ': ' +
      crimeData[i].count +
      ',' +
      crimeData[i].rate +
      ' ';
  }
  //   const prompt = `Generate a travel advisory for ${location} during the month of ${months[month]}. The crime data for this period is as follows:
  //   type_of_crime: count, rate [(current crime/total crime)*100]
  //   ${dataString}.
  //   Provide a concise and informative summary of the safety risks and guidelines for travelers separated by points, mainly focus on the crimes above 50% rate and also provide strict advisory when more than 10 for a case, semi strict when less than 5 crime, very less strict when less than 2 and safe when no cases are there.follow a consistent format.
  // `;
  const prompt = `Generate a travel advisory for ${location} in ${months[month]}, considering crime data in format:
  type_of_crime: count, rate [(current crime/total crime)*100]
  ${dataString}.
  Provide a summary of safety risks in very short. then give guidelines for travelers, focusing on crimes with rates above 50% and applying strictness levels: >10 cases: strict; <5 cases: semi-strict; <2 cases: very less strict; 0 cases: safe. focus more on the strict cases during providing advisory. Follow the Indian advisory format.`;

  const requestBody = {
    prompt: prompt,
    max_tokens: 250,
    n: 1,
    stop: null,
    temperature: 0,
  };

  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      requestOptions
    );

    if (response.ok) {
      const reader = response.body.getReader();
      let text = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        text += new TextDecoder().decode(value);
        if (typeof onProgress === 'function') {
          onProgress(text);
        }
      }

      const data = JSON.parse(text);
      return data.choices[0].text.trim();
    } else {
      throw new Error('Error generating travel advisory');
    }
  } catch (error) {
    console.error('Error generating travel advisory:', error);
    return null;
  }
};

export default generateTravelAdvisory;
