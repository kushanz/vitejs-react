import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './layout/Header';
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from './data';

function App() {
  const [count, setCount] = useState(0);
  function handleCilck() {
    setCount();
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept
                image={item.image}
                title={item.title}
                description={item.description}
              ></CoreConcept>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
