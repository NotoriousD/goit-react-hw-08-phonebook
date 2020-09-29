import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../Components/Loader";
import ContactForm from "../../Components/ContactForm";
import ContactList from "../../Components/ContactList";
import Filter from "../../Components/Filter";
import style from "./contactpage.module.css";
import pop from "../../Transiction/pop.module.css";
import { contactsSelectors, contactsOperations } from "../../Redux/contacts";
import { CSSTransition } from "react-transition-group";

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoading, contacts } = this.props;
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          {isLoading && <Loader />}

          <ContactForm />

          <CSSTransition
            in={contacts.length > 1}
            timeout={500}
            classNames={pop}
            unmountOnExit
          >
            <Filter />
          </CSSTransition>
          <ContactList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
