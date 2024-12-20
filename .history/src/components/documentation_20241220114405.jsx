import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Play, Book, Code, Box, Search, Menu, X, ArrowRight } from 'lucide-react';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sections = {
    'getting-started': {
      title: "Getting Started",
      content: (
        <DocSection 
          title="Getting Started" 
          description="Welcome to our super fun programming language! Let's learn how to write cool programs together! 🚀"
        >
          <SubSection title="Your First Program">
            <p className="mb-4">Let's write your very first program - we'll make the computer say hello!</p>
            <CodeExample 
              title="hello_world.simple"
              code={`// This is your first program!
message is "Hello, friends!"
show(message)`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'variables': {
      title: "Variables (Like Magic Boxes!)",
      content: (
        <DocSection 
          title="Variables - Your Program's Memory Boxes!" 
          description="Think of variables like magical boxes where you can store different things - numbers, words, or even lists of stuff!"
        >
          <SubSection title="Creating Your Magic Boxes">
            <CodeExample 
              title="Creating Variables"
              code={`// Storing a word
my_name is "Alex"

// Storing a number
my_age is 10

// Storing multiple numbers
my_scores is 95, 87, 92

// Changing what's in your box
my_score is 85
my_score is my_score + 5   // Now it's 90!`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'arrays': {
      title: "Arrays (Lists of Things)",
      content: (
        <DocSection 
          title="Arrays - Making Lists of Things!" 
          description="Arrays are like shopping lists - you can put lots of things in them and find them easily later!"
        >
          <SubSection title="Creating Lists">
            <CodeExample 
              title="Making Lists (Arrays)"
              code={`// Making a list of numbers
my_numbers is 1, 2, 3, 4, 5

// Getting things from your list
first_number is my_numbers[0]     // Gets 1
second_number is my_numbers at 1  // Gets 2

// Finding out how long your list is
list_size is length of my_numbers

// Sorting your list
sorted_numbers is arrange my_numbers in ascending`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'functions': {
      title: "Functions (Your Own Commands)",
      content: (
        <DocSection 
          title="Functions - Create Your Own Commands!" 
          description="Functions are like writing your own recipe - you can use them again and again!"
        >
          <SubSection title="Making Your Own Commands">
            <CodeExample 
              title="Creating Functions"
              code={`// A simple hello function
say_hello does
    show("Hi there!")
.

// A function that adds two numbers
add_numbers takes number1, number2 does
    sum is number1 + number2
    return sum
.

// Using your functions
say_hello()
result is add_numbers(5, 3)   // Gets 8`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'classes': {
      title: "Classes (Creating Things)",
      content: (
        <DocSection 
          title="Classes - Making Your Own Things!" 
          description="Classes are like blueprints for making your own special things in your program!"
        >
          <SubSection title="Creating Your Own Things">
            <CodeExample 
              title="Making a Pet Class"
              code={`// Making a pet blueprint
create Pet with name, type does
    make_sound takes sound does
        show(name, " the ", type, " says: ", sound)
    .
.

// Making a pet
my_pet is Pet with "Fluffy", "cat"
my_pet.make_sound("Meow!")   // Shows: Fluffy the cat says: Meow!`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'loops': {
      title: "Loops (Doing Things Again and Again)",
      content: (
        <DocSection 
          title="Loops - Repeat the Fun!" 
          description="Loops help you do the same thing many times without writing it over and over!"
        >
          <SubSection title="Different Ways to Repeat">
            <CodeExample 
              title="Using Loops"
              code={`// Counting to 5
count is 1
till count > 5 do
    show(count)
    count is count + 1
.

// Doing something exactly 3 times
repeat 3 times
    show("Hip hip hooray!")
.`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'conditions': {
      title: "Making Choices (If Statements)",
      content: (
        <DocSection 
          title="Making Choices in Your Program" 
          description="Your program can make decisions just like you do!"
        >
          <SubSection title="Using If Statements">
            <CodeExample 
              title="Making Decisions"
              code={`score is 85

if score >= 90 then
    show("Super amazing job!")
otherwise if score >= 80 then
    show("Great work!")
otherwise
    show("Keep practicing!")
.`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'dictionaries': {
      title: "Dictionaries (Word Books)",
      content: (
        <DocSection 
          title="Dictionaries - Like Looking Things Up!" 
          description="Dictionaries are like address books - each name has something special connected to it!"
        >
          <SubSection title="Using Dictionaries">
            <CodeExample 
              title="Making a Dictionary"
              code={`// Making a dictionary of ages
friends is Name "Tom", Age 10, Grade 5

// Looking up values
toms_age is Age of friends    // Gets 10

// Changing values
Name of friends is "Tommy"    // Changes Tom to Tommy`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'error-handling': {
      title: "Handling Mistakes",
      content: (
        <DocSection 
          title="Dealing with Mistakes" 
          description="Sometimes things go wrong, but we can handle it!"
        >
          <SubSection title="Try and Oops Blocks">
            <CodeExample 
              title="Handling Errors"
              code={`try
    // Try to do something
    show(undefined_variable)
oops
    // If it doesn't work, do this instead
    show("Oops! Something went wrong!")
.`} 
            />
          </SubSection>
        </DocSection>
      )
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden lg:block w-64 shrink-0 pr-8 py-8">
            <div className="sticky top-8">
              <nav className="space-y-1">
                {Object.entries(sections).map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors
                      ${activeSection === key ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <main className="flex-1 py-8">
            {sections[activeSection].content}
          </main>
        </div>
      </div>
    </div>
  );
};

const DocSection = ({ title, description, children }) => (
  <div className="mb-16">
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

const CodeExample = ({ code, title }) => (
  <div className="bg-gray-900 text-gray-100 rounded-lg overflow-hidden my-4">
    {title && (
      <div className="px-4 py-2 bg-gray-800 border-b border-gray-700 text-sm">
        {title}
      </div>
    )}
    <div className="p-4 font-mono text-sm">
      <pre className="whitespace-pre-wrap">{code}</pre>
    </div>
  </div>
);

export default Documentation;