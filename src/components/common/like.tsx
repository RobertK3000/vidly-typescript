import * as React from 'react';
import { Component } from 'react';

// Input: liked: boolean
// Output: onClick

export interface LikeProps {
  liked: boolean | undefined
  onClick: any
}
 

class Like extends React.Component<LikeProps> {
  render() { 
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i onClick={this.props.onClick} className= {classes} aria-hidden="true"></i>
    )
    ;
  }
}
 
export default Like;