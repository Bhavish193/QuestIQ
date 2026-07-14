export async function fetchQuestions(amount = 5, category = "") {

    let url = `https://the-trivia-api.com/v2/questions?limit=${amount}`;

    if (category) {
        url += `&categories=${category}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch questions.");
    }

    const data = await response.json();

    return data.map((question) => {

        const options = [
            ...question.incorrectAnswers,
            question.correctAnswer
        ];

        options.sort(() => Math.random() - 0.5);

        return {
            question: question.question.text,
            options,
            answer: question.correctAnswer
        };
    });
}