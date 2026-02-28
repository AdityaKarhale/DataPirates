import { config } from 'dotenv';
config();
import { answerQuestionWithWikipedia } from './src/ai/flows/answer-question-with-wikipedia';

async function test() {
    console.log("Testing Genkit AI Flow directly...");
    const result = await answerQuestionWithWikipedia({ question: "Who is the CEO of Google?" });
    console.log("Success! Output:", JSON.stringify(result, null, 2));
}

test().catch(e => {
    console.error("Test failed:", e);
    process.exit(1);
});
