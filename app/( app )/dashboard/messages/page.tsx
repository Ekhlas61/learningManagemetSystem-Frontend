const sampleMessages = [
  { id: 1, from: "Instructor", text: "Please submit your assignment." },
  { id: 2, from: "Admin", text: "Welcome to the LMS!" },
];

export default function MessagesPage() {
  return (
    <div className="text-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Messages</h1>
      <ul className="space-y-2">
        {sampleMessages.map((m) => (
          <li key={m.id} className="p-3 bg-white rounded shadow">
            <strong className="text-gray-900">{m.from}:</strong>{" "}
            <span className="text-gray-800">{m.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}