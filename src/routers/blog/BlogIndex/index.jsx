import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Card, Popconfirm, Button, Menu, Modal, Tag, Dropdown, Icon } from 'antd';
import './style.less';

class BlogIndex extends React.PureComponent {
  static propTypes = {
    location: PropTypes.object,
    dispatch: PropTypes.func,
    loading: PropTypes.bool,
    user: PropTypes.object,
    list: PropTypes.array,
    filters: PropTypes.object,
    pagination: PropTypes.object,
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <ul className="blog-list">
          {list.map(blog =>
            <li key={blog.id}>
              <h4><Link>{blog.title}</Link></h4>
              <p>{blog.user ? blog.user.name : ''}</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ loading, article }) => ({
  loading: loading.models.article,
  list: article.list,
  filters: article.filters,
  pagination: {
    current: article.page,
    pageSize: article.per,
    total: article.totalCount,
    showTotal: total => <span>共有 {total} 篇解题报告</span>,
  }
});

export default connect(mapStateToProps)(BlogIndex);