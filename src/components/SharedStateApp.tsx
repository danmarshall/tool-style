import React, { useState, createContext, useContext } from 'react';

// Create a context for shared state
const AppContext = createContext<{
  count: number;
  setCount: (count: number) => void;
  text: string;
  setText: (text: string) => void;
} | null>(null);

// Hook to use the app context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within SharedStateApp');
  }
  return context;
};

// Main app component that provides shared state
export default function SharedStateApp({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <AppContext.Provider value={{ count, setCount, text, setText }}>
      <aside>
        <section>
          <h2>Settings (Sidebar)</h2>
          <label htmlFor="text-input">Enter text:</label>
          <input
            type="text"
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
          />
          
          <div style={{ marginTop: '1rem' }}>
            <label>Counter: {count}</label>
            <div style={{ marginTop: '0.5rem' }}>
              <button type="button" onClick={() => setCount(count + 1)}>
                Increment
              </button>
              <button type="button" onClick={() => setCount(count - 1)} style={{ marginLeft: '0.5rem' }}>
                Decrement
              </button>
            </div>
          </div>
        </section>
      </aside>
      
      <main>
        <section>
          <h2>Output (Main)</h2>
          <div style={{ minHeight: '200px' }}>
            <p><strong>Shared Text:</strong> {text || '(empty)'}</p>
            <p><strong>Shared Counter:</strong> {count}</p>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              The text and counter values are shared between the sidebar and main areas through React context!
            </p>
          </div>
        </section>
        
        <section>
          <button type="button" onClick={() => setCount(0)}>Reset Counter</button>
          <button type="button" onClick={() => setText('')} style={{ marginLeft: '0.5rem' }}>Clear Text</button>
        </section>
      </main>
    </AppContext.Provider>
  );
}
