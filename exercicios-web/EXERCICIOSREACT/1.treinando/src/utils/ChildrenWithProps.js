import React from "react";

export default function childrenWithProps(props) {
  return React.Children.map(props.children, child => {
    return React.cloneElement(child, { ...props, ...child.props });
  });
}