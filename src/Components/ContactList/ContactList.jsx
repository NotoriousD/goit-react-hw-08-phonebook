import React, { Component } from "react";
import styles from "./contactlist.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../Redux/contacts";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

class ContactList extends Component {
  handleDeleteContact = (id) => () => {
    const { deleteContact } = this.props;

    deleteContact(id);
  };

  render() {
    const { contacts } = this.props;
    return (
      <TransitionGroup component="ul" className={styles.list}>
        {contacts.map((item) => (
          <CSSTransition key={item.id} timeout={250} classNames={styles}>
            <li>
              <div className={styles.wrapper}>
                <div className={styles.container}>
                  <span className={styles.telName}>{item.name}</span>
                  <span className={styles.telNumber}>{item.number}</span>

                  <Button
                    id={item.id}
                    onClick={this.handleDeleteContact(item.id)}
                    variant="danger"
                  >
                    &times;
                  </Button>
                </div>
              </div>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return { contacts: contactsSelectors.showContacts(state) };
};

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
