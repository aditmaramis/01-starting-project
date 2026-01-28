import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
	const [selectedTopic, setSelectedTopic] = useState(null);

	function handleSelect(selectedButton) {
		// selectedButton => 'components', 'jsx', 'props', 'state'
		setSelectedTopic(selectedButton);
	}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((conceptItem) => (
							<CoreConcept
								key={conceptItem.title}
								{...conceptItem}
							/>
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton
							onSelect={() => handleSelect('components')}
							isSelected={selectedTopic === 'components'}
						>
							Components
						</TabButton>
						<TabButton
							onSelect={() => handleSelect('jsx')}
							isSelected={selectedTopic === 'jsx'}
						>
							JSX
						</TabButton>
						<TabButton
							onSelect={() => handleSelect('props')}
							isSelected={selectedTopic === 'props'}
						>
							Props
						</TabButton>
						<TabButton
							onSelect={() => handleSelect('state')}
							isSelected={selectedTopic === 'state'}
						>
							State
						</TabButton>
					</menu>
					{!selectedTopic ? (
						<p>Please select a topic.</p>
					) : (
						<div id="tab-content">
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;
