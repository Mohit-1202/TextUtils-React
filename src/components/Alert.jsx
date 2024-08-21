// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';
export default function Alert(props) {
    const capitailize=(word)=>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitailize(props.alert.type)}</strong>{props.alert.msg}
</div>
  )
}
Alert.propTypes ={
    alert: PropTypes.string.isRequired,
}