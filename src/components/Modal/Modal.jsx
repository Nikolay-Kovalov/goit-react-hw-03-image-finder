import { createPortal } from "react-dom";
import { Component } from "react";
import { ModalWindow, Overlay } from "./Modal.styled";
import PropTypes from 'prop-types'

const modalRoot = document.querySelector('#modal-root')
export class Modal extends Component {
   

     componentDidMount() {
       window.addEventListener('keydown', this.handleKeyDown)
     }
  
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
      }
  
    handleKeyDown = (evt) => {
    if (evt.code === "Escape")
            this.props.onClose()
    }

onBackdropClose = (evt) => {
    if (evt.currentTarget === evt.target) {
       this.props.onClose()
    }
}

  render() {
    const{img} = this.props

        return (
            createPortal(
                <Overlay onClick={this.onBackdropClose}>
<ModalWindow >
    <img src={img} alt="" />
</ModalWindow>
</Overlay>
            , modalRoot)   
        )
    }
}


Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}






