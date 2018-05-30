import React from "react";
import { Input } from 'antd';


class App extends React.Component {

  render(){
    return (
      <div>
      <div className="example-input">
        <Input size="large" placeholder="large size" />
        <Input placeholder="default size" />
        <Input size="small" placeholder="small size" />
      </div>
        <h1>Simple text</h1>
      </div>
    );
  }

}

export default App;
