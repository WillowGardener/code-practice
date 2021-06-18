import './App.css';
import DragNDrop from './components/dragNDrop'


const data = [
  {title: 'dingos', items: [1,2,3]},
  {title: 'wallabies', items: [4,5]},
]

function App() {
  return (
    <div className="App">
      <DragNDrop data={data} />
    </div>
  )
}

export default App;
