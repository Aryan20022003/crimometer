const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};
const generateTravelAdvisory = async (
  location,
  month,
  crimeData,
  onProgress
) => {
  console.log("fuck you crime");
  // const prompt = `Generate a travel advisory for ${location} during the month of ${month}. The crime data for this period is as follows: ${crimeData}. Provide a concise and informative summary of the safety risks and guidelines for travelers.`;
  let dataString = "";
  for (let i = 0; i < crimeData.length; i++) {
    dataString +=
      crimeData[i].type +
      ": " +
      crimeData[i].count +
      "," +
      crimeData[i].rate +
      " ";
  }
  // console.log(dataString);
  // return "hello gpt";
  const prompt = `Generate a travel advisory for ${location} during the month of ${months[month]}. The crime data for this period is as follows:
  type_of_crime: count, rate [(current crime/total crime)*100]
  ${dataString}.
  Provide a concise and informative summary of the safety risks and guidelines for travelers seperated by points, mainly foucs on the crimes above 50% rate and also provide strict advisory when more than 10 for a case, semi strirct when less than 5 crime, very less strict when less than 2 and safe when no cases are there.follow a consistent format.
`;

  const requestBody = {
    prompt: prompt,
    max_tokens: 150,
    n: 1,
    stop: null,
    temperature: 0.7,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch(
      // "https://api.openai.com/v1/engines/text-ada-001/completions",
      requestOptions
    );

    if (response.ok) {
      const reader = response.body.getReader();
      let text = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        text += new TextDecoder().decode(value);
        onProgress(text);
      }

      const data = JSON.parse(text);
      return data.choices[0].text.trim();
    } else {
      throw new Error("Error generating travel advisory");
    }
  } catch (error) {
    console.error("Error generating travel advisory:", error);
    return null;
  }
};

export default generateTravelAdvisory;
