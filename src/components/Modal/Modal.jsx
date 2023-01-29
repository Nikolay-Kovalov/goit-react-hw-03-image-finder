import { Overlay, Modal} from "./Modal.styled"

import { Component } from "react"
export class ModalWindow extends Component {

    handleKeyDown = evt => {
   
            if (evt.code === 'Escape')
                this.props.onClose();
      
}

    componentDidMount() {

        window.addEventListener("keydown", this.handleKeyDown)  
           
    }

    componentWillUnmount() {
        
        window.removeEventListener("keydown", this.handleKeyDown)
    }

    handleBackdropClick = evt => {
        console.log(evt.currentTarget)
        console.log(evt.target)
        if (evt.currentTarget === evt.target) {
            this.props.onClose();

        }
    }

    

    render() {
        const { largeImage } = this.props

        return (
            <Overlay onClick={this.handleBackdropClick}>
                <Modal>
                    <img src={largeImage} alt="" />
                </Modal>
            </Overlay>
        )
    }
    }
