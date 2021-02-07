import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { withbookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    // 1. receive data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    // dispatch action to store
    this.props.booksLoaded(data);

  }

  render() {
    const { books } = this.props;

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={ book.id }><BookListItem book={ book } /></li>
            )
          })
        }
      </ul>
    );
  }
}

// эта функция определяет какие св-ва получит компонент и redux store

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withbookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);