import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getContacts = (state) => state.contacts.items;

const showContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const lowerCaseFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerCaseFilter)
    );
  }
);

export default {
  getContacts,
  getLoading,
  getFilter,
  showContacts,
};
