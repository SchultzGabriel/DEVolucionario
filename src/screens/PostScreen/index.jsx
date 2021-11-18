import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/foundation/layout/Box';
import ContentWrapper from '../../components/commons/ContentBox';
import PostScreenWrapper from './style/PostWrapper';

const PostScreen = (props) => {
  const { post } = props;

  return (
    <ContentWrapper>
      <PostScreenWrapper>
        <PostScreenWrapper.HeaderSection>
          <h1>{post.title}</h1>
          <Box>
            <a target="_blank" href={`https://github.com/${post.author.github}`} rel="noreferrer" className="author">
              <img src={`https://github.com/${post.author.github}.png`} alt="" className="author__image" />
              <Box
                display="flex"
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="column"
                margin="0 20px"
              >
                <span>{post.author.name}</span>
                <time>{post.date}</time>
              </Box>
            </a>
          </Box>
        </PostScreenWrapper.HeaderSection>
        <PostScreenWrapper.ArticleSection
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
        <p>q</p>
      </PostScreenWrapper>
    </ContentWrapper>
  );
};

PostScreen.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    html: PropTypes.string,
  }).isRequired,
};

export default PostScreen;
