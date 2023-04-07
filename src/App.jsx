import './App.css'
import Entry from './Components/Entry'

const files = [
  {
    name: 'node_modules',
    children: [
      {name: '.bin', children: [{name: 'bin'}]},
      {name: '.vite', children: [{name: 'vite'}]}
    ]
  },

  {
    name: 'public',
    children: [
      {name: 'vite.svg'}
    ]
  },

  {
    name: 'src',
    children: [
      {
        name: 'Components',
        children: [
          {name: 'Entry.jsx'}
        ] 
      },

      {
        name: 'Assets',
        children: [
          {name: 'react.svg'}
        ] 
      },
      {name: 'App.jsx'},
      {name: 'main.jsx'},
      {name: 'App.css'},
      {name: 'main.css'},
    ]
  },

  {name: '.gitignore'},

  {name: 'index.html'},

  {name: 'package.json'},

  {name: 'package-lock.json'},

  {name: 'vite.config.js'}
]

function App() {
  return (
    <div className="App">
      {files.map(entry => (
        <Entry name={entry.name} children={entry.children} depth={1} />
      ))}
    </div>
  )
}

export default App
