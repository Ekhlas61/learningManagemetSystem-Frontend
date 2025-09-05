'use client';
import { useParams } from 'next/navigation';
import { subjectData, Question } from '../subjectData';

export default function SubjectQuestions() {
  const params = useParams();

  // Safe handling for string or string[]
  const subjectName = Array.isArray(params.subject)
    ? params.subject[0].trim()
    : (params.subject || "").trim();

  const questions: Question[] = subjectData[subjectName as keyof typeof subjectData];

  if (!questions) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">{subjectName} Questions</h1>
        <p className="text-red-600">No questions found for this subject.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{subjectName} Questions</h1>
      <ol className="list-decimal ml-5 space-y-3">
        {questions.map((q) => (
          <li key={q.id}>
            <p className="font-medium">{q.question}</p>
            {q.type === 'mcq' && q.options && (
              <ul className="list-disc ml-5">
                {q.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
            )}
            <p className="text-orange-600 mt-1">Answer: {q.answer}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}