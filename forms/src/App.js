import React from 'react';
import FormField from './components/formFields/index'

function App() {
  return (
    <div className="App">
      <FormField type="text" name="name1" value="1" hasError={true} error="some error" />
      <FormField type="select" name="name2" value="2" hasError={true} error="some error" />
    </div>
  );
}

export default App;
