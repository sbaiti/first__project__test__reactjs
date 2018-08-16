import React, { Component } from 'react';
import Contact from './components/Contact';
import './styles/bootstrap.min.css';
import './styles/App.css';
import ContactsData from './data/Contact.json';
const labels = {
  APNR: 'APNR : ',
  LIEFERANT: 'LIEFERANT :                   ',
  LIEFERANT_HOMEPAGE:'LIEFERANT_HOMEPAGE : ',
  VORNAME: 'VORNAME :                     ',
  NACHNAME: 'NACHNAME : ',
  EMAIL: 'EMAIL: ',
  TELEFON: 'TELEFON : ',
  TELEFON_M: 'TELEFON_M : ',
  GEB: 'GEB : ',
  ANREDE: 'Adresse : ',
  EDATUM: 'ANREDE : ',
  BEARBEITER: 'BEARBEITER : ',
  BDATUM: 'BDATUM : ',
  POSITION: 'POSITION : ',
  ANREDE_BRIEF: 'ANREDE_BRIEF : ',
  ROWID: ' ROWID : ',
};
class App extends Component {
  state = {
    contacts: [],
    filters: {
      APNR: '',
      LIEFERANT: '',
      LIEFERANT_HOMEPAGE: '',
      VORNAME: '',
      NACHNAME: '',
      EMAIL: '',
      TELEFON: '',
      TELEFON_M: '',
      GEB: '',
      ANREDE: '',
      EDATUM: '',
      BEARBEITER: '',
      BDATUM: '',
      POSITION: '',
      ANREDE_BRIEF: '',
      ROWID: '',
    },
  };
  componentWillMount() {
    this.setState({ contacts: ContactsData.Data });
  }
  render() {
    console.log(this.state);
    return (
      <div className="container">
      <div> <h1> Licht & Schatten</h1></div>
<div> <h2>Recherchiere nach dem von dir gewünschten gemäß Attribut :  </h2></div>
{Object.keys(this.state.filters).map((f, i) => (
              <div className="col-md-8"key={'filter-' + i}>
                <b>{labels[f] + ' '}</b>
                <center>
                <input
                  onChange={e =>
                    this.setState({
                      filters: { ...this.state.filters, [f]: e.target.value },
                      contacts: ContactsData.Data.filter(
                        c => c && c[f] && c[f].indexOf(e.target.value) !== -1
                      ),
                    })
                  }
                  type="text"
                  value={this.state.filters[f]}

                />
                </center>

              </div>
            ))}
           
         <div> <h2>  Hier sind alle Kontakte:  </h2></div>
        {this.state.contacts.map((c, i) => (
          <Contact key={'contact' + i} contact={c} />
        ))}
      </div>
    );
  }
}

export default App;