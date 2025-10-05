import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './layout/Header';
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from './data';
import TabButton from './layout/TabButton';

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
        <section id='examples'>
          <menu>
             <TabButton>Components</TabButton>
             <TabButton>JSX</TabButton>
             <TabButton>Props</TabButton>
             <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
