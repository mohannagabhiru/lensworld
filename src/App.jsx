import { useState } from 'react';
import './App.css';
import { list } from './constants'

function App() {
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(false);

  const handleClick = (itemName) => {
    setSelectedItem(itemName.name);
    setSelectedIndex(!selectedIndex);
  }

  return (
    <div className='container'>
      <div className='header'>
        
      </div>
      <div className='section'>
        <div className='sidebar'>
          {
            list.map((item, index) => (<div className='listitem' key={index} onClick={() => handleClick(item, index)}>
                <div className='mainDetails'>
                <p>{item.name}</p>
                {
                  item?.child?.length > 0 && <p>open</p>
                }
                </div>
                {
                  ( selectedItem == item.name && selectedIndex) && (
                    <div className="childContainer">
                        {
                          item.child.map((details, index) => (
                            <div className="subItems" key={index}>
                              <p>{details}</p>
                            </div>
                          )) 
                        }
                    </div>
                   )
                }
              </div>))
          }
        </div>
        <div className='content'>

        </div>
      </div>
    </div>
  )
}

export default App
