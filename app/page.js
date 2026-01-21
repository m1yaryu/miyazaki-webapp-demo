import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Menu */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Ryu's Blog</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#buttons" className="text-gray-700 hover:text-indigo-600 transition">Buttons</a>
              <a href="#colors" className="text-gray-700 hover:text-indigo-600 transition">Colors</a>
              <a href="#layouts" className="text-gray-700 hover:text-indigo-600 transition">Layouts</a>
              <a href="#text" className="text-gray-700 hover:text-indigo-600 transition">Typography</a>
            </div>
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Tailwind CSS Components
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A showcase of beautiful, responsive components built with Tailwind CSS
          </p>
        </div>

        {/* Blog */}
        <section id="blog">
          <div className="text-4xl font-extrabold text-gray-900 mb-4">
            <h2>How to use Tailwind CSS</h2>
          </div>
          <div className="text-black text-justify">
            <p>
              Hey there, fellow web creators!
              <br></br>
              If you've spent any time building websites, you know the dance: switching between your HTML and CSS files, meticulously crafting selectors, 
              and often finding yourself writing repetitive styles. It's a fundamental part of front-end development, but let's be honest, it can sometimes 
              feel like a drag. What if there was a way to speed up your styling workflow, maintain consistency, and build beautiful UIs without ever leaving your HTML? 
              Enter Tailwind CSS , the utility-first framework that's changing how many of us think about styling.
              <br></br>
              Tailwind isn't a traditional UI kit with pre-designed components; instead, it provides a vast array of low-level utility classes directly in your markup. 
              Want a blue background with some padding? Instead of writing a custom class and defining its styles in a separate stylesheet, you just add classes like 
              bg-blue-500 and p-4 to your HTML element. This "utility-first" approach means you compose your designs by combining these small, focused classes. 
              It might look a little dense at first glance, but the power lies in its efficiency: you can rapidly prototype, iterate, and build complex, responsive layouts
              with incredible speed, all while ensuring a consistent design system without writing a single line of custom CSS in a separate file.
              <br></br>
              So, if you're looking to streamline your development process, build bespoke designs without fighting a framework's opinions, and enjoy a more focused styling experience, Tailwind CSS is definitely worth exploring. It's a game-changer for many, turning styling into a fluid and intuitive part of building your web projects. Give it a shot – you might just wonder how you ever lived without it!
            </p>
          </div>
        </section>

        {/* Buttons Section */}
        <section id="buttons" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Buttons</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition">
                Primary Button
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition">
                Success Button
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition">
                Danger Button
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition">
                Secondary Button
              </button>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded transition">
                Outline Button
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded transition">
                Gradient Button
              </button>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section id="colors" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Color Palette</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-full h-24 bg-red-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Red</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-blue-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Blue</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-green-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Green</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-yellow-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Yellow</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-purple-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Purple</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-pink-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Pink</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section id="text" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Typography</h2>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
            <h1 className="text-5xl font-bold text-gray-900">Heading 1 - Extra Large</h1>
            <h2 className="text-4xl font-bold text-gray-900">Heading 2 - Large</h2>
            <h3 className="text-3xl font-bold text-gray-900">Heading 3 - Medium</h3>
            <p className="text-xl text-gray-700">This is a large paragraph with text-xl class.</p>
            <p className="text-base text-gray-600">This is a regular paragraph with text-base class.</p>
            <p className="text-sm text-gray-500">This is small text with text-sm class.</p>
            <p className="font-bold text-gray-900">This is bold text.</p>
            <p className="italic text-gray-700">This is italic text.</p>
            <p className="underline text-blue-600">This is underlined text.</p>
          </div>
        </section>

        {/* Layouts Section */}
        <section id="layouts" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Layout Examples</h2>

          {/* Grid Layout */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-bold mb-4">Grid Layout</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 1</h4>
                <p>This is a card in a responsive grid layout.</p>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 2</h4>
                <p>Grid automatically adjusts to screen size.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 3</h4>
                <p>Three columns on large screens, stacked on mobile.</p>
              </div>
            </div>
          </div>

          {/* Flex Layout */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Flex Layout</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-red-500 text-white p-4 rounded-lg flex-shrink-0">Item 1</div>
              <div className="bg-orange-500 text-white p-4 rounded-lg flex-shrink-0">Item 2</div>
              <div className="bg-yellow-500 text-white p-4 rounded-lg flex-shrink-0">Item 3</div>
              <div className="bg-teal-500 text-white p-4 rounded-lg flex-shrink-0">Item 4</div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Images</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <img
                  src="https://i.redd.it/9lp7g38hijeg1.jpeg"
                  alt="Placeholder"
                  className="w-full rounded-lg shadow-md"
                />
                <p className="mt-2 text-center font-medium">Rounded Image</p>
              </div>
              <div>
                <img
                  src="https://i.redd.it/cudv5fgoa99g1.jpeg"
                  alt="Placeholder"
                  className="w-full rounded-full shadow-md"
                  />
                <p className="mt-2 text-center font-medium">Circular Image</p>
              </div>
              <div>
                <img
                  src="https://i.redd.it/1htxknemqr7g1.jpeg"
                  alt="Placeholder"
                  className="w-full shadow-2xl"
                />
                <p className="mt-2 text-center font-medium">Shadow Image</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">Built with Next.js and Tailwind CSS</p>
          <p className="text-sm text-gray-400 mt-2">A beginner-friendly tutorial project</p>
        </div>
      </footer>
    </div>
  );
}