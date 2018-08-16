import React, { Component } from 'react';


export default class Contact extends Component {
  state = { allVisible: false };
  
toggleAllDetails = () =>
    this.setState({ allVisible: !this.state.allVisible });
  
render() {
    const { contact } = this.props;
    
return (
      <div onClick={this.toggleAllDetails}>

        <div><li><b>{contact.NACHNAME +'  '+ contact.VORNAME}</b>  <span class="glyphicon glyphicon-user" aria-hidden="true"> </span> </li></div>
         <div>{'arbeiten bei  : '+ contact.LIEFERANT}</div>
        {this.state.allVisible ? (
          <div>
          <div align ='center'>{'APNR : '+ contact.APNR}</div>
          <div align ='center'>{'IEFERANT_HOMEPAGE : ' + contact.LIEFERANT_HOMEPAGE} <a href={contact.LIEFERANT_HOMEPAGE}>URL<span class="glyphicon glyphicon-search" aria-hidden="true"> </span> </a></div>
          <div align ='center'>{'EMAIL : ' + contact.EMAIL}     <a href={'mailto:' + contact.EMAIL}> E-mail   <span class="glyphicon glyphicon-envelope" aria-hidden="true"> </span> <span class="sr-only">Error:</span> </a></div>
          <div align ='center'>{'TELEFON : ' + contact.TELEFON}   <a href="tel:+contact.TELEFON" class="btn btnVert">  ANRUF <span class="glyphicon glyphicon-earphone" aria-hidden="true"> </span> </a> </div>
          <div align ='center'>{'TELEFON_M : ' + contact.TELEFON_M}<a href="tel:+contact.TELEFON_M" class="btn btnVert">ANRUF <span class="glyphicon glyphicon-earphone" aria-hidden="true"> </span> </a> </div>
          <div align ='center'>{'GEB : ' + contact.GEB}</div>
          <div align ='center'>{'Herr : ' + contact.Herr}</div>
          <div align ='center'>{'EDATUM : ' + contact.EDATUM}</div>
          <div align ='center'>{'BEARBEITER : ' + contact.BEARBEITER}</div>
          <div align ='center'>{'BDATUM : ' + contact.BDATUM}</div>
          <div align ='center'>{'POSITION : '+ contact.POSITION}</div>
          <div align ='center'>{'ANREDE_BRIEF : ' + contact.ANREDE_BRIEF}</div>
          <div align ='center'>{'ROWID : ' + contact.ROWID}</div>
          </div>
        ) : null}
      </div>
    );
  
}
}
