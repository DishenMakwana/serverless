import React from 'react';

// eslint-disable-next-line
export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === 'approved') {
      content = comment.content;
    }

    if (comment.status === 'pending') {
      content = 'Awaiting moderation';
    }

    if (comment.status === 'rejected') {
      content = 'This comment has been rejected';
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
