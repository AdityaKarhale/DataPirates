import { NextResponse } from 'next/server';
import { answerQuestionWithWikipedia } from '@/ai/flows/answer-question-with-wikipedia';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { question } = body;

        if (!question) {
            return NextResponse.json({ error: 'Question is required' }, { status: 400 });
        }

        const result = await answerQuestionWithWikipedia({ question });

        return NextResponse.json(result);
    } catch (error) {
        console.error('Error answering question:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
