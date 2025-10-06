import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './layout/Header';
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import TabButton from './layout/TabButton';

function App() {
  const [selectedTab, setSelectedTab] = useState('components');
  function handleSelect(tab) {
    console.log(tab)
    setSelectedTab(tab)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item}></CoreConcept>
            ))}
          </ul>
        </section>
        <section id='examples'>
          <menu>
             <TabButton isSelected={selectedTab==='components'} onSelect={() => handleSelect('components')}>Components</TabButton>
             <TabButton isSelected={selectedTab==='jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
             <TabButton isSelected={selectedTab==='props'} onSelect={() => handleSelect('props')}>Props</TabButton>
             <TabButton isSelected={selectedTab==='state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTab].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
