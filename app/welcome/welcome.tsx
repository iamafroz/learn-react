export function Welcome() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg font-sans">
      <header className="text-center pb-4">
        <h1 className="text-3xl font-bold text-gray-800">MOHD AFROZ MOHD MOHIDDIN</h1>
        <p className="text-gray-600">Mumbai, India | +91 8425979051 | afrozshaikh78901@gmail.com</p>
      </header>
      <hr />

      <section className="mt-4 mb-2">
        <h2 className="text-xl font-semibold text-gray-700  pb-2">Professional Summary</h2>
        <p className="text-gray-600 mt-2">Results-driven Software Engineer with 3 years of experience in full-stack development, specializing in Next.js, TypeScript, CakePHP, React, and Laravel. Passionate about writing clean, efficient code and optimizing backend processes.</p>
      </section>
      <hr />

      <section className="mt-4 mb-2">
        <h2 className="text-xl font-semibold text-gray-700  pb-2">Work History</h2>
        <h3 className="text-lg font-semibold text-gray-800">Software Engineer | Dawateislamihind</h3>
        <p className="text-gray-600">09/2022 - Present | Mumbai, India</p>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Developed and maintained full-stack applications using Next.js, TypeScript, Laravel, and CakePHP.</li>
          <li>Optimized database queries, reducing API response time.</li>
          <li>Designed and implemented responsive UI components, improving user engagement.</li>
          <li>Integrated third-party APIs, including Razorpay, enhancing payment processing efficiency.</li>
          <li>Led debugging and troubleshooting efforts, resolving production issues.</li>
        </ul>
      </section>
      <hr />

      <section className="mt-4 mb-2">
        <h2 className="text-xl font-semibold text-gray-700  pb-2">Education</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li><strong>M.Sc. Computer Science</strong>, Mumbai University (2023)</li>
          <li><strong>B.Sc. Computer Science</strong>, Mumbai University (2021)</li>
          <li><strong>12th Computer Science</strong>, Maharashtra Higher Secondary School Certificate (2018)</li>
          <li><strong>10th</strong>, Maharashtra Higher Secondary School Certificate (2016)</li>
        </ul>
      </section>
      <hr />

      <section className="mt-4 mb-2">
        <h2 className="text-xl font-semibold text-gray-700  pb-2">Certifications</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>AWS Certified Developer – Associate</li>
        </ul>
      </section>
      <hr />

      <section className="mt-4 mb-2">
        <h2 className="text-xl font-semibold text-gray-700  pb-2">Projects</h2>
        <h3 className="text-lg font-semibold text-gray-800">Subscription Management System</h3>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Designed a subscription-based platform with automated payment processing.</li>
          <li>Implemented a dynamic validation system for form handling in Next.js.</li>
          <li>Optimized backend operations in CakePHP for seamless data processing.</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Invoice Automation System</h3>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Developed a system to auto-generate and manage invoices efficiently.</li>
          <li>Improved Razorpay API integration, reducing redundant API calls.</li>
          <li>Enhanced database query performance, decreasing load times.</li>
        </ul>
      </section>
      <hr />

      <section className="mt-4 mb-2">
        <h2 className="text-xl font-semibold text-gray-700  pb-2">Skills</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-600 mt-2">
          <ul className="list-disc list-inside">
            <li>Next.js</li>
            <li>React.js</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>TailwindCSS</li>
            <li>Laravel</li>
          </ul>
          <ul className="list-disc list-inside">
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>AWS</li>
            <li>Docker</li>
            <li>Git & GitHub</li>
            <li>Bitbucket</li>
            <li>Postman</li>
          </ul>
        </div>
      </section>
      <hr />

      <section className="mt-4 mb-2">
        <h2 className="text-xl font-semibold text-gray-700  pb-2">Additional Information</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Strong problem-solving skills and ability to work in agile environments.</li>
          <li>Passionate about continuous learning and staying updated with new technologies.</li>
        </ul>
      </section>
    </div>
  );
}