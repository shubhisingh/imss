import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { bookActions } from '../store/actions';
import { connect } from 'react-redux';

class InfiniteScroller extends React.Component {
	componentDidMount() {
		this.props.getBooks(1);
	}

	loadNextPage = () => {
		this.props.getBooks(this.props.currPage);
	}

	render () {
		const { books } = this.props;
		console.log('sdjfldsjflsdjl', books);
		return (
			<InfiniteScroll
				pageStart={0}
				loadMore={this.loadNextPage}
				hasMore={true || false}
				loader={<div className="loader" key={0}>Loading ...</div>}
			>
				{books.length && books.map(book => {
					return (
						<div style={{padding: 40}}>
							<span>{book.name}</span>
						</div>
					);
				})}
			</InfiniteScroll>
		);
	}
}

const mapStateToProps = state => ({...state.bookReducers});

const mapDispatchToProps = dispatch => ({getBooks: pageNo => dispatch(bookActions.getData(pageNo))});

export default connect(mapStateToProps, mapDispatchToProps)(InfiniteScroller);