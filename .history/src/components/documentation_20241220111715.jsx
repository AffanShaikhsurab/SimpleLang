import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, Book, Code, Box } from 'lucide-react';

const DocSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-8">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center text-lg font-semibold hover:text-blue-600 transition-colors w-full"
      >
        {isOpen ? <ChevronDown className="mr-2" /> : <ChevronRight className="mr-2" />}
        {title}
      </button>
      <div className={`mt-4 pl-6 border-l-2 border-gray-200 ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

const CodeExample = ({ code }) => (
  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 font-mono text-sm overflow-x-auto">
    <div className="flex gap-2 mb-2">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <pre>{code}</pre>
  </div>
);

export default function Documentation() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-6">Programming in simple words</h1>
        <p className="text-xl text-gray-600 mb-8">
          Learn programming with easy-to-understand examples and simple explanations.
        </p>
        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
            <Book size={20} />
            Start Learning
          </button>
          <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
            <Play size={20} />
            Watch tutorial
          </button>
        </div>
      </div>

      <div className="space-y-12">
        <DocSection title="1. Creating Things (Variables)">
          <p className="mb-4">Think of variables like boxes where you can store your toys. You give the box a name and put something inside!</p>
          <CodeExample code={`name is "Lion"  // This creates a box named 'name' and puts "Lion" in it
age is 5      // This creates another box named 'age' with the number 5`} />
        </DocSection>

        <DocSection title="2. Making Lists (Arrays)">
          <p className="mb-4">Arrays are like a stack of boxes all tied together. You can put many things in them!</p>
          <CodeExample code={`animals is "Lion" , "Tiger" , "Bear"  // A list of animals
numbers is 1 , 2 , 3            // A list of numbers`} />
        </DocSection>

        <DocSection title="3. Teaching Your Program (Functions)">
          <p className="mb-4">Functions are like teaching your program a new trick. Once it learns it, it can do it whenever you ask!</p>
          <CodeExample code={`greet takes name does
    show("Hello, ", name, "!")
.

greet("Lion")  // This will show: Hello, Lion!`} />
        </DocSection>

        <DocSection title="4. Making Decisions (If Statements)">
          <p className="mb-4">Your program can make choices, just like you do! It checks if something is true and then decides what to do.</p>
          <CodeExample code={`if age equals 5 then
    show("You're five years old!")
otherwise
    show("You're not five years old.")
`} />
        </DocSection>

        <DocSection title="5. Repeating Things (Loops)">
          <p className="mb-4">Sometimes you want to do something over and over. Loops help you do that!</p>
          <CodeExample code={`repeat 3 times
    show("Hip hip hooray!")
`} />
        </DocSection>
      </div>

      <div className="mt-16 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Code size={24} />
          Ready to try it yourself?
        </h2>
        <p className="text-gray-600 mb-4">
          Start with simple examples and gradually build up to more complex programs. Remember, every expert was once a beginner!
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Box size={20} />
          Open Playground
        </button>
      </div>
    </div>
  );
}