import React from 'react';
import {connect} from "react-redux";
import DelayUnmount from "../../components/DelayUnmount";
import NovoContatoForm from "./NovoContatoForm";


const NovoContato = ({visible}) =>
    <DelayUnmount mount={visible}><NovoContatoForm/></DelayUnmount>

const mapStateToProps = ({panel}) => ({
    visible: panel.novoContato
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NovoContato);