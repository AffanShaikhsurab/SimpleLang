import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Play, Book, Code, Box, Search, Menu, X, ArrowRight } from 'lucide-react';

const DocSidebarLink = ({ title, active, onClick, hasSubItems, isSubItem }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2
    ${isSubItem ? 'ml-4 text-sm' : ''}
    ${active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
  >
    {hasSubItems && (active ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
    {title}
  </button>
);

const CodeExample = ({ code, title }) => (
  <div className="bg-gray-900 text-gray-100 rounded-lg overflow-hidden my-4">
    {title && (
      <div className="px-4 py-2 bg-gray-800 border-b border-gray-700 text-sm">
        {title}
      </div>
    )}
    <div className="p-4 font-mono text-sm">
      <div className="flex gap-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="whitespace-pre-wrap">{code}</pre>
    </div>
  </div>
);

const DocSection = ({ title, description, children }) => (
  <div className="mb-16" id={title.toLowerCase().replace(/\s+/g, '-')}>
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    {description && <p className="text-lg text-gray-600 mb-6">{description}</p>}
    {children}
  </div>
);

const SubSection = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = {
    'getting-started': {
      title: "Getting Started",
      content: (
        <DocSection 
          title="Getting Started" 
          description="Welcome to Simple Programming Language! Let's start with the basics and get you coding in no time."
        >
          <SubSection title="Your First Program">
            <p className="mb-4">Let's write your first program - the traditional "Hello, World!"</p>
            <CodeExample 
              title="hello_world.simple"
              code={`// Your first Simple program
message is "Hello, World!"
show(message)`} 
            />
          </SubSection>

          <SubSection title="Basic Syntax">
            <p className="mb-4">Our language uses simple, readable syntax that feels like writing English.</p>
            <CodeExample code={`// Variables
name is "Alex"

// Functions
greet takes person does
    show("Hello, ", person, "!")
.

// Using functions
greet(name)`} />
          </SubSection>
        </DocSection>
      )
    },
    'fundamentals': {
      title: "Language Fundamentals",
      content: (
        <DocSection title="Language Fundamentals">
          <SubSection title="Variables">
            <p className="mb-4">Variables store information that you can use later in your program.</p>
            <CodeExample 
              title="Variables Example"
              code={`// Text (String)
name is "Lion"

// Numbers
age is 5
price is 19.99

// True/False (Boolean)
isHappy is true

// Updating variables
count is 1
count is count + 1   // Now count is 2`} 
            />
          </SubSection>

          <SubSection title="Data Types">
            <p className="mb-4">Our language supports these main types of data:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Text (String)</strong> - Any text in quotes: "Hello"</li>
              <li><strong>Numbers</strong> - Both whole numbers and decimals: 42, 3.14</li>
              <li><strong>True/False (Boolean)</strong> - true or false</li>
              <li><strong>Lists (Arrays)</strong> - Collections of items</li>
            </ul>
          </SubSection>
        </DocSection>
      )
    },
    'functions': {
      title: "Functions",
      content: (
        <DocSection 
          title="Functions" 
          description="Functions are like recipes - they're instructions that you can use over and over again."
        >
          <SubSection title="Creating Functions">
            <p className="mb-4">Functions help you organize and reuse your code.</p>
            <CodeExample 
              title="Basic Function"
              code={`// Simple function
greet does
    show("Hello!")
.

// Function with parameters
add takes a, b does
    return a + b
.

// Function with multiple parameters
createPerson takes name, age, city does
    show(name, " is ", age, " years old from ", city)
.`} 
            />
          </SubSection>

          <SubSection title="Using Functions">
            <CodeExample 
              title="Using Functions"
              code={`// Call simple function
greet()

// Using function with parameters
sum is add(5, 3)
show(sum)  // Shows: 8

// Using function with multiple parameters
createPerson("Alex", 25, "Paris")`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'control-flow': {
      title: "Control Flow",
      content: (
        <DocSection title="Control Flow">
          <SubSection title="If Statements">
            <p className="mb-4">Make your program make decisions based on conditions.</p>
            <CodeExample code={`age is 15

if age >= 18 then
    show("You can vote!")
otherwise
    show("Too young to vote")
.`} />
          </SubSection>

          <SubSection title="Loops">
            <p className="mb-4">Do things multiple times with different types of loops.</p>
            <CodeExample code={`// Repeat something a specific number of times
repeat 3 times
    show("Hip hip hooray!")
.

// Keep going while something is true
count is 0
till count equals 5 do
    show(count)
    count is count + 1
.`} />
          </SubSection>
        </DocSection>
      )
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden border-b bg-white sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => setSidebarOpen(true)} className="p-2">
            <Menu size={24} />
          </button>
          <h1 className="font-bold">Documentation</h1>
          <div className="w-8"></div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/20" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-80 bg-white shadow-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Navigation</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="space-y-1">
              {Object.entries(sections).map(([key, section]) => (
                <DocSidebarLink
                  key={key}
                  title={section.title}
                  active={activeSection === key}
                  onClick={() => {
                    setActiveSection(key);
                    setSidebarOpen(false);
                  }}
                />
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 shrink-0 pr-8 py-8">
            <div className="sticky top-8">
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Documentation
                </h2>
                <nav className="space-y-1">
                  {Object.entries(sections).map(([key, section]) => (
                    <DocSidebarLink
                      key={key}
                      title={section.title}
                      active={activeSection === key}
                      onClick={() => setActiveSection(key)}
                    />
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Content */}
          <main className="flex-1 py-8">
            {sections[activeSection].content}
            
            {/* Next/Previous Navigation */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex justify-between items-center">
                <button className="text-sm flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <ArrowRight size={16} className="rotate-180" /> Previous
                </button>
                <button className="text-sm flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  Next <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Documentation;