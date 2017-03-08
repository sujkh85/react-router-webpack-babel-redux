import React from 'react';

export default class Home extends React.Component {
  render() {
      console.log('this.props',this.props)
    return (
      <div>
        <h1 onClick={()=>{
                this.props.push('/mimi')
            }}>It Works</h1>
        <p>This React project just works including <span className="redBg">module</span> local styles.</p>
        <p>Enjoy!</p>
      </div>
    )
  }
}
